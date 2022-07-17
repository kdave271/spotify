import { song, artist, artistSong,users } from './../models/infoModel.js'

export const getTop10Songs = async (req, res) => {
  try {
    let songs = await song.findAll({ order: ['rating', 'DESC'] })
    songs = songs.slice(0, 10)
    res.json(songs)
  } catch (error) {
    res.json({ message: error.message })
  }
}
export const getTop10Artist = async (req, res) => {
  try {
    const artist = await artist.findAll()
    res.json(artist)
  } catch (error) {
    res.json({ message: error.message })
  }
}
export const getAllArtist = async (req, res) => {
  try {
    const artists = await artist.findAll()
    res.json(artists)
  } catch (error) {
    res.json({ message: error.message })
  }
}
export const addSong = async (req, res) => {
  try {
    await song.create(req.body)
    await artistSong.create({
      song_id: req.param.songId,
      artist_id: req.param.artitstId
    })
    res.json({ message: 'Song Added' })
  } catch (error) {
    res.json({ message: error.message })
  }
}
export const addArtist = async (req, res) => {
  try {
    await artist.create(req.body)
    res.json({ message: 'Artist Added' })
  } catch (error) {
    res.json({ message: error.message })
  }
}
export const updateSongRating = async (req, res) => {
  try {
    await song.update(req.body, {
      where: {
        id: req.param.id
      }
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}
export const getUser = async (req,res)=>{
  try {
    const user = await users.findAll({
      where: {
        email: req.param.email,
        password: req.param.password
      }
    })
    res.json(user)
  } catch (error) {
    res.json({ message: error.message })
  }
}