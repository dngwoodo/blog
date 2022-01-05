import { Link } from 'gatsby';
import React from 'react';
import './style.scss';

function PostHeader({ post, viewCount }) {
  return (
    <header className="post-header">
      {post.emoji && <div className="emoji">{post.emoji}</div>}
      <h1 className="title">{post.title}</h1>
      <div className="info">
        <div className="info-top">
          <span className="author">
            posted by <strong>{post.author}</strong>,
          </span>{' '}
          <span>
            {post.date}
            {viewCount && ` · ${viewCount} views`}
          </span>
        </div>
        <div className="categories">
          {post.categories.map((category) => (
            <Link className="category" key={category} to={`/posts/${category}`}>
              #{category}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
export default PostHeader;
