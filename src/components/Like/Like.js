import React, { useState } from 'react';

function Like() {
  const [liked, setLiked] = useState(false);
  const [showFanfare, setShowFanfare] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setShowFanfare(true);

    // Hide the fanfare after a short delay (you can adjust the delay as needed)
    setTimeout(() => {
      setShowFanfare(false);
    }, 1000);
  };

  return (
    <div>
      <button onClick={toggleLike} className={`like-button ${liked ? 'liked' : ''}`}>
        {liked ? (
          <i className="material-icons" style={{ color: 'red' }}>
            favorite
          </i>
        ) : (
          <i className="material-icons">favorite_border</i>
        )}
      </button>
      {showFanfare && (
        <div className="fanfare">
          <span role="img" aria-label="confetti" className="confetti">
            🎉
          </span>
          <span role="img" aria-label="confetti" className="confetti">
            🎉
          </span>
          <span role="img" aria-label="confetti" className="confetti">
            🎉
          </span>
        </div>
      )}
    </div>
  );
}

export default Like;
