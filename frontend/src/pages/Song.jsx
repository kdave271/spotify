import React, { useState } from 'react'
import AddSongComponent from '../components/AddSongComponent'
import ArtistModal from '../components/ArtistModal'
import Navbar from '../components/Navbar'

const Song = () => {
  const [showModal, SetShowModal] = useState(false)
  return (
    <>
      <Navbar />
      <AddSongComponent data={showModal} updateData={SetShowModal}/>
      {showModal && <ArtistModal data={showModal} updateData={SetShowModal} />}
    </>
  )
}

export default Song
