with
  src_okr__user as (
    select * from {{ source('conformed', 'okr__user') }}
  ),

  final as (
    select * from src_okr__user
  )

select * from final