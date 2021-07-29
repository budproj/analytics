with
  src_okr__team_users_user as (
    select * from {{ source('conformed', 'okr__team_users_user') }}
  ),

  final as (
    select * from src_okr__team_users_user
  )

select * from final