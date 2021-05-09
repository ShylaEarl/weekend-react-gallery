import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList(props) {

    return (
        <div className="background">
            {props.galleryList.map(image =>
                <GalleryItem
                    key={image.id}
                    image={image}
                    // id={image.id}
                    // path={image.path}
                    // description={image.description}
                    // likes={image.likes}
                    getImage={props.getImage}
                />
            )}
        </div>
    )
}

export default GalleryList;

