with
  stg_okr__team as (
    select * from {{ ref('stg_okr__team') }}
  ),

  companies as (
    select * from stg_okr__team where parent_id is null
  ),

  final as  (
    select id, name from companies
  )

select * from final