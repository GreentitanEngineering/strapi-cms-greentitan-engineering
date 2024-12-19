import type { StrapiApp } from "@strapi/strapi/admin";
import "./global.css";

export default {
  config: {
    locales: ["th"],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
