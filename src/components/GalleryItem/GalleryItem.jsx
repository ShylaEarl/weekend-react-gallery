import './GalleryItem.css';
import { useState } from 'react';
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
        let id = event.currentTarget.dataset.id;
        //console.log('like button clicked for image:', id);

        axios.put(`/gallery/${id}`)
            .then((response) => {
                //console.log('in PUT', response);
                props.getImage();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    //conditional rendering for like message 
    const getMessage = () => {
        if (props.likes === 1) {
            //singular because it is 1 time
            return (<p>{props.likes} person loves this.</p>)
        } else {
            //zero or multiple 'times' so plural
            return (<p>{props.likes} people love this.</p>)
        }
    }//end getMessage

    //DELETE Request to remove image
    const deleteImage = (event) => {
        let id = event.currentTarget.dataset.id;
        //console.log('Delete button clicked for', id);

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
                src={props.path}
                alt={props.description}
                width='150'
            />}
            {!swap && <div
                onClick={imageSwap}
                className="description">
                {props.description}
            </div>}
            <br></br>
            <button onClick={updateLikes}
                className="loveButton"
                data-id={props.id}>
                Love It!
            </button>
            <br></br>
            {getMessage()}
            <button onClick={deleteImage}
                className="deleteButton"
                data-id={props.id}>
                Delete
            </button>
        </div>
    )
}

export default GalleryItem;


