--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3 (Debian 13.3-1.pgdg100+1)
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
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: key_result; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.key_result (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: key_result_progress_record; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.key_result_progress_record (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    progress numeric NOT NULL,
    date timestamp without time zone NOT NULL,
    key_result_id uuid NOT NULL
);


--
-- Name: migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);


--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Data for Name: key_result; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.key_result VALUES ('71425c53-39f2-41c8-b896-cd8907d7ed12', '2021-08-16 19:19:18.79546', '2021-08-16 19:19:18.79546');
INSERT INTO public.key_result VALUES ('1324d1e1-67fc-410c-b221-37fb42f969ed', '2021-08-16 19:19:19.175904', '2021-08-16 19:19:19.175904');
INSERT INTO public.key_result VALUES ('bbacf2fc-f202-49b2-b31d-0df79c59084d', '2021-08-16 19:19:19.475536', '2021-08-16 19:19:19.475536');


--
-- Data for Name: key_result_progress_record; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.key_result_progress_record VALUES ('20b0e20c-d0ea-45f1-a778-68011bc434d9', '2021-08-16 19:19:30.383998', '2021-08-16 19:19:30.383998', 20, '2021-08-16 19:19:30.383998', '71425c53-39f2-41c8-b896-cd8907d7ed12');
INSERT INTO public.key_result_progress_record VALUES ('bc1dd255-62ef-47ee-bd23-3d80259afc82', '2021-08-16 19:19:32.685749', '2021-08-16 19:19:32.685749', 50, '2021-08-16 19:19:32.685749', '71425c53-39f2-41c8-b896-cd8907d7ed12');
INSERT INTO public.key_result_progress_record VALUES ('9ed5faeb-7ff6-4dea-ac2f-36b8bdc7723b', '2021-08-16 19:19:33.395245', '2021-08-16 19:19:33.395245', 0, '2021-08-16 19:19:33.395245', '71425c53-39f2-41c8-b896-cd8907d7ed12');
INSERT INTO public.key_result_progress_record VALUES ('83bd48e6-0563-4db3-ad22-941cd4e7619c', '2021-08-16 19:19:40.896487', '2021-08-16 19:19:40.896487', 20, '2021-08-16 19:19:40.896487', '1324d1e1-67fc-410c-b221-37fb42f969ed');


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.migrations VALUES (1, 1628897077262, 'AddsKeyResultAndKeyResultRecord1628897077262');


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.migrations_id_seq', 1, true);


--
-- Name: key_result_progress_record PK_88d295f1f55f76698e40dd55207; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.key_result_progress_record
    ADD CONSTRAINT "PK_88d295f1f55f76698e40dd55207" PRIMARY KEY (id);


--
-- Name: migrations PK_8c82d7f526340ab734260ea46be; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);


--
-- Name: key_result PK_9064c5abe9ba68432934564d43f; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.key_result
    ADD CONSTRAINT "PK_9064c5abe9ba68432934564d43f" PRIMARY KEY (id);


--
-- Name: key_result_progress_record FK_7b48f2f3dace67250101d17c283; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.key_result_progress_record
    ADD CONSTRAINT "FK_7b48f2f3dace67250101d17c283" FOREIGN KEY (key_result_id) REFERENCES public.key_result(id);


--
-- PostgreSQL database dump complete
--

