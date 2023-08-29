/**
 * private-page controller
 */

import { factories } from "@strapi/strapi";
import sanitizePrivatePages from "../../../utils/sanitizePrivatePages";

export default factories.createCoreController(
  "api::private-page.private-page",
  {
    async find(ctx) {
      const res = await super.find(ctx);
      sanitizePrivatePages(res?.data);
      return res;
    },
    async findOne(ctx) {
      const { id: slug } = ctx.params;
      const { populate } = ctx.query as any; // :D (Strapi typing is wrong, don't want to fix properly // Bäck)
      const entity = await strapi.db
        .query("api::private-page.private-page")
        .findOne({
          where: { slug },
          populate,
        });
      return this.transformResponse(entity);
    },
  }
);
