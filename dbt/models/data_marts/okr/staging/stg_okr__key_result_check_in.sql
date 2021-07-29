with
  src_okr__key_result_check_in as (
    select * from {{ source('conformed', 'okr__key_result_check_in') }}
  ),

  final as (
    select
      id,
      value,
      comment,
      user_id,
      parent_id,
      confidence,
      key_result_id,
      created_at
    from src_okr__key_result_check_in
  )

select * from final