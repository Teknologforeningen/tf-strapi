# tf-strapi

Strapi application used to manage the content of [tf.fi](https://github.com/Teknologforeningen/tf.fi/).

## Running the application

### Prerequisites

- yarn
- docker (OR a running postgres database)

### Start the database

The application requires a running postgres database to function. A database can be started by running

```
docker compose up -d
```

### Start the application

1. Configure .env variables. Configurable variables can be found in [.env.example](.env.example)
2. Install dependencies by running

```
yarn
```

3. Start the application in development mode with

```
yarn develop
```

## Making changes to the production system

1. Clone this repository
2. Start the application
3. Navigate to [localhost:1337/admin](http://localhost:1337/admin)
4. Make the required changes
5. Double check that the code changes are ok
6. Commit & push the changes, a github workflow will build a new image
7. Pull the updated image on the prod system with `docker compose pull`
8. Start the updated image with `docker compose up -d`

## Loading and exporting settings

The current production settings can be found in [config/sync](config/sync) and can be loaded by running

```
yarn cs import
```

After updating the settings, the stored configuration can be updated with

```
yarn cs export
```
