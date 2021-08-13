--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5
-- Dumped by pg_dump version 13.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: dm_okr; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA dm_okr;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: dim__amplitude_event; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.dim__amplitude_event (
    id uuid,
    user_id uuid,
    event_time timestamp without time zone,
    event_type character varying(32),
    event_properties json
);


--
-- Name: dim__company; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.dim__company (
    id uuid,
    team_id uuid,
    name character varying(256),
    type text
);


--
-- Name: dim__cycle; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.dim__cycle (
    id uuid,
    active boolean,
    period character varying(32),
    cadence character varying(32),
    team_id uuid,
    date_start timestamp without time zone,
    date_end timestamp without time zone,
    parent_id uuid,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    company_id uuid
);


--
-- Name: dim__key_result; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.dim__key_result (
    id uuid,
    goal double precision,
    type character varying(32),
    title text,
    format character varying(32),
    team_id uuid,
    owner_id uuid,
    description text,
    objective_id uuid,
    initial_value double precision,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    cycle_id uuid,
    company_id uuid
);


--
-- Name: dim__key_result_check_in; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.dim__key_result_check_in (
    id uuid,
    value double precision,
    comment text,
    user_id uuid,
    parent_id uuid,
    confidence smallint,
    key_result_id uuid,
    created_at timestamp without time zone,
    objective_id uuid,
    cycle_id uuid,
    team_id uuid,
    company_id uuid
);


--
-- Name: dim__key_result_comment; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.dim__key_result_comment (
    id uuid,
    text text,
    user_id uuid,
    key_result_id uuid,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    objective_id uuid,
    cycle_id uuid,
    team_id uuid,
    company_id uuid
);


--
-- Name: dim__objective; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.dim__objective (
    id uuid,
    title text,
    team_id uuid,
    cycle_id uuid,
    owner_id uuid,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    company_id uuid
);


--
-- Name: dim__team; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.dim__team (
    id uuid,
    name character varying(256),
    gender character varying(32),
    owner_id uuid,
    parent_id uuid,
    description text,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    company_id uuid
);


--
-- Name: dim__user; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.dim__user (
    id uuid,
    role character varying,
    about text,
    email character varying(256),
    gender character varying(32),
    picture text,
    nickname character varying(256),
    authz_sub character(30),
    first_name character varying(256),
    last_name character varying(256),
    linked_in_profile_address text,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    type text
);


--
-- Name: fct__company_active_progress; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__company_active_progress (
    company_id uuid,
    progress double precision,
    date timestamp without time zone
);


--
-- Name: fct__company_cadence_progress; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__company_cadence_progress (
    company_id uuid,
    cycle_id uuid,
    cadence character varying(32),
    progress double precision,
    date timestamp without time zone
);


--
-- Name: fct__company_cycle_progress; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__company_cycle_progress (
    company_id uuid,
    cycle_id uuid,
    progress double precision,
    date timestamp without time zone
);


--
-- Name: fct__company_historic_progress; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__company_historic_progress (
    company_id uuid,
    progress double precision,
    date timestamp without time zone
);


--
-- Name: fct__company_members; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__company_members (
    company_id uuid,
    user_id uuid
);


--
-- Name: fct__cycle_progress; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__cycle_progress (
    cycle_id uuid,
    progress double precision,
    date timestamp without time zone
);


--
-- Name: fct__key_result_amount_of_check_ins; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__key_result_amount_of_check_ins (
    key_result_id uuid,
    amount_of_check_ins bigint
);


--
-- Name: fct__key_result_daily_average_progress; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__key_result_daily_average_progress (
    key_result_id uuid,
    key_result_check_in_id uuid,
    day timestamp without time zone,
    progress double precision
);


--
-- Name: fct__key_result_is_outdated; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__key_result_is_outdated (
    key_result_id uuid,
    key_result_check_in_id uuid,
    is_outdated boolean,
    date timestamp without time zone
);


