import axios from "axios";

import { Strapi } from "@strapi/strapi";

async function getWeekMenu(locale: string): Promise<string> {
  const res = await axios.get(`http://api.tf.fi/taffa/${locale}/html/week`);
  return res.data;
}

export default async (strapi: Strapi) => {
  strapi.log.info("Updating Taffa menu");
  const dagsenDefaultPage = await strapi.entityService.findMany(
    "api::about-page.about-page",
    {
      filters: {
        slug: "dagsrestaurangen",
      },
      populate: ["localizations"],
    }
  );

  const dagsenPages = [
    dagsenDefaultPage[0],
    dagsenDefaultPage[0].localizations,
  ].flat();
  const updatePromises = dagsenPages.map(async (d) => {
    const weekMenu = await getWeekMenu(d.locale);
    return strapi.entityService.update("api::about-page.about-page", d.id, {
      data: {
        sidebar: weekMenu,
      },
    });
  });

  await Promise.all(updatePromises);
  strapi.log.info(`Updated week menu for ${updatePromises.length} pages`);
};
