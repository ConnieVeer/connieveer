import { defineConfig } from "tinacms";

import Post from "./collection/post";
import Global from "./collection/global";
import Author from "./collection/author";
import Page from "./collection/page";

const config = defineConfig({
  clientId: "3bd03e4f-0edb-43a9-b6a9-17b33e8de106",
  branch: "main",
    // process.env.NEXT_PUBLIC_TINA_BRANCH! || // custom branch env override
    // process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    // process.env.HEAD!, // Netlify branch env
  token: "2824de8cb9c62033b0be96509be8a29aff44a9f8",
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
    collections: [Post, Global, Author, Page],
  },
});

export default config;
