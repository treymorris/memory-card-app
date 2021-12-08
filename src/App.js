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

  const handleClick = (clicked, currentScore, highScore) => {
    console.log("handle click")
    shuffleCards();
    //updateScore(clicked, currentScore, highScore);
    console.log(score.currentScore)
    console.log(cards);
  }

  const handleIncrement = () => {
    setScore((prevScore) => {
      return {...prevScore, [score.currentScore]: score.currentScore + 1}
    })
  };

  // const handleHighScore = () => {
  //  setScore((prevScore) => {
  //    return {...prevScore, [score.highScore]: score.currentScore}
  //  })
  // }

  const updateScore = (clicked, currentScore, highScore) => {
    console.log("updating score")
  
      if (clicked === false) {
        
        setCards((prevInfo) => {
          return {...prevInfo, [clicked]: true}
        })
        handleIncrement();
      } else if (clicked === true) {
        if (currentScore > highScore) {
          setScore((prevInfo) => {
            return {...prevInfo, [highScore]: currentScore}
          })
        }
       }
    };
  
  const shuffleCards = () => {
    console.log("shuffling")
    const shuffledArr = shuffle(cards);
    setCards(shuffledArr);
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
      
      {cards.map((cards) => (
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
