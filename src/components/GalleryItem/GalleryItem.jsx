
function GalleryItem(props){
    console.log('gallery item props are:', props);
    const image = props.image;
    return(
        <div className="image">
            <img src={image.path} alt={image.description} width='150' />
        </div>
    )
}

export default GalleryItem;