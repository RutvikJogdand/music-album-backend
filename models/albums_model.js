const mongoose = require("mongoose")

const Schema = mongoose.Schema

const albumsSchema = new Schema(

    {
        id:{
            type: Number,
            required: true,
            trim: true
        },

        album_name:{
            type: String,
            required: true,
            trim: true
        },

        ofArtist:{
            type: String,
            required: true,
            trim: true
        },

        artist_logo:{
            type: String,
            required: true,
            trim: true
        },

        cover_photo:{
            type: String,
            required: true,
            trim: true,
        },

        genre:{
            type: String,
            required: true,
            trim: true
        },

        year:{
            type: Date,
            required: true
        },

        songs:{
            type: mongoose.Mixed,
            required: true
        }
    },

    {
        versionKey: false,
    }
)

module.exports = mongoose.model("albums", albumsSchema)