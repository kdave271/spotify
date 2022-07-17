import React,{useState} from 'react'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

const Navbar = user => {
  const [displayState, SetDisplayState] = useState(0)
  return (
    <>
      <nav className="bg-black top-0 sticky text-3xl h-20 text-white ">
        <div className="h-full flex items-center justify-between px-8">
          <span className="">SPOTIFY</span>
          {user === null ? (
            <div className="flex justify-between w-1/6">
              <button onClick={() => SetDisplayState(1)}>Log In</button>
              <button onClick={() => SetDisplayState(2)}>Sign In</button>
            </div>
          ) : (
            <span>Welcome {user.name}</span>
          )}
        </div>
      </nav>
      {displayState === 1 && <LoginForm />}
      {displayState === 2 && <RegistrationForm />}
    </>
  )
}
Navbar.defaultProps = {
  name: 'kartik'
}
export default Navbar
