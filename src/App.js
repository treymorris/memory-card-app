import React from "react";
import { useState } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Display from "./components/Display";
import Cards from "./components/Cards"
import imageData from "./components/imageData"
//import pic from "./images/01.JPG"//direct import for test
function App() {

  const [cards, setCards] = useState(imageData);

  const [score, setScore] = useState({
     highScore: 0,
     currentScore: 0,
   });

  const handleClick = id => {
    shuffleCards();
    updateScore(id);
  }

  const handleIncrement = () => {
    setScore(prevScore => prevScore + 1)
  };

  const updateScore = id => {
    cards.forEach(cards => {
      if (id === cards.id && cards.clicked === false) {
        cards.clicked = true;
        setCards((prevInfo) => {
          return {...prevInfo, [cards.clicked]: false}
        })
        
        handleIncrement();
      } else if (id === cards.id && cards.clicked === true) {
        if (score.currentScore > score.highScore) {
          setScore((prevInfo) => {
            return {...prevInfo, [score.highScore]: score.currentScore}
          })
          
        }
        setScore((prevInfo) => {
          return {...prevInfo, [score.currentScore]: 0 }
        })
        setCards((prevInfo) => {
          return {...prevInfo, [cards.clicked]: false}
        })
      
      }
    });
  };
  
  const shuffleCards = (e) => {
    const shuffledArr = shuffle(cards);
    setCards({ shuffledArr });
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
      
      <Header
        currentScore={score.currentScore}
        highScore={score.highScore}
      />

      <Display/>
      
      {cards.map(cards => (
        <Cards 
          url={cards.url}
          id={cards.id}
          clicked={cards.clicked}
          handleClick={handleClick}
          key={cards.id}
          />
      ))};
      
      </Wrapper>
    );
};

export default App;
