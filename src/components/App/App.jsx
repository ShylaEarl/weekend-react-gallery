import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import GalleryHeader from '../GalleryHeader/GalleryHeader.jsx';
import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryForm from '../GalleryForm/GalleryForm.jsx';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  //on page load, render data array to DOM
  useEffect(() => {
    //console.log('in useEffect');
    getImage();
  }, []);

  //GET request getting data from server
  const getImage = () => {
    axios.get('/gallery')
      .then((response) => {
        //console.log('response from getImage', response.data);
        //assigns response data to an array
        setGalleryList(response.data);
      })
      .catch(error => {
        console.log('in GET', error);
      });
  }

  // TODO Move PUT Route here and pass to GalleryList as prop

  
  return (
    <div className="App">
      <GalleryHeader />
      <GalleryForm getImage={getImage} />
      <GalleryList galleryList={galleryList} getImage={getImage} />
    </div>
  );
}

export default App;

