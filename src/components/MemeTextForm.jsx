function MemeTextForm({ handleChange }) {
  return (
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
  )
};

export default MemeTextForm;