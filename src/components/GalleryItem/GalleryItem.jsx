import React, {useState } from 'react';

// pass in a single galley item "pic?"
const GalleryItem = ({likeCount, pictures}) => {
   // this should toggle -- use conditional rendering 
   // Displays a gallery item's current number likes.
   //Contains a "like" button that, when clicked,
        // will fire off a PUT /api/gallery/like/:id request.
    
        const {displayPic, setdisplayPic} = useState(true);


        const toggleimage = () => {
            setdisplayPic(!displayPic)
        }
              
        return (
   
    <li data-testid="galleryItem">
            {displayPic ? (
        <img src={pictures.url} alt = {pictures.title} data-testid="toggle" onClick = {toggleimage} />
            ) : (
                <p className = "description" data-testid="toggle" onClick = {toggleimage}>{pictures.discription}</p>
        )}

        <p>{pictures.title}</p>
        <p>Likes: {pictures.likes}</p>
        <button data-testid="like" onClick={() => likeCount(pictures.id)}Like></button>
    </li>
    
    )
    
    }
    
    export default GalleryItem