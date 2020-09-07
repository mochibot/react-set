import React, { useState, useEffect } from 'react';
import { genDeck } from './utility/genDeck';
import { checkSet } from './utility/checkSet';
import Card from './components/Card';

const App = () => {
  const [gameState, setGameState] = useState('over');
  const [deck, setDeck] = useState({cards: [], deckSize: 0, currentCards: []});
  const [time, setTime] = useState(0);
  const [selected, setSelected] = useState([]);
  const [isSet, setIsSet] = useState(false);

  //initiate game
  useEffect(() => {
    setGameState('playing');
    let newDeck = genDeck();
    setDeck({
      cards: newDeck,
      currentCards: newDeck.splice(0, 12),
      deckSize: newDeck.length,
    });
    startTime();
  }, [])

  const toggleCard = (card) => {
    let index = selected.findIndex(item => item.id === card.id);

    if (index < 0) {      
      setSelected([...selected, {
        ...card,
        toggled: true,
      }])
    } else {
      setSelected(selected.filter(item => item.id !== card.id))
    }

    setDeck({
      currentCards: deck.currentCards.map(item => {
        if (item.id === card.id) {
          item.toggled = !item.toggled;
          return item;
        } else {
          return item;
        }
      }),
    })

    /* need to work on this part
    if (deck.selectedCards.length === 3) {
      if (checkSet(deck.selectedCards)) {
        dealCards();
      } else {
        this.selected.Cards.length = 0;
        setIsSet(!isSet);
        setTimeout(() => {
          setIsSet(!isSet);
        }, 250);
      }
    }
    */
 
  }

  const updateTime = () => {
    setTime(time + 1);
  }

  const startTime = () => {
    let interval = null;
    if (gameState === 'playing') {
      interval = setInterval(() => {
        updateTime();
      }, 1000);
    } 
  }

  const pauseTime = () => {
    setGameState('paused');
  }

  const resumeTime = () => {

  }

  return (
    <div>
      {deck.currentCards.map(item => <Card info={item} toggleCard={toggleCard}/>)}
    </div>
  );
}

export default App;
