import { Sequelize } from 'sequelize'
import db from './../config/database.js'

const { DataTypes } = Sequelize

const song = db.define(
  'song',
  {
    title: {
      type: DataTypes.STRING(1234)
    },
    date_of_release: {
      type: DataTypes.DATE
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    image: {
      type: DataTypes.STRING(1234)
    }
  },
  { timestamps: false },
  { freezeTableName: true }
)
const artist = db.define(
  'artist',
  {
    name: {
      type: DataTypes.STRING(1234)
    },
    dob: {
      type: DataTypes.DATE
    },
    bio: {
      type: DataTypes.STRING(1234)
    }
  },
  { timestamps: false },
  { freezeTableName: true }
)

const users = db.define(
  'users',
  {
    name: {
      type: DataTypes.STRING(1234)
    },
    email: {
      type: DataTypes.STRING(1234)
    },
    password: {
      type: DataTypes.STRING(1234)
    }
  },
  { timestamps: false },
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
  { timestamps: false },
  { freezeTableName: true }
)
export { song, artist, users, artistSong }
