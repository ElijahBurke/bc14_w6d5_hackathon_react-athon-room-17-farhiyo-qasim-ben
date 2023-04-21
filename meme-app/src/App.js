import './App.css';
import React from 'react';
import Input from './components/Input';
import Display from './components/Display';
import { useState } from 'react';


// High level plan - 

// Find and agree on an API ✅
// Call the API and fetch the data and console.log it ✅

// Plan and construct how our app is going to look like
// - Header
// - Meme image
// - Meme text
// - Input for text
// - Button to generate a new meme

// Create our components
// - App
//     - State for text Input
//      - handle change for user adding text

//     - function for button click
//      - onClick api is called
//      - random number between 1 - 100 generated and linked the id attribute inside json 
//      - meme displayed in Display component
// - Input


// Then we need to NPM i afterwards ✅
// Then write simple code using REACT to test if we can create and input text


// API: "https://api.imgflip.com/get_memes"


function App() {

  const fetchApi = (id) => {
    const apiUrl = `https://api.imgflip.com/get_memes`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const memes = data.data.memes;
      const randomIndex = Math.floor(Math.random() * memes.length);
      const selectedMeme = memes[randomIndex];
      console.log(selectedMeme);
      setSelectedMeme(selectedMeme);
  })
  
  .catch(error => {
    console.log("Error fetching API:", error);
  });
  
  }

  const [selectedMeme, setSelectedMeme] = useState(null);




  function handleClick() {
    fetchApi();
  };
  

  return (
    <div className="App">
      <h1>Dank Meme Generator</h1>
      {selectedMeme && <Display selectedMeme={selectedMeme}/>}
      <Input handleClick={handleClick}/>
      
    </div>
  );
}

export default App;
