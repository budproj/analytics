with
  stg_okr__user as (
    select * from {{ ref('stg_okr__user') }}
  ),

  stg_amplitude__events as (
    select * from {{ ref('stg_amplitude__events') }}
  ),

  users as (
    select id from stg_okr__user
  ),

  events as (
    select user_id, event_time, event_type from stg_amplitude__events
  ),

  latest_pageview_by_user as (
    select 
      user_id,
      event_time
      from events
      where
        event_type = 'PageView' and
        event_time in (
          select max(event_time) from events where event_type = 'PageView' group by user_id
        )
  ),

  final as (
    select
      id,
      event_time as last_access_time
      from users
        left join latest_pageview_by_user on latest_pageview_by_user.user_id = users.id
  )

select * from final