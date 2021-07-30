with
  src_okr__team_users_user as (
    select * from {{ source('conformed', 'okr__team_users_user') }}
  ),

  final as (
    select team_id, user_id from src_okr__team_users_user
  )

select * from final