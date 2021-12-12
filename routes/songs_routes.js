const express = require("express")
const mongoose = require("mongoose")
const {getAllSongs} = require("./../controllers/songs_controller")

const router = express.Router()

router.get("/all-songs", getAllSongs)

module.exports = router