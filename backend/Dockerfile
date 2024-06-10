ARG NODE_IMAGE=node:20.11.1-alpine

# Using the variable to create our base image
FROM $NODE_IMAGE AS base

# Setting the working directory
WORKDIR /backend

################## Second Stage - Installing dependencies ##########

# In this stage, we will start installing dependencies
FROM base AS dependencies

# We copy all package.* files to the working directory
COPY ./pnpm-lock.yaml ./
COPY ./package.json ./

RUN corepack enable
RUN corepack prepare pnpm@8.10.0 --activate

# We run NPM CI to install the exact versions of dependencies
RUN pnpm i

# Lastly, we copy all the files with active user
COPY . .

################## Third Stage - Building Stage #####################

# In this stage, we will start building dependencies
FROM dependencies AS build

ENV NEXT_PUBLIC_API_URL https://pokerplanning.group7.infracloud-ynov.com/api

# We run "node ace build" to build the app for production
RUN pnpm run build


################## Final Stage - Production #########################
FROM base AS production

COPY ./pnpm-lock.yaml ./
COPY ./package.json ./

RUN corepack enable
RUN corepack prepare pnpm@8.10.0 --activate

# We run NPM CI to install the exact versions of dependencies
RUN pnpm i --production

# Copy files to the working directory from the build folder the user
COPY --from=build /backend/build .
COPY --from=build /backend/entrypoint.sh .

# Expose port
EXPOSE $PORT

CMD ["./entrypoint.sh"]
