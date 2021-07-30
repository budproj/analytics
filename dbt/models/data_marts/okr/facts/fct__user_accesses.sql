with
  stg_amplitude__events as (
    select * from {{ ref('stg_amplitude__events') }}
  ),

  amplitude_event as (
    select * from stg_amplitude__events
  ),

  final as (
    select
      user_id,
      uuid as amplitude_event_id,
      event_time as access_time
      from amplitude_event
      where event_type = 'PageView'
  )

select * from final