import React from "react";
import { useState } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Display from "./components/Display";
import Cards from "./components/Cards"


function App() {

  const [card, setCards] = useState('');
  const [score, setScore] = useState({
    highScore: 0,
    currentScore: 0,
  });

  const [clicked, setClicked] = useState(false);
  
  return (
    <Wrapper>
      <Navbar/>
      <Display/>
      <Cards/>
    </Wrapper>
  );
}

export default App;
