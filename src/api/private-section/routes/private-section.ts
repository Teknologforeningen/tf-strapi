/**
 * private-section router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter(
  "api::private-section.private-section",
  {
    config: {
      find: {
        middlewares: ["plugin::keycloak.keycloak"],
      },
    },
  }
);
