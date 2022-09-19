import React from 'react';
import TagsPage from '../../components/Tags';
import { graphql } from 'gatsby';

export default (props) => <TagsPage {...props} />;

export const pageQuery = graphql`
  query TagsEsQuery {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { draft: { ne: true } }, fields: { langKey: { eq: "es" } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
