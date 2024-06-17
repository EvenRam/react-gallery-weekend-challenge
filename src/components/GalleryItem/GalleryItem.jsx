import React, {useState } from 'react';

// pass in a single galley item "pic?"
const GalleryItem = ({item,likeCount}) => {
   // this should toggle -- use conditional rendering 
   // Displays a gallery item's current number likes.
   //Contains a "like" button that, when clicked,
        // will fire off a PUT /api/gallery/like/:id request.
    
        const [displayPic, setDisplayPic] = useState(true);


        const toggleImage = () => {
            setDisplayPic(!displayPic)
        }
              
        return (
   
    <div data-testid="galleryItem">
            {displayPic ? (
        <img src={item.url} alt = {item.title} data-testid="toggle" onClick = {toggleImage} />
            ) : (
                <p className = "description" data-testid="toggle" onClick = {toggleImage}>{item.description}</p>
        )}


        <p>{item.title}</p>
      
        <button data-testid="like" onClick={() => likeCount(item.id)}>Like</button>
          <p>Likes: {item.likes}</p>
    </div>
    
    )
    
    }
    
    export default GalleryItem