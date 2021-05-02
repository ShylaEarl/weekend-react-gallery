const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT Route
router.put('/:id', (req, res) => {
    console.log('in PUT', req.params.id);
    let sqlString = 'UPDATE gallery SET "likes" = likes + 1 WHERE id=$1;';
    pool.query(sqlString, [req.params.id])
        .then(result => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('in PUT', error);
            res.sendStatus(500);
        });
});

// GET Route
router.get('/', (req, res) => {
    let sqlString = 'SELECT * FROM gallery ORDER BY "id";';
    pool.query(sqlString)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('error in GET router', error);
            res.sendStatus(500);
        });
}); // END GET Route

//POST Route
router.post('/', (req, res) => {
    let sqlString = 'INSERT INTO gallery ("path", "description") VALUES ($1, $2);';
    pool.query(sqlString, [req.body.path, req.body.description])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error in POST', error);
        res.sendStatus(500); 
        });
}); //END POST Route

module.exports = router;

//***USE FOR BASE MODE*** const galleryItems = require('../modules/gallery.data');

//***BASE MODE PUT Route */
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route