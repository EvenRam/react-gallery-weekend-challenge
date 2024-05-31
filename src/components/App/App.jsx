import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';



function App() {
    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img className="photo" src="images/goat_small.jpg"/>
        <img className="photo" src="images/goat_stache.png"/>
        <img className="photo" src="images/AK_Eagle.jpeg"/>
        <img className="photo" src="images/El_Paso.jpeg"/>
        <img className="photo" src="images/Rainbow.jpeg"/>
        <img className="photo" src="images/Stairs.jpeg"/>
        <img className="photo" src="images/Zeus.jpeg"/>
      </div>
    );
}

export default App;
