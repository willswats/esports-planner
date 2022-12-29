# Node Esports <!-- omit in toc -->

An application for planning Esports, built with Node.js, Express, and MySQL.

## Table of Contents <!-- omit in toc -->

- [General Information](#general-information)
- [Setup](#setup)
  - [MySQL Server](#mysql-server)
    - [Docker](#docker)
- [Acknowledgements](#acknowledgements)

## General Information

I built this project for an assignment, furthermore, it has improved my knowledge of; Node.js, Express, and MySQL.

## Setup

1. Setup a local MySQL server and database with the SQL in [node-esports.sql](./node-esports.sql).
2. Add your configuration information into `config.js`.
3. Run `npm install`.
4. Run `npm start`.

### MySQL Server

#### Docker

Create and run a MySQL server container:

```bash
docker run -p 3306:3306 --name node-esports -e MYSQL_ROOT_PASSWORD=password -d mysql:8.0.31
```

`exec` into the container:

```bash
docker container exec -it node-esports bash
```

Run `mysql` in the container:

```bash
mysql -u root -p
```

Create the database by running the SQL in [node-esports.sql](./node-esports.sql).

To execute SQL queries on the node-esports database, you must `USE` it:

```bash
USE node-esports
```

## Acknowledgements

The SVG icons are from [feather](https://github.com/feathericons/feather).
