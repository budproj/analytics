with
  stg_okr__team_users_user as (
    select * from {{ ref('stg_okr__team_users_user') }}
  ),

  final as (
    select user_id, team_id as company_id from stg_okr__team_users_user
  )

select * from final