--
-- Name: fct__key_result_latest_check_in; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__key_result_latest_check_in (
    key_result_id uuid,
    key_result_check_in_id uuid
);


--
-- Name: fct__key_result_progress; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__key_result_progress (
    key_result_id uuid,
    progress double precision,
    date timestamp without time zone
);


--
-- Name: fct__key_result_progress_evolution; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__key_result_progress_evolution (
    key_result_id uuid,
    key_result_check_in_id uuid,
    progress double precision,
    date timestamp without time zone
);


--
-- Name: fct__team_active_progress; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__team_active_progress (
    team_id uuid,
    progress double precision,
    date timestamp without time zone
);


--
-- Name: fct__team_cadence_progress; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__team_cadence_progress (
    team_id uuid,
    cycle_id uuid,
    cadence character varying(32),
    progress double precision,
    date timestamp without time zone
);


--
-- Name: fct__team_cycle_progress; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__team_cycle_progress (
    team_id uuid,
    cycle_id uuid,
    progress double precision,
    date timestamp without time zone
);


--
-- Name: fct__team_historic_progress; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__team_historic_progress (
    team_id uuid,
    progress double precision,
    date timestamp without time zone
);


--
-- Name: fct__team_members; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__team_members (
    team_id uuid,
    user_id uuid
);


--
-- Name: fct__user_access_activation_delta; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_access_activation_delta (
    user_id uuid,
    delta smallint
);


--
-- Name: fct__user_accesses; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_accesses (
    user_id uuid,
    amplitude_event_id uuid,
    access_time timestamp without time zone
);


--
-- Name: fct__user_activation; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_activation (
    user_id uuid,
    first_access_amplitude_event_id uuid,
    first_key_result_check_in_id uuid,
    first_key_result_comment_id uuid
);


--
-- Name: fct__user_active_key_results; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_active_key_results (
    user_id uuid,
    key_result_id uuid
);


--
-- Name: fct__user_active_progress; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_active_progress (
    user_id uuid,
    progress double precision,
    date timestamp without time zone
);


--
-- Name: fct__user_cadence_progress; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_cadence_progress (
    user_id uuid,
    cycle_id uuid,
    cadence character varying(32),
    progress double precision,
    date timestamp without time zone
);


--
-- Name: fct__user_checkin_activation_delta; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_checkin_activation_delta (
    user_id uuid,
    delta smallint
);


--
-- Name: fct__user_comment_activation_delta; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_comment_activation_delta (
    user_id uuid,
    delta smallint
);


--
-- Name: fct__user_created_key_result_check_ins; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_created_key_result_check_ins (
    user_id uuid,
    key_result_check_in_id uuid,
    created_at timestamp without time zone
);


--
-- Name: fct__user_created_key_result_comments; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_created_key_result_comments (
    user_id uuid,
    key_result_comment_id uuid,
    created_at timestamp without time zone
);


--
-- Name: fct__user_cycle_progress; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_cycle_progress (
    user_id uuid,
    cycle_id uuid,
    progress double precision,
    date timestamp without time zone
);


--
-- Name: fct__user_daily_access_average; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_daily_access_average (
    user_id uuid,
    average_access_per_day double precision
);


--
-- Name: fct__user_first_access; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_first_access (
    user_id uuid,
    amplitude_event_id uuid
);


--
-- Name: fct__user_first_key_result_check_in; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_first_key_result_check_in (
    user_id uuid,
    key_result_check_in_id uuid
);


--
-- Name: fct__user_first_key_result_comment; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_first_key_result_comment (
    user_id uuid,
    key_result_comment_id uuid
);


--
-- Name: fct__user_historic_progress; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_historic_progress (
    user_id uuid,
    progress double precision,
    date timestamp without time zone
);


--
-- Name: fct__user_last_access; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_last_access (
    user_id uuid,
    amplitude_event_id uuid
);


--
-- Name: fct__user_owned_key_results; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_owned_key_results (
    user_id uuid,
    owned_key_results bigint
);


