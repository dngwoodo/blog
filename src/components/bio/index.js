import React from 'react';

import './style.scss';

function Bio({ author, language = 'ko' }) {
  if (!author) {
    return null;
  }
  
  return (
    <div className="bio">
      <div className="introduction korean">
        <p className="title">텍스트와 함께 이미지 들어갈 자리</p>
      </div>
    </div>
  );
}

export default Bio;
