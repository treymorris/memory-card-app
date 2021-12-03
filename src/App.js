import React from "react";
import { useState } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Display from "./components/Display";
import Cards from "./components/Cards"
import cardInfo from "./components/cardInfo.json"

function App() {

  const [cards, setCards] = useState({
    clicked: false });

  const [score, setScore] = useState({
    highScore: 0,
    currentScore: 0,
  });

  const handleClick = id => {
    shuffleCards();
    updateScore(id);
  }

  const updateScore = id => {

  }

  const shuffleCards = () => {
    
    
  };

  
  const shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    
    while (0 !== currentIndex) {
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;

    }

    return array;
    
  };

  return (
    <Wrapper>
      <Navbar/>
      <Display/>
      <Cards onClick={handleClick}
             Clicked={cards.clicked}
             id={cardInfo.id}
             key={cardInfo.id}
             name={cardInfo.name}
             image={cardInfo.image}
             occupation={cardInfo.occupation}
             />
    </Wrapper>
  );
}

export default App;
