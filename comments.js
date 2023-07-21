// Create web server application

// Import express module
const express = require('express');

// Import the controller
const commentsController = require('../controllers/commentsController');

// Create router
const router = express.Router();

// Handle HTTP GET request to the /comments path
router.get('/', commentsController.comments_get);

// Handle HTTP GET request to the /comments path
router.get('/:id', commentsController.comment_get);

// Handle HTTP POST request to the /comments path
router.post('/', commentsController.comment_post);

// Handle HTTP PUT request to the /comments path
router.put('/:id', commentsController.comment_put);

// Handle HTTP DELETE request to the /comments path
router.delete('/:id', commentsController.comment_delete);

// Export the router
module.exports = router;