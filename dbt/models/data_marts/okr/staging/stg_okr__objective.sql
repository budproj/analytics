with
  src_okr__objective as (
    select * from {{ source('conformed', 'okr__objective') }}
  ),

  final as (
    select
      id,
      title,
      team_id,
      cycle_id,
      owner_id,
      created_at,
      updated_at
    from src_okr__objective
  )

select * from final