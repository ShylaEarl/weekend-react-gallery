import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';
import Form from '../Form/Form.jsx';

function App() {

  let [galleryList, setGalleryList] = useState([]);

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
        console.log(error);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">React Photo Gallery</h1>
      </header>
      <Form getImage={getImage}/> 
      {/* do I need getImage on either of these lines? */}
      <GalleryList galleryList={galleryList} getImage={getImage} />
    </div>
  );
}

export default App;

