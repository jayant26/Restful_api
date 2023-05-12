//for using express
const express = require('express');


//setting up express router
// it will help us in handling multiple routes , reaching multiple endpoints with different http request
const router = express.Router();


const productController=require('../controllers/product');


// get will handle incoming GET request
router.get('/',productController.products_get_all );





// post will handle POST request
// post basically create or put the entries in databaase

router.post('/',productController.products_create_product);










// handling get request for a particular product id
router.get('/:productId',productController.products_get_product )


//for handling patch(update)requests
router.patch('/:productId',productController.products_update_product)

// for handling delete requests
router.delete('/:productId',productController.products_delete_product )




module.exports = router;
