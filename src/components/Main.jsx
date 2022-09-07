import { useState } from 'react';
import useAPI from './useAPI';
import Meme from './Meme';
import './Main.css';

function Main() {
  const [picIndex, setPicIndex] = useState(0);
  const [memeText, setMemeText] = useState({ topText: '', bottomText: '' });

  const { memes } = useAPI();

  const handleNextPicture = () => {
    setPicIndex(picIndex + 1);
  };

  const handlePrevPicture = () => {
    setPicIndex(picIndex - 1);
  };

  const handleRandomPicture = () => {
    setPicIndex(Math.floor(Math.random() * memes.length));
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
      {memes && <div className='button-container'>
        <button className='prev-button' onClick={handlePrevPicture} disabled={picIndex === 0}>Previous Picture</button>
        <button className='rnd-button' onClick={handleRandomPicture}>Random Picture</button>
        <button className='next-button' onClick={handleNextPicture} disabled={picIndex === memes.length - 1}>Next Picture</button>
      </div>}
      {memes && <Meme memes={memes} picIndex={picIndex} memeText={memeText} />}
    </div>
  );
}

export default Main;
