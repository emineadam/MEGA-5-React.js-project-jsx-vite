import React from 'react';
import './BlogPost.css';

function BlogPost({ title, content, imageUrl }) {
  return (
    <article className="BlogPost">
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} className="BlogPost-image" />
      <p>{content}</p>
    </article>
  );
}

export default BlogPost;
