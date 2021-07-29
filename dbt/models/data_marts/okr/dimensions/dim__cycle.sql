with
  stg_okr__cycle as (
    select * from {{ ref('stg_okr__cycle') }}
  ),

  team as (
    select * from {{ ref('dim__team') }}
  ),

  company as (
    select * from {{ ref('dim__company') }}
  ),

  final as  (
    select
      stg_okr__cycle.*,
      company.id as company_id
      from stg_okr__cycle
      left join team on stg_okr__cycle.team_id = team.id
      left join company on team.company_id = company.id
  )

select * from final