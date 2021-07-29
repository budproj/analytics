with
  users as (
    select * from {{ ref('dim__user') }}
  ),

  key_result_check_in as (
    select * from {{ ref('dim__key_result_check_in') }}
  ),

  final as (
    select
      users.id as user_id,
      key_result_check_in.id as key_result_check_in_id,
      key_result_check_in.created_at as created_at
      from users
      left join key_result_check_in on users.id = key_result_check_in.user_id
  )

select * from final