with
  users as (
    select * from {{ ref('dim__user') }}
  ),

  key_result as (
    select * from {{ ref('dim__key_result') }}
  ),

  cycle as (
    select * from {{ ref('dim__cycle') }}
  ),

  key_result_latest_check_in as (
    select * from {{ ref('fct__key_result_latest_check_in') }}
  ),

  key_result_check_in as (
    select * from {{ ref('dim__key_result_check_in') }}
  ),

  final as (
    select
      users.id as user_id,
      {{ calculate_progress('key_result_check_in', 'key_result') }} as progress,
      key_result_check_in.created_at as date
      from users
      left join key_result on users.id = key_result.owner_id
      left join key_result_latest_check_in on key_result.id = key_result_latest_check_in.key_result_id
      left join key_result_check_in on key_result_latest_check_in.key_result_check_in_id = key_result_check_in.id
      left join cycle on key_result.cycle_id = cycle.id
      where cycle.active = true
  )

select * from final