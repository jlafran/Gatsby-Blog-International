import React, { useState } from 'react';
import Img from 'gatsby-image';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Grid, Cell } from 'styled-css-grid';
import kebabCase from 'lodash/kebabCase';

const Tags = () => {
    const data = useStaticQuery(graphql`
    query TagsQuery {
      allMarkdownRemark(
        limit: 2000
        filter: { frontmatter: { draft: { ne: true } }, fields: { langKey: { eq: "en" } } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
    `);
    const allTags = data.allMarkdownRemark.group;

    return (
        <nav>
        <ul>
          {allTags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link
                style={{
                  textDecoration: 'none',
                }}
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
              >
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      );
    };
    
export default Tags;

