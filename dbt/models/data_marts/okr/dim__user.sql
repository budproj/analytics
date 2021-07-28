with stg_okr__user as (
  select * from {{ ref('stg_okr__user') }}
),

users as (
  select id from stg_okr__user
)

select id from users
