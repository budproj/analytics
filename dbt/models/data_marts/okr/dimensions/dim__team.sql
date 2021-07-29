with
  stg_okr__team as (
    select * from {{ ref('stg_okr__team') }}
  ),

  final as  (
    select * from stg_okr__team
  )

select * from final