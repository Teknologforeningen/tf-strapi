/**
 * navbar controller
 */

import { factories } from "@strapi/strapi";
import sanitizePrivatePages from "../../../utils/sanitizePrivatePages";

export default factories.createCoreController("api::navbar.navbar", {
  async find(ctx) {
    const res = await super.find(ctx);
    sanitizePrivatePages(res?.data?.attributes?.private_pages?.data);
    return res;
  },
});
