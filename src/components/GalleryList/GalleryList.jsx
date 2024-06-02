import { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';

// should get the array of gallery item objects
const GalleryList = () => {
// .map through the array of gallery item objects
//store useState to Display each picture (gallery item)
const [pictures,setPictures] = useState([]);

useEffect(() => {
    fetchPictures();
  }, []);


const fetchPictures = () => {
axios ({
  method: "GET",
  url: "/api/gallery",
})
  .then((response)=> {
    console.log('response.data is:', response.data);
    setPictures(response.data);
   console.log("pictures", pictures)
  })
  .catch((error) => {
    console.log('Error on get:', error);
  })
};

 const likeCount = (id) => {
  console.log("is my function working", likeCount)
axios({
  method: "PUT",
  url: `/api/gallery/likes/${id}`
})
.then((response)=>{
    console.log('response in put:', response);
  fetchPictures()
})
.catch((error) => {
  alert(`Couldn't update like count. Try again later`);
  console.log('Error updating inventory count', error);
});
};
return (
<>
<div data-testid="galleryList">
<h2>My Gallery!</h2>
    <ul>
        {pictures.map((image) => {
    <li key= {image.id}>{image.title}{image.desription}{image.likes}</li>

})}
    </ul>
    </div>
</>
)
}
export default GalleryList

