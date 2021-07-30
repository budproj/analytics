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

  latest_pageview_by_user as (
    select 
      user_id,
      event_time
      from amplitude_event
      where
        event_type = 'PageView' and
        event_time in (
          select max(event_time) from amplitude_event where event_type = 'PageView' group by user_id
        )
  ),

  final as (
    select
      users.*,
      event_time as last_access_time,
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
        left join latest_pageview_by_user on latest_pageview_by_user.user_id = users.id
  )

select * from final