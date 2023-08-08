/**
 * private-folder router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter(
  "api::private-folder.private-folder",
  {
    config: {
      find: {
        middlewares: ["plugin::keycloak.keycloak"],
      },
    },
  }
);
