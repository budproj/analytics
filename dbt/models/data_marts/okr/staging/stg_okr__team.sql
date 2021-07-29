with recursive
  src_okr__team as (
    select * from {{ source('conformed', 'okr__team') }}
  ),

  team_parents(id, parent_id, root_id) as (
    -- Get root nodes
    select id, parent_id, id as root_id
    from src_okr__team
    where parent_id is null

    union all

    -- Get children  
    select t.id, t.parent_id, p.root_id
    from team_parents p
    join src_okr__team t
    on t.parent_id = p.id
  ),

  team as (
    select 
      id,
      name,
      gender,
      owner_id,
      parent_id,
      description,
      created_at,
      updated_at
    from src_okr__team
  ),

  final as (
    select
      team.*,
      team_parents.root_id as company_id
      from team
      left join team_parents on team_parents.id = team.id
  )

select * from final