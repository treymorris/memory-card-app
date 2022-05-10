import React from "react";
import { useState } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Display from "./components/Display";
import Card from "./components/Card";
import CardData from "./components/CardData";

function App() {
  const [cards, setCards] = useState(CardData);
  console.log(cards);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleClick = (card) => {
    //console.log(card)
    shuffleCards();
    handleScore(card);
  };

  // const handleIncrement = () => {
  //   setScore(prevScore => {
  //     console.log(score.currentScore)
  //     return {...prevScore, currentScore: prevScore.currentScore + 1 }
  //   })
  // }

  // const handleHighScore = () => {
  //  setScore((prevScore) => {
  //    return {...prevScore, [score.highScore]: score.currentScore}
  //  })
  // }

  const handleScore = (card) => {
    //console.log(card.clicked)
    if (card.clicked === true) {
      console.log('true')
      setHighScore(score);
      winMessage();
    } else {
      setScore(score + 1)
      const cardToUpdate = cards.findIndex((index) => index.id === card.id)
      const updatedCards = [...cards]
      updatedCards[cardToUpdate].clicked = !card.clicked
      setCards(updatedCards)
    }
  };

  const winMessage = () => {
    alert(`Play Again?  High Score is ${score}`);
    setScore(0);
  }

  const shuffleCards = () => {
    const shuffledArr = shuffle(cards).slice();
    setCards(shuffledArr);
  };

  const shuffle = (array) => {
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
    <div>
      <Header score={score} highScore={highScore} />
      <Display />
      <Wrapper>
        {cards.map((card) => (
          <Card
            card={card}
            handleClick={handleClick}
            key={card.id}
          />
        ))}
      </Wrapper>
    </div>
  );
}

export default App;
