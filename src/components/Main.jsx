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

  //--------- TEXT LOGIC ----------//
  const handleChange = event => {
    event.preventDefault();
    setMemeText({
      topText: event.target.topText.value,
      bottomText: event.target.bottomText.value
    });
    event.target.topText.value = '';
    event.target.bottomText.value = '';
  };

  return (
    <div className='main-container'>
      <h1>Meme Generator</h1>
      <form className='form-container' onSubmit={handleChange}>
        <label htmlFor="topText">Top Text</label>
        <input
          type="text"
          id='topText'
          name='topText'
        />
        <label htmlFor="bottomText">Bottom Text</label>
        <input
          type="text"
          id='bottomText'
          name='bottomText'
        />
        <button type='submit'>Submit</button>
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
