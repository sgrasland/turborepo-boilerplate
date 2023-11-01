# Turborepo boilerplate

Boilerplate with NestJS, NextJS, React Native and PostgreSQL database.

## Cloning the repository

```sh
git clone https://github.com/sgrasland/turborepo-boilerplate.git my_new_project
cd my_new_project
git remote set-url origin https://github.com/sgrasland/my_new_project.git
git push origin master
```

## Initialization
Run `yarn` first to install dependencies.
Rename the `.env.example` file to `.env`

## Starting Postgres
Prerequisity : You need to have `docker` and `docker-compose` installed on your system.

```sh
docker network create nest
```
```sh
docker-compose up -d
```
