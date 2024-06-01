import { useEffect, useState } from 'react';
import axios from 'axios';


// should get the array of gallery item objects
const GalleryList = ({}) => {
// .map through the array of gallery item objects
//store useState to Display each picture (gallery item)
useEffect(() => {
    fetchPictures();
  }, [])

  let [pictures,setPictures] = useState([]);

const fetchPictures = () => {
axios ({
  method: "GET",
  url: "/api/gallery"
})
  .then((response)=> {
    console.log('response.data is:', response.data);
    setPictures(response.data);
    console.log("are these the pictures",setPictures)
    console.log("pictures", pictures)
  })
  .catch((error) => {
    console.log('Error on get:', error);
  });
};

 const likeCount = (id) => {
  console.log("is my function working", likeCount)

axios({
  method: "PUT",
  url: `/api/gallery/likes/${id}`

})
.then((repsonse)=>{
  fetchPictures()
})
.catch((error) => {
  alert(`Couldn't update like count. Try again later`);
  console.log('Error updating inventory count', error);
});
};
return (
<>
<h2>My Gallery!</h2>
    <ul>
        {
        pictures.map(image) => (
    <li key= "Images"></li>


        )}

    </ul>

</>
)

}

export default GalleryList