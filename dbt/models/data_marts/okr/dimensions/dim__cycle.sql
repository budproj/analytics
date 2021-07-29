with
  stg_okr__cycle as (
    select * from {{ ref('stg_okr__cycle') }}
  ),

  final as  (
    select * from stg_okr__cycle
  )

select * from final