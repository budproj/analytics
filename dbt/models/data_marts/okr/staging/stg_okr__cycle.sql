with
  src_okr__cycle as (
    select * from {{ source('conformed', 'okr__cycle') }}
  ),

  final as (
    select
      id,
      active,
      period,
      cadence,
      team_id,
      date_start,
      date_end,
      parent_id,
      created_at,
      updated_at
    from src_okr__cycle
  )

select * from final