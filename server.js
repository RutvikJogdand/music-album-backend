const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require('cors')
// Data:
const albumsData = require("./albums_data")
// Models:
const Albums = require("./models/albums_model")
// Routes:
const allAlbumsRoute = require("./routes/albums_routes")
const allSongsRoute = require("./routes/albums_routes")
const oneAlbumRoute = require("./routes/one_album_route")

dotenv.config()

const app = express()
app.use( cors() )
app.use( express.json() )

// Albums related routes:
app.use("/api/albums/", allAlbumsRoute)
app.use("/api/songs/",allSongsRoute)
app.use("/api/album/",oneAlbumRoute)

mongoose.connect(process.env.ATLAS_URI,  (err, db) => {
    if (err) throw err;

    if(Albums.collection.countDocuments(function (err, count) {
        if (!err && count === 0) 
        {
            // It's empty
            Albums.insertMany(albumsData)
            .then(()=>{ 
            console.log("Data inserted")  // Success 
            })
            .catch((error)=>{ 
            console.log(error)      // Failure 
            }); 
        }
    }));
    
})


app.listen(5000, () => {
    console.log('Server is running up at port 5000')
})