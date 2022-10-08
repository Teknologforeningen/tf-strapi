import updateTaffaSidebar from "./functions/taffa";

import { Strapi } from "@strapi/strapi";

export default {
  updateTaffaMenu: {
    task: async ({ strapi }: { strapi: Strapi }) => {
      await updateTaffaSidebar(strapi);
    },
    options: {
      rule: "0 9 * * *",
      tz: "Europe/Helsinki",
    },
  },
};
