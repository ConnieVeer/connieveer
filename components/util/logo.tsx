import * as React from "react";
import { GlobalHeaderLogo } from "../../tina/__generated__/types";

export const Logo = ({data}: {data: GlobalHeaderLogo}
  ) => {
  return (
    <img  src={data.image?.src} style={{'width':'100px'}} />
  )
};

export const logoSchema = {
  type: "object",
  label: "Logo",
  name: "logo",
  fields: [
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
  ],
};
