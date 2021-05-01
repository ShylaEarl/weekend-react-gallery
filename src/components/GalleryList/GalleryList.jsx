import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList (props){
    console.log('gallery list props are:', props);
    return(
        <>
            {props.galleryList.map(image =>
                (<GalleryItem key={image.id} image={image}/>)
            )}
        </>
    )
}

export default GalleryList;