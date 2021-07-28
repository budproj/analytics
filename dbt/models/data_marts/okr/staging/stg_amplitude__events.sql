with
  src_amplitude__events as (
    select * from {{ source('conformed', 'amplitude__events') }}
  ),

  non_null_user_events as (
    select * from src_amplitude__events where user_id is not null
  ),

  final as (
    select * from non_null_user_events
  )

select * from final