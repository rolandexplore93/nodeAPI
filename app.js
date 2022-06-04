const express = require('express')
const { connectToDb, getDb } =  require('./db')
const { ObjectId } = require('mongodb')
// initialize express app & middleware
const app = express()
app.use(express.urlencoded({ extended: true}))
app.use(express.json());
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
    // Pagination implementation: (a) create a query string from req
    // Pagination implementation: (b) indicate the number of pages to be sent back
    // Pagination implementation: (c) use skip(page x booksPerPage) and limit() 
    const page = req.query.pages || 0;   // if req query parameter pages is not defined, use 0 as default page
    const booksPerPage = 3;
    
    db.collection('books')
    .find()
    .sort({author: 1})
    .skip(page * booksPerPage)  //implementing pagination
    .limit(3)                   //implementing pagination
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

app.post('/books', (req, res) => {
    const book = req.body;

    db.collection('books')
        .insertOne(book)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch(() => {
            res.status(500).json({ error: "Couldn't create a new document"});
        })
})

app.delete('/books/:id', (req, res) => {
    const id = req.params.id
    
    if(ObjectId.isValid(req.params.id)){
        db.collection('books')
            .deleteOne({_id: ObjectId(id)})
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((error) => {
                res.status(500).json({ error: "Couldn't delete the document from database"});
            })
    } else {
        res.status(500).json({error: "Document is not valid"})
    }
})

app.patch('/books/:id', (req, res) => {
    const updateData = req.body;
    console.log(updateData)
    if(ObjectId.isValid(req.params.id)){
        db.collection('books')
            .updateOne({_id: ObjectId(req.params.id)}, {$set: updateData})
            .then((result) => {
                res.status(201).json(result)
            })
            .catch(err => {
                res.status(500).json({error: "Couldn't update the document"})
            })
    } else {
        res.status(500).json({error: "Document is not valid"})
    }
})