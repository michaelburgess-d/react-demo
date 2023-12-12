import React, { useState } from 'react';

import './Like.css';



function Like() {
//  currentValueOfVar, fnWhichSetsNewValue = createDynamicVar(initialValueOfTheVar)
  const [liked, setLiked] = useState(false);

// the actual variable itself is stored outside this function
// `liked` var name is just the current value 


  return (
    <span className="LikeButton">
      <button onClick={() => setLiked(! liked)} className={`${liked ? 'liked' : 'notliked'}`}>
          <i className="material-icons">favorite</i>
      </button>
    </span>
  );
}

export default Like;

