with
  stg_okr__user as (
    select * from {{ ref('stg_okr__user') }}
  ),

  amplitude_event as (
    select * from {{ ref('dim__amplitude_event') }}
  ),

  seed_buddy_users_email as (
    select email from {{ ref('buddy_users') }}
  ),

  seed_sandbox_users_email as (
    select email from {{ ref('sandbox_users') }}
  ),

  users as (
    select * from stg_okr__user
  ),

  first_pageview_by_user as (
    select 
      user_id,
      min(event_time) as event_time
      from amplitude_event
      where event_type = 'PageView'
      group by user_id
  ),

  latest_pageview_by_user as (
    select 
      user_id,
      max(event_time) as event_time
      from amplitude_event
      where event_type = 'PageView'
      group by user_id
  ),

  final as (
    select
      users.*,
      fe.event_time as first_access_time,
      le.event_time as last_access_time,
      date_part('day', fe.event_time::timestamp - created_at::timestamp)::float as activation_delta_days,
      case
        when (
          select count(*) from seed_buddy_users_email where email = users.email
        ) = 1 then 'BUDDY'
        when (
          select count(*) from seed_sandbox_users_email where email = users.email
        ) = 1 then 'SANDBOX'
        else 'CUSTOMER'
      end as type
      from users
        left join first_pageview_by_user fe on fe.user_id = users.id
        left join latest_pageview_by_user le on le.user_id = users.id
  )

select * from final