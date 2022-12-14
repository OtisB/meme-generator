import './Meme.css';
function Meme({ memes, picIndex, memeText, customPic, memeReference }) {

  return (
    <div className="meme-container" ref={memeReference}>
      <h2 className='meme-text top'>{memeText.topText}</h2>
      {memes.length ? (<img
        className='meme-picture'
        src={customPic ? customPic.url : memes[picIndex].url}
        alt={customPic ? customPic.name : memes[picIndex].name}
      />) : ('...loading')}
      <h2 className='meme-text bottom'>{memeText.bottomText}</h2>
    </div>
  );
}

export default Meme;
