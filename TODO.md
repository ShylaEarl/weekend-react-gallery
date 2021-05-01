## Project Set Up
- [x] add images to public folder
- [x] modify gallery.data folder with id, title(???), description, and path
     (what about like???) for each photo added
- [x] npm install, run server, run client

## Base Mode
- [x] create GalleryList folder/file && GalleryItem folder/file
- [x] Mock up of HTML per wireframe
- [] Use axios to retrieve (GET) data from to /gallery and store it in App.
        jsx.
- [] Create a new component for the GalleryList and pass it the gallery
     data stored in App via props.
- [] Iterate (loop over) the list of gallery data
- [] Make GalleryItems
- [] Create a new component called GalleryItem.jsx and pass it the
     individual gallery item via props.
- [] Update the GalleryList to use this component to display an image.
- [] Swap the image with the description on click w/ conditional rendering.
- [] Display the number likes for each item and include a like button.
- [] When the like button is clicked, use Axios to update (PUT) the like
     count /gallery/like/:id.
- [] Update the gallery each time a like button is clicked.

## Stretch Goals
- [] Use Git Branching
- []

Features
Move the data into a database (postgresql)
name your database react_gallery
include a database.sql file documenting your database tables
Add a form (new component) that allows a user to POST a new gallery item
Client side form (use absolute URL for images)
Server side route for posting an image
Ability to delete a gallery item
Add styling with Material-UI https://material-ui.com/
Implement uppy for image upload
NOTE: The above stretch goals are intended to be completed in order.