with
  src_okr__cycle as (
    select * from {{ source('conformed', 'okr__cycle') }}
  ),

  final as (
    select * from src_okr__cycle
  )

select * from final