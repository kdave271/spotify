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
      type: DataTypes.INT
    },
    image: {
      type: DataTypes.LONGBLOB
    }
  },
  { freezeTableName: true }
)
const artist = db.define(
  'artist',
  {
    name: {
      type: DataTypes.VARCHAR
    },
    dob: {
      type: DataTypes.DATE
    },
    bio: {
      type: DataTypes.VARCHAR
    }
  },
  { freezeTableName: true }
)

const users = db.define(
  'users',
  {
    name: {
      type: DataTypes.VARCHAR
    },
    email: {
      type: DataTypes.VARCHAR
    },
    password: {
      type: DataTypes.VARCHAR
    }
  },
  { freezeTableName: true }
)

const artistSong = db.define(
  'artist_songs',
  {
    song_id: {
      type: DataTypes.INT
    },
    artist_id: {
      type: DataTypes.INT
    }
  },
  { freezeTableName: true }
)

export default { song, artist, users, artistSong }