--
-- Name: fct__user_owns_key_result; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_owns_key_result (
    user_id uuid,
    owns_a_key_result boolean
);


--
-- Name: fct__user_primary_company; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_primary_company (
    company_id uuid,
    user_id uuid
);


--
-- Name: fct__user_primary_team; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_primary_team (
    team_id uuid,
    user_id uuid
);


--
-- Name: fct__user_received_key_result_comments; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.fct__user_received_key_result_comments (
    user_id uuid,
    author_id uuid,
    key_result_comment_id uuid,
    created_at timestamp without time zone
);


--
-- Name: stg_amplitude__events; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.stg_amplitude__events (
    app bigint,
    dma character varying(128),
    adid character varying(128),
    city character varying(256),
    data json,
    idfa character varying(128),
    uuid uuid,
    groups json,
    paying boolean,
    region character varying(256),
    country character varying(256),
    library character varying(128),
    os_name character varying(32),
    user_id uuid,
    event_id bigint,
    language character varying(32),
    platform character varying(32),
    device_id character varying(256),
    event_time timestamp without time zone,
    event_type character varying(32),
    ip_address character varying(32),
    os_version character varying(32),
    session_id bigint,
    device_type character varying(32),
    sample_rate json,
    amplitude_id bigint,
    device_brand character varying(32),
    device_model character varying(32),
    location_lat real,
    location_lng real,
    version_name character varying(32),
    device_family character varying(32),
    start_version character varying(32),
    device_carrier character varying(32),
    processed_time timestamp without time zone,
    user_properties json,
    event_properties json,
    group_properties json,
    client_event_time timestamp without time zone,
    client_upload_time timestamp without time zone,
    server_upload_time timestamp without time zone,
    user_creation_time timestamp without time zone,
    device_manufacturer character varying(32),
    amplitude_event_type character varying(32),
    is_attribution_event boolean,
    server_received_time timestamp without time zone,
    amplitude_attribution_ids character varying(32)
);


--
-- Name: stg_okr__cycle; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.stg_okr__cycle (
    id uuid,
    active boolean,
    period character varying(32),
    cadence character varying(32),
    team_id uuid,
    date_start timestamp without time zone,
    date_end timestamp without time zone,
    parent_id uuid,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


--
-- Name: stg_okr__key_result; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.stg_okr__key_result (
    id uuid,
    goal double precision,
    type character varying(32),
    title text,
    format character varying(32),
    team_id uuid,
    owner_id uuid,
    description text,
    objective_id uuid,
    initial_value double precision,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


--
-- Name: stg_okr__key_result_check_in; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.stg_okr__key_result_check_in (
    id uuid,
    value double precision,
    comment text,
    user_id uuid,
    parent_id uuid,
    confidence smallint,
    key_result_id uuid,
    created_at timestamp without time zone
);


--
-- Name: stg_okr__key_result_comment; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.stg_okr__key_result_comment (
    id uuid,
    text text,
    user_id uuid,
    key_result_id uuid,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


--
-- Name: stg_okr__objective; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.stg_okr__objective (
    id uuid,
    title text,
    team_id uuid,
    cycle_id uuid,
    owner_id uuid,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


--
-- Name: stg_okr__team; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.stg_okr__team (
    id uuid,
    name character varying(256),
    gender character varying(32),
    owner_id uuid,
    parent_id uuid,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    description text
);


--
-- Name: stg_okr__team_users_user; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.stg_okr__team_users_user (
    team_id uuid,
    user_id uuid
);


--
-- Name: stg_okr__user; Type: TABLE; Schema: dm_okr; Owner: -
--

CREATE TABLE dm_okr.stg_okr__user (
    id uuid,
    role character varying,
    about text,
    email character varying(256),
    gender character varying(32),
    picture text,
    nickname character varying(256),
    authz_sub character(30),
    first_name character varying(256),
    last_name character varying(256),
    linked_in_profile_address text,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


--
-- PostgreSQL database dump complete
--

