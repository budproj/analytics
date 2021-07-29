with
  stg_okr__team_users_user as (
    select * from {{ ref('stg_okr__team_users_user') }}
  ),

  final as (
    select * from stg_okr__team_users_user
  )

select * from final