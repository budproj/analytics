with
  stg_okr__team as (
    select * from {{ ref('stg_okr__team') }}
  ),

  seed_buddy_companies_name as (
    select name from {{ ref('buddy_companies') }}
  ),

  seed_sandbox_companies_name as (
    select name from {{ ref('sandbox_companies') }}
  ),

  companies as (
    select * from stg_okr__team where parent_id is null
  ),

  final as  (
    select
      id,
      case
        when (
          select count(*) from seed_buddy_companies_name where name = companies.name
        ) = 1 then 'BUDDY'
        when (
          select count(*) from seed_sandbox_companies_name where name = companies.name
        ) = 1 then 'SANDBOX'
        else 'CUSTOMER'
      end as type
      from companies
  )

select * from final