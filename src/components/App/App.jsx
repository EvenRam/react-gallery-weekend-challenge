import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import GalleryList from '../GalleryList/GalleryList';


function App() {

  

    return (
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>

        
       <GalleryList  />
      </div>
    );
}

export default App;
