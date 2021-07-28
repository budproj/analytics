with
  src_amplitude__events as (
    select * from {{ source('conformed', 'amplitude__events') }}
  ),

  final as (
    select * from src_amplitude__events
  )

select * from final