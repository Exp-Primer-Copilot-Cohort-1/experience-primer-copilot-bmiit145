// Create web server
// Programmer: Philip Kempton

// Import modules
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');
const {ensureAuthenticated} = require('../config/auth');

// Route to add a new comment
router.post('/addComment', ensureAuthenticated, (req, res) => {
    // Create a new comment
    const comment = new Comment({
        content: req.body.content,
    });
});