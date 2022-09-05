import { useState } from 'react';
import useAPI from './useAPI';
import Meme from './Meme';

function Main() {
  const [randomIndex, setRandomIndex] = useState(0);

  const { memes } = useAPI();

  const handleRandomIndex = () => {
    setRandomIndex(Math.floor(Math.random() * memes.length));
  };

  return (
    <div className='main-container'>
      <h1>Main</h1>
      <button className='rnd-button btn' onClick={handleRandomIndex}>Random Picture</button>
      {memes && <Meme memes={memes} randomIndex={randomIndex} />}
    </div>
  );
}

export default Main;
