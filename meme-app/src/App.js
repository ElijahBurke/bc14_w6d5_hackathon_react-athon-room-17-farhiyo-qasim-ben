import './App.css';
import React from 'react';
import Input from './components/Input';
import Display from './components/Display';
import { useState, useEffect } from 'react';


// High level plan: - 

// Find and agree on an API ✅
// Call the API and fetch the data and console.log it ✅

// Plan and construct how our app is going to look like (screenshot taken) ✅
// - Header ✅
// - Create a display components that contains the meme image✅
// - Meme text that shows up on bottom of the image ✅
// - Input for text 
// - Button to generate a new meme✅

// Create our components
// - App
//     - Created a text box with no function yet for display✅
//     - if we have time; create top + bottom text field inputs✅
//     - function for button click✅
//      - onClick api is called✅
//     - make the meme appear in a default state/placeholder✅
//      - random number between 1 - 100 generated and linked the id attribute inside json ✅
//      - meme displayed in Display component✅

// - Input
//     - Allow input for text
//     - State for text Input
//      - handle change for user adding text


// - CSS for App
// -Add background✅
// -Chose font✅
// -Align the meme image, header, input field and button accordingly✅
// - Resize the button and input field
// - Consider to add a border around the meme image
// - Consider border around the input field

// API: "https://api.imgflip.com/get_memes"✅


function App() {

  const fetchApi = () => {
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

  useEffect(() => {
    fetchApi();

  }, []);

  const [selectedMeme, setSelectedMeme] = useState(null);

  function handleClick() {
    fetchApi();
  };

  return (
    <div className="App">
      <div className="app-container">
      {selectedMeme && <Display selectedMeme={selectedMeme}/>}
      <h1 className="title">Looks Like It's Time...to oil up!</h1>  
      </div>
      <Input handleClick={handleClick}/>
    </div>
  );
}

export default App;