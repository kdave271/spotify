import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegistrationForm from '../components/RegistrationForm'
const LoginPage = () => {
  const [displayState, SetDisplayState] = useState(0)
  return (
    <>
      <nav className="bg-black text-3xl h-20 text-white">
        <div className="h-full flex items-center justify-between px-8">
          <span className="">SPOTIFY</span>
          <div className="flex justify-between w-1/6">
            <button onClick={() => SetDisplayState(1)}>Log In</button>
            <button onClick={() => SetDisplayState(2)}>Sign In</button>
          </div>
        </div>
      </nav>
      {displayState === 1 && <LoginForm />}
      {displayState === 2 && <RegistrationForm />}
    </>
  )
}

export default LoginPage
