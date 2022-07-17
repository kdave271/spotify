import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const RegistrationForm = () => {

  const navigate = useNavigate()

  const [name,SetName] = useState('')
  const [email,SetEmail] = useState('')
  const [password, SetPassword] = useState('')

  const addUser =async (e)=>{
    e.preventDefault();
    try{
      await axios.post('http://localhost:5000/info/adduser',{
        name:name,
        email:email,
        password:password
      })
    }catch(err)
    {
      console.log(err)
      navigate('/home')
    }
  }
  return (
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register
          </h2>
        </div>
        <form
          class="mt-8 space-y-6"
          action="#"
          onSubmit={addUser}
          method="POST"
        >
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm space-y-2">
            <div>
              <label for="name" class="sr-only">
                name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                autocomplete="name"
                required
                value={name}
                onChange={e => SetName(e.target.value)}
                class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label for="email-address" class="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                value={email}
                class="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={e => SetEmail(e.target.value)}
              />
            </div>
            <div>
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                value={password}
                class="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={e => SetPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrationForm
