import React from 'react';

const Input = ( {handleClick} ) => {

// function handleButtonClick() {
//     console.log("Button clicked");
//   }

  return (
    <div>
      <input className="inputText" type="text" placeholder="Top text"></input>
      <input className="inputText" type="text" placeholder="Bottom text"></input>
      <button className="genMeme" onClick={handleClick}>Generate</button>
    </div>
  )
}

export default Input;