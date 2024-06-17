
import React from 'react';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {


  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetchPictures();
  }, []);

  const fetchPictures = () => {
    axios({
      method: "GET",
      url: '/api/gallery'
    })
    .then((response) => {
      console.log('response.data is:', response.data);
      setPictures(response.data);
      console.log("are these the pictures", setPictures);
      console.log("pictures", pictures);
    })
    .catch((error) => {
      console.log('Error on get:', error);
    });
  };

 
 const likeCount = (id) => {
    console.log("is my function working", likeCount);

    axios({
      method: "PUT",
      url: `/api/gallery/likes/${id}`
    })
    .then((response) => {
      fetchPictures();
    })
    .catch((error) => {
      alert(`Couldn't update like count. Try again later`);
      console.log('Error updating inventory count', error);
    });
  };




    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        
       <GalleryList pictures={pictures}
       likeCount= {likeCount}/>

      
      </div>
    );
}

export default App;
