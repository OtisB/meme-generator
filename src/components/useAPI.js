import { useState, useEffect } from 'react';

function useAPI() {
  const [memes, setMemes] = useState([]);

  const URL = 'https://api.imgflip.com/get_memes';

  const getData = () => {
    fetch(URL)
      .then(response => {
        if (!response.ok) {
          throw Error('Failed to fetch from this resource');
        }
        return response.json();
      })
      .then(data => {
        //console.log(data.data.memes);
        setMemes(data.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);


  // console.log('before return', memes);
  return memes;

}

export default useAPI;
