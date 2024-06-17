
import GalleryItem from '../GalleryItem/GalleryItem';

const GalleryList = ({pictures,likeCount}) => {
  
  return (
    <>
      <h2>My Gallery!</h2>
      <ul> 
        {pictures.map((item) => {
          return(

       <GalleryItem
         key={item.id} 
         item ={item}
         likeCount={likeCount}
          
        />
          )
          })}
      </ul>
    </>
  );
};

export default GalleryList;










