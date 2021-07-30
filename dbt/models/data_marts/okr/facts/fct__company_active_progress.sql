with
  company as (
    select * from {{ ref('dim__company') }}
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

  company_progress_in_active_key_result as (
    select
      company.id as company_id,
      {{ calculate_progress('key_result_check_in', 'key_result') }} as progress,
      key_result_check_in.created_at as date
      from company
      left join key_result on company.id = key_result.team_id
      left join key_result_latest_check_in on key_result.id = key_result_latest_check_in.key_result_id
      left join key_result_check_in on key_result_latest_check_in.key_result_check_in_id = key_result_check_in.id
      left join cycle on key_result.cycle_id = cycle.id
      where cycle.active = true
  ),

  final as (
    select
      company_id,
      avg(progress) as progress,
      max(date) as date
      from company_progress_in_active_key_result
      group by company_id
  )

select * from final