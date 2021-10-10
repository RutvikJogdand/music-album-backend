const Albums = require("./../models/albums_model")

const getAllAlbums = async(req, res) => {

    let albums = await Albums.find()
    if(albums)
    {
      res.status(200).send({
        err: false,
        data: albums
      })
    }
    else
    {
      res.status(400).send("Error getting albums")
    }
    
}

const getSongsFromAlbum = async(req, res) => {

  const {id} = req.body
  let songs = await Albums.find({
      id: id
  })
  .then(res => {
    if(res.length !== 0) //check if array 
    {
      return(res[0].songs)
    }
    else
    {
      return null
    }
  }).catch(err => {
    return err
  })

  // If songs are found then return  the songs
  if(songs && songs!= undefined){
    res.status(200).send({
      err: false,
      data: songs
    })
  }
  else{ //If not found
    res.status(400).send({
      err: true,
      data: "Error getting songs. This album doesn't seem to exist"
    })
  }
  
}

const getOneAlbum = async(req, res) => {

  const {id} = req.query
  const query = {id: id}

  let reqAlbum = Albums.findOne(query).then(res => res).catch(err => err)

  if(reqAlbum)
  {
    res.status(200).send({
      err: false,
      data: reqAlbum
    })
  }
  else
  {
    res.status(400).send({
      err: true,
      data: "This Album does not exist."
    })
  }

}



module.exports = {getAllAlbums, getSongsFromAlbum, getOneAlbum}