import React,{useState} from 'react'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const [displayState, SetDisplayState] = useState(0)
  const location = useLocation()
  const currentUser = location.state
  return (
    <>
      <nav className="bg-black top-0 sticky text-3xl h-20 text-white ">
        <div className="h-full flex items-center justify-between px-8">
          <span className="">SPOTIFY</span>
          {currentUser === null ? (
            <div className="flex justify-between w-1/6">
              <button onClick={() => SetDisplayState(1)}>Log In</button>
              <button onClick={() => SetDisplayState(2)}>Sign In</button>
            </div>
          ) : (
            <span className='capitalize'>Welcome {currentUser.name}</span>
          )}
        </div>
      </nav>
      {displayState === 1 && <LoginForm />}
      {displayState === 2 && <RegistrationForm />}
    </>
  )
}
export default Navbar
