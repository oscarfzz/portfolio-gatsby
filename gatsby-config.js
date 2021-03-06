require("dotenv").config({
  path: `.env`,
})

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WP_GRAPH_URL,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
        html: {
          fallbackImageMaxWidth: 800,
        },
        // fields can be excluded globally.
        // this example is for wp-graphql-gutenberg.
        // since we can get block data on the `block` field
        // we don't need these fields
        excludeFieldNames: [`blocksJSON`, `saveContent`],
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  35
                : // And then we can pull all posts in production
                  null,
          },
          // this shows how to exclude entire types from the schema
          // this example is for wp-graphql-gutenberg
          CoreParagraphBlockAttributesV2: {
            exclude: true,
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: process.env.GITHUB_URL_API,
        headers: {
          Authorization: `bearer ${process.env.GITHUB_GATSBY_PORTFOLIO_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/assets`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    "gatsby-plugin-htaccess",
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        https: true,
        www: false,
        host: "oscarfdz.com", // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `
          ErrorDocument 401 /error_pages/401.html
          ErrorDocument 404 /404.html
          ErrorDocument 500 /error_pages/500.html
        `,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Oscar Fernandez Portfolio`,
        short_name: `GatsbyJS & WP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/oscar-fernandez-full-stack-seo.png`,
      },
    },

    `gatsby-plugin-react-helmet`,
  ],
}
