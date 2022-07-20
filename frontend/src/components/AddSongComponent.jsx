import axios from 'axios'
import React, { useEffect, useState } from 'react'

import ArtistModal from './ArtistModal'
const AddSongComponent = () => {
  const [formValue, SetFormValue] = useState({
    title: '',
    date_of_release: ''
  })

  const [artists, SetArtist] = useState([])
  const [showModal, SetShowModal] = useState(false)
  const [artistValue, SetArtistValue] = useState(-1)
  
  const handleChange = event => {
    SetFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }
  const handleChangeArtist = e => {
    SetArtistValue(e.target.value)
  }

  const getArtists = async () => {
    const response = await axios.get('http://localhost:5000/info/allartist')
    SetArtist(response.data)
  }

  useEffect(() => {
    getArtists()
  }, [showModal])

  const handleSubmit = async e => {
    window.location.reload()
    e.preventDefault()
    try {
      await axios
        .post('http://localhost:5000/info/song', {
          title: formValue.title,
          date_of_release: formValue.date_of_release
        })
        .then(async res => {
          try {
            await axios
              .post('http://localhost:5000/info/artistsong', {
                song_id: res.data.id,
                artist_id: artistValue
              })
          } catch (error) {
            console.log(error)
          }
        })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex flex-col items-center py-10 space-y-5">
      <span className="text-2xl font-medium ">Add New Song</span>
      <div>
        <form action="#" onSubmit={handleSubmit} method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Song Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    id="title"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 border-2 rounded"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="date_of_release"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of Release
                  </label>
                  <input
                    type="Date"
                    name="date_of_release"
                    onChange={handleChange}
                    id="date_of_release"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  border-gray-400 border-2 rounded"
                  />
                </div>
                {/* <div className="col-span-6 sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Artwork
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="image"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="image"
                            name="image"
                            type="file"
                            onChange={event => {
                              console.log('filename : ',event.target.files[0])
                              SetArtwork(event.target.files[0])
                            }}
                            className="sr-only"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="artist"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Artist
                  </label>
                  <select
                    id="artist"
                    name="artist"
                    value={artistValue}
                    onChange={handleChangeArtist}
                    required
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option
                      value="-1"
                      className="rounded-md"
                      selected="selected"
                    >
                      Select Artist
                    </option>
                    {artists.map(ele => (
                      <option
                        key={ele.id}
                        value={ele.id}
                        className="capitalize rounded-md"
                      >
                        {ele.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  onClick={() => SetShowModal(!showModal)}
                  className="col-span-6 sm:col-span-4 bg-stone-100 w-2/5 flex justify-center py-2 rounded cursor-pointer"
                >
                  <button type="button">Add Artist</button>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      {showModal && <ArtistModal data={showModal} updateData={SetShowModal} />}
    </div>
  )
}

export default AddSongComponent
