with
  src_okr__key_result_comment as (
    select * from {{ source('conformed', 'okr__key_result_comment') }}
  ),

  final as (
    select
      id,
      text,
      user_id,
      key_result_id,
      created_at,
      updated_at
    from src_okr__key_result_comment
  )

select * from final