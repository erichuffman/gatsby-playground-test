import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticlePreview from "../components/articlePreview";
const Articles = ({ data }) => {
  const articles = data.allNodeArticle.nodes;
  return (
    <Layout>
      <SEO title="Articles" />
      <h1>Articles</h1>
      {articles.map(article => (
        <ArticlePreview
          key={article.id}
          title={article.title}
          path={article.path.alias}
          image={article.relationships.field_media_image.relationships.field_media_image.localFile.childImageSharp.fluid}
          alt={article.relationships.field_media_image.field_media_image.alt}
          summary={article.body.processed.substring(0, 300)}
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
    allNodeArticle(sort: {fields: created, order: ASC}) {
      nodes {
        title
        id
        body {
          processed
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
        created
        path {
          alias
        }
      }
    }
  }
`;
export default Articles;