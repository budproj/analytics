with
  src_amplitude__events as (
    select * from {{ source('conformed', 'amplitude__events') }}
  ),

  final as (
    select * from src_amplitude__events where user_id is not null
  )

select * from final