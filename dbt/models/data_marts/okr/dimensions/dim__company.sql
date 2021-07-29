with
  stg_okr__team as (
    select * from {{ ref('stg_okr__team') }}
  ),

  buddy_companies_name as (
    select name from {{ ref('buddy_companies') }}
  ),

  sandbox_companies_name as (
    select name from {{ ref('sandbox_companies') }}
  ),

  companies as (
    select * from stg_okr__team where parent_id is null
  ),

  final as  (
    select
      id,
      name,
      case
        when (
          select count(*) from buddy_companies_name where name = companies.name
        ) = 1 then 'BUDDY'
        when (
          select count(*) from sandbox_companies_name where name = companies.name
        ) = 1 then 'SANDBOX'
        else 'CUSTOMER'
      end as type
      from companies
  )

select * from final