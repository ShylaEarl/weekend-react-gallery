import react, {useState} from 'react';
import axios from 'axios';
import './Form.css';

function Form({getImage}){
    const [path, setPath] = useState('');
    const [description, setDescription] = useState('');

    const addImage = () => {
        //new image object
        const newImage = {
            path: path,
            description: description
        }//end newImage
        console.log('new image object is:', newImage);

        //POST route to add new image object
        axios.post('/gallery', newImage)
        .then(response => {
            console.log('in POST', response);
            //update gallery
            getImage();
            //clear updates once you get a response back
            setPath('');
            setDescription('');
        })
        .catch(error => {
            console.log('in POST', error);
        });
    }//end addImage

    //on click, POST new image object
    const handleSubmit = (event) => {
        event.preventDefault();
        addImage();
    }//end handleSubmit

    return(
        <form className="form" onSubmit={handleSubmit}>
            <input onChange={(event) => setPath(event.target.value)}
                value={path}
                type="text"
                placeholder="Image URL"
                className="pathInput"
            />
            <input onChange={(event) => setDescription(event.target.value)}
                value={description}
                type="text"
                placeholder="Description"
                className="descriptionInput"
            />
            <button className="addButton">Click To Add Image</button>
        </form>
    );
}//end Form

export default Form;