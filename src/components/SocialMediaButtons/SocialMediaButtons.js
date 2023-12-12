import React, { useState } from 'react';
import './SocialMediaButtons.css';

function SocialMediaButtons() {
  const [liked, setLiked] = useState(false);
  const [shared, setShared] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleShareClick = () => {
    setShared(!shared);
  };

  return (
    <div className="SocialMediaButtons">
      <button onClick={handleLikeClick} className={`button ${liked ? 'liked' : 'notliked'}`}>
        <i className="material-icons">favorite</i> Like
      </button>
      <button onClick={handleShareClick} className={`button ${shared ? 'shared' : 'notshared'}`}>
        <i className="material-icons">share</i> Share
      </button>
      {/* Add more social media buttons as needed */}
    </div>
  );
}

export default SocialMediaButtons;
