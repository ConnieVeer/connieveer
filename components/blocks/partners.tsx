import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { PageBlocksPartners, PageBlocksPartnersItems } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import Link from "next/link";

export const Partners = ({ data }: { data: PageBlocksPartners }) => {
  return (
    <Section color="green">
      <Container size="medium" className="text-center">
        <h3
          className={`relative z-10 max-w-3xl mx-auto text-4xl lg:text-5xl font-bold tracking-normal text-center title-font`}
        >
          <span
            className="relative z-10 max-w-3xl mx-auto text-4xl lg:text-5xl font-bold tracking-normal text-center title-font text-white"
          >
            Parters en samenwerking
              </span>
        </h3>
        <span className="text-center">Natuurlijk doen wij dit niet alleen we werken veel samen met:</span>

        <div className={`flex flex-wrap justify-center gap-x-10 gap-y-8 text-left py-6`}>
          {data.items.map(function (block, i) {
            return <Partner key={i} data={block} />;
          })
          }

        </div>
        {/* <blockquote>
          <div
            className={`relative z-10 max-w-3xl mx-auto text-4xl lg:text-5xl font-bold tracking-normal text-center title-font ${data.color === "primary"
              ? `text-white`
              : `text-gray-700 dark:text-gray-50`
              }`}
          >
            <span
              className={`block opacity-15 text-8xl absolute inset-y-1/2 transform translate-y-2	-left-4 leading-4 -z-1`}
            >
              &ldquo;
            </span>
            <p
              data-tina-field={tinaField(data, `quote`)}
              className="relative opacity-95"
            >
              {"hdkajhdkjsahdkajdshkads"}
            </p>
            <span
              className={`block opacity-15 text-8xl absolute inset-y-1/2 transform translate-y-3	-right-4 leading-4 -z-1`}
            >
              &rdquo;
            </span>
          </div>
          <div className={`my-8 flex-grow-0`}> */}
            {/* <span
              className={`block mx-auto h-0.5 w-1/6 ${data.color === "primary"
                ? `bg-blue-600`
                : `bg-gray-200 dark:bg-gray-700`
                }`}
            ></span>
          </div>
          <footer className="text-center">
            <p
              data-tina-field={tinaField(data, `author`)}
              className={`tracking-wide title-font font-bold text-lg ${data.color === "primary"
                ? `text-blue-200`
                : `text-blue-500 dark:text-blue-300`
                }`}
            >
              {data.author}
            </p>
          </footer> */}
        {/* </blockquote> */}
      </Container>
    </Section>
  );
};

const Partner = ({ data }: { data: PageBlocksPartnersItems }) => {
  return (
    <Link  href={`${data.link || ""}` }>
      <img
        data-tina-field={tinaField(data, "image")}
        src={data.image.src}
      />
    
    </Link>
  )
}


export const partnersBlockSchema: TinaTemplate = {
  name: "partners",
  label: "Partners",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    // defaultItem: {
    //   quote:
    //     "There are only two hard things in Computer Science: cache invalidation and naming things.",
    //   author: "Phil Karlton",
    //   color: "primary",
    // },
  },
  fields: [
    {
      type: "object",
      label: "Parters",
      name: "items",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.naam,
          };
        }
      },
      fields: [
        {
          type: "string",
          label: "Naam",
          name: "naam",
        },
        {
          type: "string",
          label: "Link",
          name: "link",
        },
        {
          type: "object",
          label: "Logo Image",
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
          // {

          //   type: "string",
          //   ui: {
          //     component: "textarea",
          //   },
          //   label: "Quote",
          //   name: "quote",
          // },
          // {
          //   type: "string",
          //   label: "Author",
          //   name: "author",
          // },
          // {
          //   type: "string",
          //   label: "Color",
          //   name: "color",
          //   options: [
          //     { label: "Default", value: "default" },
          //     { label: "Tint", value: "tint" },
          //     { label: "Primary", value: "primary" },
          // ],
        },
      ],
    },
  ]
};
