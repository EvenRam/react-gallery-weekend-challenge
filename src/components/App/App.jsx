
import React from 'react';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

function App() {


    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        
       <GalleryList />
       <GalleryItem />

      
      </div>
    );
}

export default App;
