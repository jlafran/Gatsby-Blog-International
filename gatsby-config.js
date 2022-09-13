const siteMetadata = require('./src/data/siteMetadata');

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-figure-caption`,
            options: { figureClassName: 'md-figure' },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 740,
            },
          },
          {
            resolve: `gatsby-remark-image-attributes`,
            options: {
              styleAttributes: true,
              dataAttributes: false,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `content-rti`,
        remote: `https://github.com/jlafran/content-rti.git`,
        branch: `main`,
        local: `'/src/pages/blog/'`,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'RTI',
        short_name: 'RTI',
        icons: [
          {
            src: '/logo.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
        ],
        start_url: '/',
        background_color: 'white',
        theme_color: 'white',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'en',
        langKeyDefault: 'en',
        useLangKeyLayout: true,
        prefixDefault: false,
        markdownRemark: {
          postPage: 'src/templates/blog-post.js',
          query: `
          {
              allMarkdownRemark {
                  edges {
                  node {
                      fields {
                      slug,
                      langKey
                      }
                  }
                  }
              }
          }
          `,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-i18n-tags',
      options: {
        // Default options
        tagPage: 'src/templates/tag-page.js',
        tagsUrl: '/tags/',
        langKeyForNull: 'en',
        langKeyDefault: 'en',
        prefixDefault: false,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Poppins:300,400,500,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    `gatsby-alias-imports`,
    {
      resolve: `gatsby-plugin-segment-analytics`,
      options: {
        writeKey: `GJS0QBPRIXZceVeXVVtqnyrI8fRCfg4U`,
      },
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-sass`,
  ],
};
