import express from "express"
import {getAllArtist,getTop10Artist,getTop10Songs,addArtist,addSong,updateSongRating,getUser} from "./../controllers/info.js"

const router = express.Router();

router.get('/10songs',getTop10Songs)
router.get('/10artist',getTop10Artist)
router.get('/allartist',getAllArtist)
router.post('/song',addSong)
router.post('/artist',addArtist)
router.patch('/:id',updateSongRating)
router.get('/user',getUser)

export default router