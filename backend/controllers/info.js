import { artist, artistSong, song, users } from './../models/infoModel.js'

export const addArtistSong = async (req, res) => {
  try {
    await artistSong.create(req.body)
  } catch (error) {
    res.json({ message: error.message })
  }
}
export const getArtistSong = async (req, res) => {
  if (req.body.song_id) {
    try {
      const artist_ids = await artistSong.findAll({
        where: {
          song_id: req.body.song_id
        }
      })
      res.json(artist_ids)
    } catch (error) {
      res.json({ message: error.message })
    }
  } else {
    try {
      const song_ids = await artistSong.findAll({
        where: {
          artist_id: req.body.artist_id
        }
      })
      res.json(song_ids)
    } catch (error) {
      res.json({ message: error.message })
    }
  }
}

export const addSong = async (req, res) => {
  try {
    const newSong = await song.create({
      title: req.body.title,
      date_of_release: req.body.date_of_release
    })
    res.json(newSong)
  } catch (error) {
    res.json({ message: error.message })
  }
}
export const getTop10Songs = async (req, res) => {
  try {
    let songs = await song.findAll()
    res.json(songs)
  } catch (error) {
    res.json({ message: error.message })
  }
}
export const addArtist = async (req, res) => {
  try {
    const newArtist = await artist.create(req.body)
    res.json(newArtist)
  } catch (error) {
    res.json({ message: error.message })
  }
}
export const getTop10Artist = async (req, res) => {
  try {
    const artists = await artist.findAll()
    res.json(artists)
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

export const updateSongRating = async (req, res) => {
  try {
    await song.update(req.body, {
      where: {
        id: req.body.id
      }
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}
export const createUser = async (req, res) => {
  try {
    let user = await users.findAll({
      where: {
        email: req.body.email
      }
    })
    if (user.length == 0) {
      const newUser = await users.create(req.body)
      res.json(newUser)
    } else {
      res.json({ userExist: true })
    }
  } catch (error) {
    res.json({ message: error.message })
  }
}
export const getUser = async (req, res) => {
  try {
    const user = await users.findAll({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
    if (user.length == 0) {
      res.json({ userExist: false })
    } else {
      res.json(user)
    }
  } catch (error) {
    res.json({ message: error.message })
  }
}
