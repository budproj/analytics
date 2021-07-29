with
  stg_okr__key_result as (
    select * from {{ ref('stg_okr__key_result') }}
  ),

  team as (
    select * from {{ ref('dim__team') }}
  ),

  company as (
    select * from {{ ref('dim__company') }}
  ),

  objective as (
    select * from {{ ref('dim__objective') }}
  ),

  final as  (
    select
      stg_okr__key_result.*,
      objective.cycle_id as cycle_id,
      company.id as company_id
      from stg_okr__key_result
      left join team on stg_okr__key_result.team_id = team.id
      left join company on team.company_id = company.id
      left join objective on objective.id = stg_okr__key_result.objective_id
  )

select * from final