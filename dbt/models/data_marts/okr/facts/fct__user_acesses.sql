with
  stg_amplitude__events as (
    select * from {{ ref('stg_amplitude__events') }}
  ),

  events as (
    select user_id, event_time, event_type from stg_amplitude__events
  ),

  final as (
    select
      user_id,
      event_time as access_time
      from events
      where event_type = 'PageView'
  )

select * from final