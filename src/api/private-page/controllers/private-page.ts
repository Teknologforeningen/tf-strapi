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
      const entity = await strapi.db
        .query("api::private-page.private-page")
        .findOne({
          where: { slug },
        });
      return this.transformResponse(entity);
    },
  }
);
