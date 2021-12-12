const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require('cors')
// Data:
const albumsData = require("./albums_data")
const songsData = require("./songs_data")
// Models:
const Albums = require("./models/albums_model")
const Songs = require("./models/songs_model")
// Routes:
const allAlbumsRoute = require("./routes/albums_routes")
const allSongsFromAlbumRoute = require("./routes/albums_routes")
const oneAlbumRoute = require("./routes/albums_routes")

const allSongs = require("./routes/songs_routes")

dotenv.config()

const app = express()
app.use( cors() )
app.use( express.json() )

// Albums related routes:
app.use("/api/albums/", allAlbumsRoute)
app.use("/api/songs/",allSongsFromAlbumRoute)
app.use("/api/album/",oneAlbumRoute)

// Song related routes:
app.use("/api/allsongs/",allSongs)

mongoose.connect(process.env.ATLAS_URI,  (err, db) => {
    if (err) throw err;

    if(Songs.collection.countDocuments(function (err, count) {
        if (!err && count === 0) 
        {
            // It's empty
            Songs.insertMany(songsData)
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