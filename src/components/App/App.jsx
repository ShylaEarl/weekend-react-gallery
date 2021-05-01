import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {

    let [galleryList, setGalleryList] = useState([]);

    //on page load, render data array to DOM
    useEffect(() => {
      console.log('in useEffect');
      getImage();
    }, []);

    //GET request getting data from server
    const getImage = () => {
      axios.get('/gallery')
      .then((response) => {
        console.log('response from getImage', response.data);
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
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <GalleryList galleryList={galleryList} />
      </div>
    );
}

export default App;
