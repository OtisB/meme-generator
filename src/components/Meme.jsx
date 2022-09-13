import './Meme.css';
function Meme({ memes, picIndex, memeText }) {

  return (
    <div className="meme">
      <h2 className='meme-text top'>{memeText.topText}</h2>
      {memes.length ? (<img className='meme-picture' src={memes[picIndex].url} alt={memes[picIndex].name} />) : ('...loading')}
      <h2 className='meme-text bottom'>{memeText.bottomText}</h2>
    </div>
  );
}

export default Meme;
