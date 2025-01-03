const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/auth');
const {createItem , uploadImage, getItems, addFavourite, getFavourites, search} = require('../controllers/itemController');


// for uploading images
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Temporary storage



// Route for signing in a user
router.post('/createItem', authenticate, createItem);
router.post('/upload' , upload.single('image'),authenticate , uploadImage); 
router.get('/getItems' , getItems);
router.post('/addFavourite/:itemID' , authenticate ,addFavourite);
router.get('/getFavourites' , authenticate , getFavourites) ;
router.get('/search' , search); 

module.exports = router;