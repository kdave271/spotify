import { Sequelize } from 'sequelize'
import db from './../config/database.js'

const { DataTypes } = Sequelize

const song = db.define(
  'song',
  {
    title: {
      type: DataTypes.STRING
    },
    date_of_release: {
      type: DataTypes.DATE
    },
    rating: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.BLOB('long')
    }
  },
  { freezeTableName: true }
)
const artist = db.define(
  'artist',
  {
    name: {
      type: DataTypes.STRING
    },
    dob: {
      type: DataTypes.DATE
    },
    bio: {
      type: DataTypes.STRING
    }
  },
  { freezeTableName: true }
)

const users = db.define(
  'users',
  {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  },
  { freezeTableName: true }
)

const artistSong = db.define(
  'artist_songs',
  {
    song_id: {
      type: DataTypes.INTEGER
    },
    artist_id: {
      type: DataTypes.INTEGER
    }
  },
  { freezeTableName: true }
)

export { song, artist, users, artistSong }
