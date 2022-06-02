const { MongoClient } = require('mongodb')  //MongoClient lets us connect to the database
let dbConnection

module.exports = {
    connectToDb: (cb) => {   // The work of this function is to connect to the database
        const url = "mongodb://127.0.0.1:27017"

        MongoClient.connect(url)
            .then((client) => {
                dbConnection = client.db("bookstore")
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection // return the database collection recieved from the database
}