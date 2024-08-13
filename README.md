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

### Configuring keycloak

To allow for single-sign on with other systems, TF identifies end-users with keycloak.

1. Create a keycloak client (or look up the existing strapi client) at keycloak admin console -> Realms -> tf-medlemmar -> clients -> Create client
2. Give the client an ID and configure relevant URL:s as follows:
   1. Root URL: the root of your strapi instance, e.g. https://cms.tf.fi
   2. Home URL: the root of your frontend client, e.g. https://tf.fi
   3. Valid redirect URIs & Valid post logout redirect URIs: frontend keycloak callback path, e.g. https://tf.fi/api/auth/callback/keycloak
   4. Web origins: allowed CORS origins, should have both the frontend and strapi origin, e.g. https://tf.fi & https://cms.tf.fi
3. Set Capability config settings:
   1. Client authentication: On
   2. Authorization: Off
   3. Authentication flow: Enable standard flow, disable all other flows.
4. Configure credentials:
   1. Client Authenticator: Client Id and Secret
   2. Generate Client secret
5. Set the recently defined keycloak variables in strapi under Settings -> Providers -> keycloak as follows:
   1. Enable: true
   2. Client ID: client ID from keycloak (step 2.)
   3. Client secret fron keycloak (step 4.2)
   4. Host URI (Subdomain): URI of the keycloak realm, e.g. id.tf.fi/realms/tf-medlemmar
   5. The redirect URL to your front-end app: strapi keycloak callback, e.g. https://cms.tf.fi/api/auth/keycloak/callback

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
