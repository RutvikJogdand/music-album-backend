const mongoose = require("mongoose")

const Schema = mongoose.Schema

const songsSchema = new Schema(

    {
        id:{
            type: Number,
            required: true,
            trim: true
        },

        artist_name:{
            type: String,
            required: true,
            trim: true
        },

        album_id:{
            type: Number,
            required: true,
            trim: true
        },

        album_name:{
            type: String,
            required: true,
            trim: true
        },

        name:{
            type: String,
            required: true,
            trim: true
        },

        duration:{
            type: String,
            required: true,
            trim: true
        }
    },

    {
        versionKey: false,
    }
)

module.exports = mongoose.model("songs", songsSchema)