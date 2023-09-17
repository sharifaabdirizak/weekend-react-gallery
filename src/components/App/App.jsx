import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';


function App() {

const [galleryList, setGalleryList] = useState ([]);

useEffect(() =>{
  console.log('in useEffect');
  getGallery();
}, [])


const getGallery = () => {
axios.get('/gallery')
  .then(response => {
    setGalleryList(response.data)
    console.log('got gallery photos'); 
  })
  .catch(err => {
    alert('error getting gallery');
    console.log(err);
  })
}
      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>

        <GalleryList 
        galleryList= {galleryList}
       
       />
       
      </div>
      
    ;
    
}
export default App;
