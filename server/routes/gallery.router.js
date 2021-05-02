const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//***USE FOR BASE MODE*** const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let sqlString = 'SELECT * FROM gallery;';
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