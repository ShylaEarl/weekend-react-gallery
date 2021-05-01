import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList (props){
    //console.log('gallery list props are:', props);
    // for(let i = 0; i < props.galleryList.length; i++) {
    //     console.log('in gallery list loop');
    // }
    return(
        <div>
            {props.galleryList.map(image =>
                <GalleryItem 
                    //key={image.id} 
                    // image={image}
                    id={image.id}
                    path={image.path}
                    description={image.description}
                    likes={image.likes}
                    getImage={props.getImage}
                />
            )}
        </div>
    )
}

export default GalleryList;

//updateLikes={props.updateLikes}
//image was showing up with (<GalleryItem key={image.id} image={image}/>)