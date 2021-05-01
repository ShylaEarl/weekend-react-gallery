import './GalleryItem.css';
import {useState} from 'react';
import axios from 'axios';

function GalleryItem(props){
    console.log('gallery item props are:', props);
    
    const image = props.image;

    const [swap, setSwap] = useState(true);

    const imageSwap = () => {
        setSwap(!swap);
        console.log('image clicked');
    }



    return(
        <div className="image">
            {swap && <img onClick={imageSwap} src={image.path} alt={image.description} width='150' />}
            {!swap && <div onClick={imageSwap} className="description">{image.description}</div>}
        </div>
    )
}

export default GalleryItem;

