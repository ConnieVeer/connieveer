import { Section } from "../util/section";
import { Container } from "../util/container";
import { Icon } from "../util/icon";
import { iconSchema } from "../util/icon";
import {
  PageBlocksFeatures,
  PageBlocksFeaturesItems,
} from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export const Feature = ({
  featuresColor,
  data,
}: {
  featuresColor: string;
  data: PageBlocksFeaturesItems;
}) => {
  return (
    <div
      data-tina-field={tinaField(data)}
      className="flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto"
      style={{ flexBasis: "16rem" }}
    >
      {data.icon && (
        <Icon
          tinaField={tinaField(data, "icon")}
          parentColor={featuresColor}
          data={{ size: "large", ...data.icon }}
        />
      )}
      {data.post && data.post.heroImg && (
        <img
          data-tina-field={tinaField(data, "post")}
          src={data.post.heroImg}
        />
      )}
      {data.title && (
        <h3
          data-tina-field={tinaField(data, "title")}
          className="text-2xl font-semibold title-font"
        >
          {data.title}
        </h3>
      )}
      {data.post && (
        <h3
          data-tina-field={tinaField(data, "post")}
          className="text-2xl font-semibold title-font"
        >
          {data.post.title}
        </h3>
      )}
      {data.text ? (<p
        data-tina-field={tinaField(data, "post")}
        className="text-base opacity-80 leading-relaxed"
      >
        {data.text}
      </p>
      ) :
        (data.post && data.post.excerpt &&
          <div
            data-tina-field={tinaField(data, "post")}
            className="text-base opacity-80 leading-relaxed"
          >
            <TinaMarkdown content={data.post.excerpt} />
          </div>
        )
      }
      {data.post && <Link
        key={data.post._sys.filename}
        href={`/posts/` + data.post._sys.filename}
        className=""
      >
        <span className="inline-block  transition-all duration-300 ease-out">
          <BsArrowRight className="inline-block h-8 -mt-1 ml-1 w-auto opacity-70" />
        </span>
      </Link>}
    </div>
  );
};

export const Features = ({ data }: { data: PageBlocksFeatures }) => {
  return (
    <Section color={data.color}>
      <Container
        className={`flex flex-wrap gap-x-10 gap-y-8 text-left`}
        size="large"
      >
        {data.items &&
          data.items.map(function (block, i) {
            return <Feature featuresColor={data.color} key={i} data={block} />;
          })}
      </Container>
    </Section>
  );
};

const defaultFeature = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  icon: {
    color: "",
    style: "float",
    name: "",
  },
};

export const featureBlockSchema = {
  name: "features",
  label: "Features",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      items: [defaultFeature, defaultFeature, defaultFeature],
    },
  },
  fields: [
    {
      type: "object",
      label: "Feature Items",
      name: "items",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.title,
          };
        },
        defaultItem: {
          ...defaultFeature,
        },
      },
      fields: [
        iconSchema,
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Text",
          name: "text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "reference",
          label: "Post",
          name: "post",
          collections: ["post"],
        },
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};
