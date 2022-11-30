# Node Esports <!-- omit in toc -->

An application for planning Esports, built with Node, Express, and MySQL.

## Table of Contents <!-- omit in toc -->

- [Setup](#setup)
  - [MySQL Server - Docker or Podman](#mysql-server---docker-or-podman)

## Setup

1. Setup a local MySQL server.
2. Add your configuration information into `config.js`.
3. Run `npm install`.
4. Run `npm start`.

### MySQL Server - Docker or Podman

If you are using Podman run:

```bash
alias docker="podman"
```

To create and run a MySQL server:

```bash
docker run -p 3306:3306 --name node-esports -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=node-esports -d mysql:latest
```

To `exec` into the container and run `mysql`:

```bash
docker container exec -it node-esports bash
mysql -u root -p
```
