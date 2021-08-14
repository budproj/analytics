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
-- Data for Name: key_result; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.key_result (id, created_at, updated_at) FROM stdin;
7b1c9604-6de6-41aa-8fe5-f91216564ee7	2021-08-13 20:25:15.605965	2021-08-13 20:25:15.605965
86d138f2-6a82-48f5-8745-3209141d89ef	2021-08-13 21:12:05.249506	2021-08-13 21:12:05.249506
\.


--
-- Data for Name: key_result_progress_record; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.key_result_progress_record (id, created_at, updated_at, progress, date, key_result_id) FROM stdin;
0f18fa15-e4e7-467a-8a78-4e1fffa54059	2021-08-13 21:12:14.034153	2021-08-13 21:12:14.034153	0	2021-08-13 21:12:14.034153	86d138f2-6a82-48f5-8745-3209141d89ef
349f9354-afed-4bc7-8f55-9d9b0d3abb2a	2021-08-13 21:11:55.026811	2021-08-13 21:11:55.026811	50.5	2021-08-13 21:11:55.026811	7b1c9604-6de6-41aa-8fe5-f91216564ee7
45fd2ea0-63d3-4175-93d2-5698f6389f1c	2021-08-13 20:25:38.35373	2021-08-13 20:25:38.35373	0	2021-08-13 20:25:38.35373	7b1c9604-6de6-41aa-8fe5-f91216564ee7
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.migrations (id, "timestamp", name) FROM stdin;
1	1628895491720	AddsKeyResultProgressRecord1628895491720
2	1628897077262	AddsKeyResultAndKeyResultRecord1628897077262
\.


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.migrations_id_seq', 2, true);


--
-- PostgreSQL database dump complete
--

