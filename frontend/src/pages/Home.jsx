import React, { useState } from 'react'
import Navbar from './../components/Navbar'
const Home = () => {
  const [showSongs, SetShowSongs] = useState(true)
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
              <button>Add Song</button>
            </div>
          )}
        </div>
        {showSongs === true ? (
          <div className="flex justify-center py-6 w-full">
            <div className="flex flex-col space-y-10">
              <div className="flex justify-center">
                <span className="text-3xl font-bold">Top 10 Songs</span>
              </div>
              <div class="w-full">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Artwork
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Song Title
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Artist Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Rating
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Date Of Release
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                        >
                          Apple MacBook Pro 1dwad awdawdwd adaw awd awd7"
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                        >
                          Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">Sliver</td>
                        <td class="px-6 py-4">
                          Rating
                        </td>
                        <td class="px-6 py-4">$2999</td>
                      </tr>
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
              <div class="max-w-2xl mx-auto">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Artist name
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Songs
                        </th>
                        <th scope="col" class="px-6 py-3">
                          DOB
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Bio
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                        >
                          Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">Sliver</td>
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">$2999</td>
                      </tr>
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
