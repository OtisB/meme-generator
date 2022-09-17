import './Meme.css';
function Meme({ memes, picIndex, memeText, customPic }) {

  return (
    <div className="meme">
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
