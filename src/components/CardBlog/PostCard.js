import React, { useState } from 'react';
import './PostCard.css';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Grid, Cell } from 'styled-css-grid';

const PostCard = ({ post, author, imageOnTop }) => {
    return (
    <>
      <div>

        <Cell>
            <Link to={post.fields.slug}>
                <Img sizes={post.frontmatter.image.childImageSharp.sizes} />
            </Link>
        </Cell>

        <Cell>
            <div>
                <h5 className='title-card-blog'>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h5>
                <h6 className='text-card-blog'>{post.excerpt}</h6>
              </div>
        </Cell>
      </div>
    </>
  );
}
export default PostCard;
