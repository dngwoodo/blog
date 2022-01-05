import { Link, StaticQuery, graphql } from 'gatsby';
import React from 'react';
import Post from '../../models/post';
import PostSearch from '../post-search';
import './style.scss';

function PageHeader({ siteTitle }) {
  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
            edges {
              node {
                frontmatter {
                  title
                  categories
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <header className="page-header-wrapper">
          <div className="page-header">
            <div className="front-section">
              <Link className="link link-title" to="/">
                {siteTitle}
              </Link>
            </div>
            <div className="trailing-section">
              <Link className="link" to="https://inflearn.com">
                인프런
              </Link>
              <Link className="link" to="/posts">
                포스트
              </Link>
              <Link className="link" to="https://www.inflearn.com/pages?type=withus">
                채용
              </Link>
              <PostSearch
                posts={data.allMarkdownRemark.edges.map(({ node }) => new Post(node, true))}
              />
            </div>
          </div>
        </header>
      )}
    />
  );
}

export default PageHeader;
