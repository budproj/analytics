# --- Build Image ---
FROM node:16-alpine AS build
ARG GITHUB_TOKEN
USER root
WORKDIR /build

COPY package.json package-lock.json .npmrc ./
RUN npm ci --ignore-scripts

COPY . ./
RUN npm run build


# # --- Dependencies ---
FROM node:16-alpine AS dependencies
ARG GITHUB_TOKEN
USER root
WORKDIR /dependencies

COPY package.json package-lock.json .npmrc ./
RUN npm ci --ignore-scripts --production


# --- Execution ---
FROM node:16-alpine AS execution
USER root
ENV NODE_ENV="production"

COPY package.json .env ./
COPY --from=build /build/dist ./dist
COPY --from=dependencies /dependencies/node_modules ./node_modules

CMD [ "npm", "start" ]