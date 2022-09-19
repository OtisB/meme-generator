import { useState, useRef } from 'react';
import domtoimage from 'dom-to-image';
import useAPI from './useAPI';
import Meme from './Meme';
import MemeTextForm from './MemeTextForm';
import './Main.css';

function Main() {
  const [picIndex, setPicIndex] = useState(0);
  const [memeText, setMemeText] = useState({ topText: '', bottomText: '' });
  const [customPic, setCustomPic] = useState(null);
  const { memes } = useAPI();

  const memeReference = useRef(null);

  //--------- PICTURE LOGIC ----------//
  const handleNextPicture = () => {
    setPicIndex(picIndex + 1);
  };

  const handlePrevPicture = () => {
    setPicIndex(picIndex - 1);
  };

  const handleRandomPicture = () => {
    setPicIndex(Math.floor(Math.random() * memes.length));
  };

  //--------- UPLOAD LOGIC ----------//
  const handlePictureUpload = (event) => {
    const { files } = event.target;
    const { name } = files[0];
    const url = URL.createObjectURL(files[0]); //static method
    //console.log(url);
    setCustomPic({ name, url });
  };

  //--------- DOWNLOAD LOGIC ----------//
  const handleDownload = async () => {
    const dataUrl = await domtoimage.toJpeg(memeReference.current, { quality: 0.95 });
    const link = document.createElement('a');
    link.download = `my-meme-${Date.now()}.jpeg`;
    link.href = dataUrl;
    link.click();
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

  //--------- RESET LOGIC ----------//
  const handleClear = () => {
    setMemeText({});
    setCustomPic(null);
    setPicIndex(0);
  };

  return (
    <div className='main-container'>
      <h1>Meme Generator</h1>
      <MemeTextForm handleChange={handleChange} />
      {memes && <div className='button-container'>
        {/* TODO: change disable functionality */}
        <button className='prev-button' onClick={handlePrevPicture} disabled={picIndex === 0}>Previous Picture</button>
        <button className='rnd-button' onClick={handleRandomPicture}>Random Picture</button>
        <button className='next-button' onClick={handleNextPicture} disabled={picIndex === memes.length - 1}>Next Picture</button>
      </div>}
      {/*acceept works for (IE 10+, Edge (EdgeHTML), Edge (Chromium), Chrome, Firefox 42+) */}
      <label htmlFor="file-upload" className="custom-file-upload">
        Upload own picture
      </label>
      <input type="file" id="file-upload" onChange={handlePictureUpload} accept=".jpeg,.jpg, .png" />
      {memes && <Meme
        memes={memes}
        picIndex={picIndex}
        memeText={memeText}
        customPic={customPic}
        memeReference={memeReference}
      />}
      {memes && <div className='button-container'>
        <button onClick={handleDownload}>Download</button>
        <button onClick={handleClear}>Clear all</button>
      </div>}
    </div>
  );
}

export default Main;
