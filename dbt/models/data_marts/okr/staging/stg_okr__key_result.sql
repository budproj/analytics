with
  src_okr__key_result as (
    select * from {{ source('conformed', 'okr__key_result') }}
  ),

  final as (
    select * from src_okr__key_result
  )

select * from final