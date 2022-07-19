import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import Navbar from './../components/Navbar'
const Home = () => {
  const navigate = useNavigate()
  const [showSongs, SetShowSongs] = useState(true)
  const [songs, SetSongs] = useState([])
  const [artists, SetArtists] = useState([])

  const getSongs = async () => {
    try {
      const topSongs = await axios.get('http://localhost:5000/info/top10songs')
      SetSongs(topSongs.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getArtists = async () => {
    try {
      const topartists = await axios.get('http://localhost:5000/info/allartist')
      SetArtists(topartists.data)
      console.log('topArtist: ',topartists)
    } catch (error) {
      console.log(error)
    }
  }
  const ratingChanged = newRating => {
    console.log(newRating)
  }
  useEffect(() => {
    getSongs()
    getArtists()
  }, [])
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <div className="h-full w-32 top-20 left-0 fixed bg-gray-500 text-white flex flex-col items-center justify-between text-xl pb-28 pt-4 font-medium">
          <div className="flex flex-col  space-y-10">
            <button className="" onClick={() => SetShowSongs(true)}>
              Songs
            </button>
            <button onClick={() => SetShowSongs(false)}>Artist</button>
          </div>
          {showSongs && (
            <div className="">
              <button onClick={() => navigate('/addsong')}>Add Song</button>
            </div>
          )}
        </div>
        {showSongs === true ? (
          <div className="flex justify-center py-6 w-full">
            <div className="flex flex-col space-y-10">
              <div className="flex justify-center">
                <span className="text-3xl font-bold">Top 10 Songs</span>
              </div>
              <div className="w-full">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Song Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Rating
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date Of Release
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {songs.map(song => (
                        <tr
                          key={song.id}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                          <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {song.title}
                          </th>
                          <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            <ReactStars
                              count={5}
                              onChange={ratingChanged}
                              size={24}
                              activeColor="#ffd700"
                            />
                          </td>
                          <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {song.date_of_release}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center py-6">
            <div className="flex flex-col space-y-10">
              <div className="flex justify-center">
                <span className="text-3xl font-bold">Top 10 Artists</span>
              </div>
              <div className="max-w-2xl mx-auto">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Artist name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          DOB
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Bio
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {artists.map(artist => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {artist.name}
                          </td>
                          <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {artist.dob}
                          </td>
                          <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {artist.bio}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Home
