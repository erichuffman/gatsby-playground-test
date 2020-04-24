/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const articles = await graphql(`
    {
      allNodeArticle {
        nodes {
          id
          title
          path {
            alias
          }
        }
      }
    }
  `);

  articles.data.allNodeArticle.nodes.map(articleData => 
    createPage({
      path: articleData.path.alias,
      component: path.resolve(`src/templates/article.js`),
      context: {
        ArticleId: articleData.id,
      },
    })
  );

  const gallerItems = await graphql(`
    {
      allNodeGalleryItem {
        nodes {
          title
          id
          path {
            alias
          }
        }
      }
    }
  `);

  gallerItems.data.allNodeGalleryItem.nodes.map(galleryItemData => 
    createPage({
      path: galleryItemData.path.alias,
      component: path.resolve(`src/templates/galleryItem.js`),
      context: {
        galleryItemId: galleryItemData.id,
      },
    })
  );
}