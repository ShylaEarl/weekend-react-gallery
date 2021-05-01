import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList (props){
    console.log('gallery list props are:', props);
    return(
        <>
            {props.galleryList.map(image =>
                (<GalleryItem 
                    key={image.id} 
                    image={image}
                    // description={item.description}
                    // likes={item.likes}
                />)
            )}
        </>
    )
}

export default GalleryList;