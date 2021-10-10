const express = require("express")
const mongoose = require("mongoose")
const {getAllAlbums,getSongsFromAlbum, getOneAlbum} = require("./../controllers/albums_controller")

const router = express.Router()

router.get("/all-albums", getAllAlbums)
router.post("/songs",getSongsFromAlbum)
router.post("/album",getOneAlbum)

module.exports = router