with
  src_okr__user as (
    select * from {{ source('conformed', 'okr__user') }}
  ),

  final as (
    select
      id,
      role,
      about,
      email,
      gender,
      picture,
      nickname,
      authz_sub,
      first_name,
      last_name,
      linked_in_profile_address,
      created_at,
      updated_at
    from src_okr__user
  )

select * from final