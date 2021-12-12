const Songs = require("./../models/songs_model")

const getAllSongs = async(req, res) => {

    const {pageNumber, nPerPage} = req.query

    let songs = await Songs.find().sort( { _id: 1 } ).skip( Number(pageNumber) > 0 ? ( ( Number(pageNumber) - 1 ) * Number(nPerPage) ) : 0 ).limit( Number(nPerPage) )
    
    if(songs)
    {
      res.status(200).send({
        err: false,
        data: songs
      })
    }
    else
    {
      res.status(400).send("Error getting songs")
    }
    
}

module.exports = {getAllSongs}