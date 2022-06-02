const express = require('express')
const { connectToDb, getDb } =  require('./db')
const { ObjectId } = require('mongodb')
// initialize express app & middleware
const app = express()
app.use(express.urlencoded({ extended: true}))
// db connection
let db;
connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log("App listening on port 3000")
        });
        db = getDb()
    }
})
// routes
app.get('/books', (req, res) => {
    let books = []

    db.collection('books')
    .find()
    .sort({author: 1})
    .forEach(book => books.push(book))
    .then(() => {
        res.status(200).json(books)
    })
    .catch(() => {
        res.status(500).json({ error: "Couldn't fetch documents from the database"});
    })
    
});
app.get('/books/:id', (req, res) => {
    const id = req.params.id
    if(ObjectId.isValid(req.params.id)){
        db.collection('books')
            .findOne({_id: ObjectId(id)})
            .then((doc) => {
                res.status(200).json(doc)
            })
            .catch(() => {
                res.status(500).json({ error: "Couldn't fetch document from the database"});
            })
    } else {
        res.status(500).json({error: "Document not found"})
    }
})
