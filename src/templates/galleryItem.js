import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const GalleryItem = ({ data }) => {
  const post = data.nodeGalleryItem;

  return (
    <Layout>
      <h1>{post.title}</h1>
      <img src={post.relationships.field_media_image.relationships.field_media_image.localFile.publicURL}
        alt={post.relationships.field_media_image.field_media_image.alt}
      />
      <div dangerouslySetInnerHTML={{ __html: post.body.processed }} />
    </Layout>
  );
};

GalleryItem.protoTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($galleryItemId: String!) {
    nodeGalleryItem(id: {eq: $galleryItemId}) {
      id
      title
      body {
        processed
      }
      relationships {
        field_media_image {
          relationships {
            field_media_image {
              localFile {
                publicURL
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
`;

export default GalleryItem;