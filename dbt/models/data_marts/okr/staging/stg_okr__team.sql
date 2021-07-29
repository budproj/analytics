with
  src_okr__team as (
    select * from {{ source('conformed', 'okr__team') }}
  ),

  final as (
    select * from src_okr__team
  )

select * from final