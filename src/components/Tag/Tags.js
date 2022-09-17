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
        <ul style={{margin:0, paddingLeft:0,justifyContent: "center", textAlign:"left"}}>
          {allTags.map((tag) => (
            <Link
            style={{color: "#212529", textDecoration:"none"}}
            to={`/tags/${kebabCase(tag.fieldValue)}/`}
          >
            <li key={tag.fieldValue} className='text-tag'>
                {tag.fieldValue} ({tag.totalCount})
            </li>
            </Link>
          ))}
        </ul>
      </nav>
      </Wrapper>
      );
    };
    
export default Tags;

