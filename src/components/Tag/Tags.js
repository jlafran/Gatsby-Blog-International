import React, { useState } from 'react';
import Img from 'gatsby-image';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Grid, Cell } from 'styled-css-grid';
import kebabCase from 'lodash/kebabCase';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import './styles.css'

const Wrapper = styled.section`
  padding: ${(props) => props.theme.page.padding};
  background-color: ${(props) => props.theme.colors.light};
  border-radius:${(props) => props.theme.borderRadius};
`;



const Tags = (props) => {
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
      <Wrapper className='wrapper-tag'>
      <FormattedMessage id="tags" >
      {(txt) => (
        <header>
          <Helmet title={txt} meta={[{ name: 'description', content: txt }]} />
          <h4>
            <span>{txt}</span>
          </h4>
        </header>
      )}
    </FormattedMessage>
        <nav >
        <ul>
          {allTags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link
                className='text-tag'
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
              >
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      </Wrapper>
      );
    };
    
export default Tags;

