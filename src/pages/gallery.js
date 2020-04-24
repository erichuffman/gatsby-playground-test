import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticlePreview from "../components/articlePreview";
const Articles = ({ data }) => {
  const articles = data.allNodeGalleryItem.nodes;
  return (
    <Layout>
      <SEO title="Gallery" />
      <h1>Gallery</h1>
      {articles.map(article => (
        <ArticlePreview
          key={article.id}
          title={article.title}
          path={article.path.alias}
          image={article.relationships.field_media_image.relationships.field_media_image.localFile.childImageSharp.fluid}
          // alt={article.relationships.field_media_image.relationships.field_media_image.relationships.media__image.field_media_image.alt}
          summary={article.body.summary}
        />
      ))}
    </Layout>
  );
}
Articles.propTypes = {
  data: PropTypes.object.isRequired,
};
export const data = graphql`
  { 
    allNodeGalleryItem {
      nodes {
        title
        id
        path {
          alias
        }
        created
        body {
          summary
        }
        relationships {
          field_media_image {
            relationships {
              field_media_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      originalImg
                        ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            field_media_image {
              alt
            }
          }
        }
      }
    }
  }
`;
export default Articles;