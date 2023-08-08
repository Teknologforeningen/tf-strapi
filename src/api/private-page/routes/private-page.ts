/**
 * private-page router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::private-page.private-page", {
  config: {
    find: {
      middlewares: ["plugin::keycloak.keycloak"],
    },
  },
});
