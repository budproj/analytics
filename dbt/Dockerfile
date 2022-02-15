FROM fishtownanalytics/dbt:1.0.0

WORKDIR /usr/app

ARG DB_HOST
ARG DB_USER
ARG DB_PASSWORD
ARG DB_DB
ARG DB_SCHEMA

RUN apt-get update && apt-get install -y gettext-base

ENV DB_HOST=$DB_HOST
ENV DB_USER=$DB_USER
ENV DB_PASSWORD=$DB_PASSWORD
ENV DB_DB=$DB_DB
ENV DB_SCHEMA=$DB_SCHEMA

RUN mkdir /root/.dbt
COPY ./profiles/template.yml ./profile_template.yml
RUN envsubst < ./profile_template.yml > /root/.dbt/profiles.yml

COPY ./macros ./macros
COPY ./models ./models
COPY ./dbt_project.yml ./
COPY ./packages.yml ./

ENTRYPOINT dbt deps && dbt seed && dbt run
