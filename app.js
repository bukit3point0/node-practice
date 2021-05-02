const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
// const bodyParser = require('body-parser') // deprecated package, now built into express
require('dotenv/config')

app.use(cors())
// app.use(bodyParser.json()) // deprecated package, now built into express, use two lines below instead
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

const creatureRoute = require('./routes/creature')

app.use('/creature', creatureRoute)


// middlewares
app.use('/posts', () => {
    console.log('confirm use of middleware on posts') //comment in vscode terminal
})
app.use('/creature', () => {
    console.log('creature middleware confirmed') //comment in vscode terminal
})

// app.use(auth) // requires authentication

// the above creates the ability to create routes very simply

// routes moved to another page

// connect to database
mongoose.connect(process.env.MONGOOSE_CONNECT, 
    { useNewUrlParser: true }, 
    () => { console.log('connected to mongodb')}
)

//localhost port 3000
    app.listen(3000);
