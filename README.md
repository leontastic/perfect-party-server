# Perfect Party Server

## Prerequisites

### PostgreSQL 11

Install Postgres and create a database called `perfect-party`.

### `.env` file

Create a file named `.env` in the root directory to store environment variables:

```
PGUSER=homersimpson
PGDATABASE=perfect-party
```

See `pg` docs to learn about environment variables it uses to connect to the database: https://node-postgres.com/features/connecting

### Migrations

You must have already created a database, whose name is be specified as `PGDATABASE` in `.env`.

Run `npm run migrate-up` set up your database.

Run `npm run migrate-down` to destroy the database.
