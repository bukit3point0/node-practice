// Routes
const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

// gets back all posts
router.get('/', async (req, res) => {
    // res.send('posts page') // kind of like console logging rather than returning the data itself
    try{
        const posts = await Post.find()
        res.json(posts)
    } catch(err) {
        res.json({message:err})
    }
})

router.get('/specificpost', (req,res) => {
    res.send('specific post page')
})

// submits a post
router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    // post.save() //returns a promise
    // .then(data => {
    //     res.status(200).json(data)
    // })
    // .catch(err => {
    //     res.json({
    //         message: err
    //     })
    // })

    // changes to commented out above when async is created
    try{
        const savedPost = await post.save()
        res.json(savedPost)
    } catch(err){
        res.json({message: err})
    }
})

// get a specific post
router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch(err) {
        res.json({message:err})
    }
})

// delete a post
router.delete('/:postId', async (req,res) => {
    try {
        const remove = await Post.remove({_id: req.params.postId})
        res.json(remove)
    } catch(err) {
        res.json({message:err})
    }
})

// update a post // doesn't work
router.patch(':/postId', async (req, res) => {
    try{
        const edit = await Post.findByIdAndUpdate(
            {_id: req.params.postId}, 
            {$set : {title: req.body.title}}
        )
        console.log(edit)
        res.json(edit)
    } catch(err) {
        res.json({message:err})
    }
})

module.exports = router;