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
        console.log('like button clicked for image:', id);

        axios.put(`/gallery/like/${id}`)
            .then((response) => {
                //console.log('in PUT', response);
                props.getImage();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="image" >
            {swap && <img onClick={imageSwap} src={props.path} alt={props.description} width='150' />}
            {!swap && <div onClick={imageSwap} className="description">{props.description}</div>}
            <br></br>
            <button onClick={updateLikes} data-id={props.id}>I Like It!</button>
            <br></br>
            <p>Likes: {props.likes}</p>
        </div>
    )
}

export default GalleryItem;


