import { useState } from 'react';
import useAPI from './useAPI';
import Meme from './Meme';
import './Main.css';

function Main() {
  const [randomIndex, setRandomIndex] = useState(0);
  const [memeText, setMemeText] = useState({ topText: 'top', bottomText: 'bottom' });

  const { memes } = useAPI();

  const handleRandomIndex = () => {
    setRandomIndex(Math.floor(Math.random() * memes.length));
  };

  return (
    <div className='main-container'>
      <h1>Meme Generator</h1>
      <form className='form-container'>
        <label htmlFor="top-text">Enter Top Text</label>
        <input
          type="text"
          id='top-text'
          name='top-text'
          value={memeText.topText ?? ''}
        />
        <label htmlFor="bottom-text">Enter Bottom Text</label>
        <input
          type="text"
          id='bottom-text'
          name='bottom-text'
          value={memeText.bottomText ?? ''}
        />
      </form>
      <button className='rnd-button btn' onClick={handleRandomIndex}>Random Picture</button>
      {memes && <Meme memes={memes} randomIndex={randomIndex} memeText={memeText} />}
    </div>
  );
}

export default Main;
