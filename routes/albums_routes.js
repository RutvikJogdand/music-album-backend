const express = require("express")
const mongoose = require("mongoose")
const {getAllAlbums,getSongsFromAlbum, getOneAlbum, getAllSongs} = require("./../controllers/albums_controller")

const router = express.Router()

router.get("/all-albums", getAllAlbums)
router.post("/songs",getSongsFromAlbum)
router.get("/album",getOneAlbum)
router.get("/all-songs",getAllSongs)

module.exports = router