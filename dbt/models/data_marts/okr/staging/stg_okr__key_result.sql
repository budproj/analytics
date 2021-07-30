with
  src_okr__key_result as (
    select * from {{ source('conformed', 'okr__key_result') }}
  ),

  final as (
    select
      id,
      goal,
      type,
      title,
      format,
      team_id,
      owner_id,
      description,
      objective_id,
      initial_value,
      created_at,
      updated_at
    from src_okr__key_result
  )

select * from final