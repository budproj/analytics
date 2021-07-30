{% macro calculate_progress(check_in_alias, kr_alias) -%}
  (
    (({{ check_in_alias }}.value - {{ kr_alias }}.initial_value) * 100) /
    coalesce(
      nullif(({{ kr_alias }}.goal - {{ kr_alias }}.initial_value), 0),
      1
    )
  )
{%- endmacro %}