
function Meme({ memes, randomIndex }) {

  return (
    <div className="meme">
      <img src={memes[randomIndex].url} alt={memes[randomIndex].name} />
    </div>
  );
}

export default Meme;
