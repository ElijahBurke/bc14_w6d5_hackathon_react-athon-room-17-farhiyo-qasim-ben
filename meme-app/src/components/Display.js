import React from 'react';

const Display = ({selectedMeme}) => {
  return (
    <div className="meme-display-container">
      <img className="meme-image" src={selectedMeme.url} alt={selectedMeme.name} />
      <h2>{selectedMeme.name}</h2>
    </div>
  )
}

export default Display;