const express = require('express');
const router = express.Router();
const searchParamType = require('../middleware/searchParam');

const { createBook,
    getAllbook,
    getsingleBook,
    updateBook,
    deleteBook } = require('../controllers/bookController');


router.route('/').post(createBook);
router.route('/allbooks').get(getAllbook);
router.route('/book/:id').get(getsingleBook).patch(updateBook).delete(deleteBook);


module.exports = router;
