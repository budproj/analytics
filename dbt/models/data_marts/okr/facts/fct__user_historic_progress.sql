with
  users as (
    select * from {{ ref('dim__user') }}
  ),

  final as (
    select
      users.id as user_id
      from users
  )

select * from final