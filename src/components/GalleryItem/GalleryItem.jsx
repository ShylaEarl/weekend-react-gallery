import './GalleryItem.css';
import React, { useState } from 'react';
import axios from 'axios';

function GalleryItem(props) {
    //console.log('gallery item props are:', props);

    const [swap, setSwap] = useState(true);

    const imageSwap = () => {
        setSwap(!swap);
        //console.log('image clicked');
    }

    //PUT request to update like counter (logic in router)
    const updateLikes = (event) => {
        //let id = event.target.value;
        console.log('like button clicked for image:', props);

        axios.put(`/gallery/${props.image.id}`)
            .then((response) => {
                //console.log('in PUT', response);
                props.getImage();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    //DELETE Request to remove image
    const deleteImage = (id) => (event) => {
        //let id = event.currentTarget.dataset.id;
        //let id = event.target.value;
        //let id = event.target.value;
        console.log('Delete button clicked for', id);

        axios.delete(`/gallery/${id}`)
            .then(response => {
                //console.log('in DELETE', response);
                props.getImage();
            })
            .catch(error => {
                console.log('Error with Delete request', error);
            });
    }

    return (
        <div className="imageDiv" >
            {swap && <img
                onClick={imageSwap}
                className="image"
                src={props.image.path}
                alt={props.image.description}
                width='150'
            />}
            {!swap && <div
                onClick={imageSwap}
                className="description">
                {props.image.description}
            </div>}
            <br></br>
            <button onClick={updateLikes}
                className="loveButton"
                //value={props.image.id}
                >
                Love It!
            </button>
            <br></br>
            <p>{props.image.likes} {props.image.likes === 1 ? 'person loves' : 'people love'} this.</p>
            <button onClick={deleteImage(props.image.id)}
                className="deleteButton"
                //value={props.id}
                >
                Delete
            </button>
        </div>
    )
}

export default GalleryItem;

// //conditional rendering for like message 
    // const getMessage = () => {
    //     if (props.likes === 1) {
    //         //singular because it is 1 time
    //         return (<p>{props.likes} person loves this.</p>)
    //     } else {
    //         //zero or multiple 'times' so plural
    //         return (<p>{props.likes} people love this.</p>)
    //     }
    // }//end getMessage

// from line 66 {/* {getMessage()} */}


