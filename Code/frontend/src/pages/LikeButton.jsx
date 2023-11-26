import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const likeCount = 124; // You can use your actual like count here

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const thumbsUpColor = isLiked ? 'black' : '#ccc';

  return (
    <div className="like-button">
      <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', outline: 'none' }} onClick={handleLikeClick}>
        <FaThumbsUp color={thumbsUpColor} size={24} />
      </button>
      <span className="like-count">{likeCount}</span>
    </div>
  );
}

export default LikeButton;
