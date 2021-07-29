with
  src_amplitude__events as (
    select * from {{ source('conformed', 'amplitude__events') }}
  ),

  final as (
    select
      app,
      dma,
      adid,
      city,
      data,
      idfa,
      uuid,
      groups,
      paying,
      region,
      country,
      library,
      os_name,
      user_id,
      event_id,
      language,
      platform,
      device_id,
      event_time,
      event_type,
      ip_address,
      os_version,
      session_id,
      device_type,
      sample_rate,
      amplitude_id,
      device_brand,
      device_model,
      location_lat,
      location_lng,
      version_name,
      device_family,
      start_version,
      device_carrier,
      processed_time,
      user_properties,
      event_properties,
      group_properties,
      client_event_time,
      client_upload_time,
      server_upload_time,
      user_creation_time,
      device_manufacturer,
      amplitude_event_type,
      is_attribution_event,
      server_received_time,
      amplitude_attribution_ids
    from src_amplitude__events where user_id is not null
  )

select * from final