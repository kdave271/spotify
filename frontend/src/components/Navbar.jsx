import React from 'react'

const Navbar = props => {
  return (
    <nav className="bg-black text-3xl h-20 text-white">
      <div className="h-full flex items-center justify-between px-8">
        <span className="">SPOTIFY</span>
        {props.user === null ? (
          <div className="flex justify-between w-1/6">
            <button onClick={() => SetDisplayState(1)}>Log In</button>
            <button onClick={() => SetDisplayState(2)}>Sign In</button>
          </div>
        ) : <span>Welcome {props.user.name}</span>}
      </div>
    </nav>
  )
}
Navbar.defaultProps = {
  user: null
}
export default Navbar
