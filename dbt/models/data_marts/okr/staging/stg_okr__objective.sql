with
  src_okr__objective as (
    select * from {{ source('conformed', 'okr__objective') }}
  ),

  final as (
    select * from src_okr__objective
  )

select * from final