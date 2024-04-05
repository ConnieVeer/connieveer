import * as React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksBanner } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { ColorPickerInput } from "../../tina/fields/color";

export const Banner = ({ data }: { data: PageBlocksBanner }) => {
  const theme = useTheme();
  const headlineColorClasses = {
    blue: "from-blue-400 to-blue-600",
    teal: "from-teal-400 to-teal-600",
    green: "from-green-400 to-green-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-400 to-pink-600",
    purple: "from-purple-400 to-purple-600",
    orange: "from-orange-300 to-orange-600",
    yellow: "from-yellow-400 to-yellow-600",
  };

  //   <section id="banner-0" data-text-color="#FFFFFF" class="flex-shrink-0 flex relative z-10 items-center"
  //   style="background-image:url(https://images.unsplash.com/photo-1585938389612-a552a28d6914?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHw0M3x8bmVpZ2hib3VyaG9vZCUyMHBhcmslMjBzb2xhciUyMHBhbmVsc3xlbnwwfHx8fDE2ODgwNDIwNjB8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080);background-position:center center;background-size:cover;min-height:240px">
  //   <div class="w-full h-full absolute top-0 left-0 z-0" style="background-color:rgba(0, 0, 0, 0.2)"></div>
  //   <div class="relative container mx-auto px-6 z-10 pt-12 lg:pt-32 xl:pt-40 pb-12 lg:pb-32 xl:pb-40">
  //       <div class="max-w-3xl text-left ml-0 mr-auto">
  //           <h2 class="heading-xlarge mb-6 break-word text-left"
  //               style="color:#FFFFFF; sans-serif;font-weight:500">Duurzaam
  //               doen we samen</h2>
  //           <p class="body-large" style="color:#FFFFFF; font-weight:400">Samen
  //               verduurzamen! Hasseler Es bloeit op met bewoners, bedrijven en organisaties. We verminderen
  //               onze afhankelijkheid van fossiele brandstoffen en zorgen voor voordelen die iedereen ten
  //               goede komen. Doe mee!</p>
  //       </div>
  //   </div>
  // </section>

  return (
    <Section color={data.color} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1585938389612-a552a28d6914?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHw0M3x8bmVpZ2hib3VyaG9vZCUyMHBhcmslMjBzb2xhciUyMHBhbmVsc3xlbnwwfHx8fDE2ODgwNDIwNjB8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080);background-position:center center;background-size:cover;min-height:240px` }}
    >
      <Container
        size="large"
        className="grid grid-cols-1 md:grid-cols-5 gap-14 items-center justify-center bg-green"
      >
        <div className="row-start-2 md:row-start-1 md:col-span-3 text-center md:text-left">
          {data.headline && (
            <h3
              data-tina-field={tinaField(data, "headline")}
              className={`w-full relative	mb-10 text-5xl font-extrabold tracking-normal leading-tight title-font`}
            >
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r  ${data.color === "primary"
                  ? `from-white to-gray-100`
                  : headlineColorClasses[theme.color]
                  }`}
              >
                {data.headline}
              </span>
            </h3>
          )}
          {data.text && (
            <div
              data-tina-field={tinaField(data, "text")}
              className="prose-lg mx-auto md:mx-0 mb-10 text-white"
            >
              <TinaMarkdown content={data.text} />
            </div>
          )}
        </div>
        {/* {data.image && (
          <div
            data-tina-field={tinaField(data.image, "src")}
            className="relative row-start-1 md:col-span-2 flex justify-center"
          >
            <img
              className="absolute w-full rounded-lg max-w-xs md:max-w-none h-auto blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
              src={data.image.src}
              aria-hidden="true"
            />
            <img
              className="relative z-10 w-full max-w-xs rounded-lg md:max-w-none h-auto"
              alt={data.image.alt}
              src={data.image.src}
            />
          </div>
        )} */}
      </Container>
    </Section>
  );
};

export const bannerBlockSchema: Template = {
  name: "banner",
  label: "Banner",

  fields: [

    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      label: "Text",
      name: "text",
      type: "rich-text",
    },
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

    {
      type: "string",
      label: "color",
      name: "color",
      ui: {
        component: 'color',
      },
    }

  ],
};
