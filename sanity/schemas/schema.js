import { orderRankField } from "@sanity/orderable-document-list";

// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: "work",
      title: "Work",
      type: "document",
      fields: [
        orderRankField({ type: "work" }),
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "image",
          title: "Image",
          type: "image",
        },
      ],
    },
    {
      name: "publications",
      title: "Publications",
      type: "document",
      fields: [
        orderRankField({ type: "publications" }),
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "publicationUrl",
          title: "Publication URL",
          type: "url",
        },
      ],
    },
    {
      name: "homePage",
      title: "Home Page",
      type: "document",
      fields: [
        {
          name: "heroImage",
          title: "Hero image",
          type: "image",
        },
        {
          name: "intro",
          title: "Intro description",
          type: "text",
        },
      ],
    },
    {
      name: "aboutPage",
      title: "About Page",
      type: "document",
      fields: [
        {
          name: "heroImage",
          title: "Hero image",
          type: "image",
        },
        {
          name: "about",
          title: "Intro description",
          type: "text",
        },
        {
          name: "profileImage",
          title: "Profile image",
          type: "image",
        },
        {
          name: "email",
          title: "Email address",
          type: "string",
        },
      ],
    },
  ]),
});
