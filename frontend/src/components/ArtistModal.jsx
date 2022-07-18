import React from 'react'

const ArtistModal = ({data,updateData}) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add Artist</h3>
            </div>
            <div className="relative p-6 flex-auto">
              <form
                action="#"
                onSubmit={console.log('Button Pressed')}
                method="POST"
              >
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Artist Name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autocomplete="given-name"
                          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 border-2 rounded"
                        />
                      </div>
                      <div class="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email-address"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Date of Birth
                        </label>
                        <input
                          type="Date"
                          name="email-address"
                          id="email-address"
                          autocomplete="email"
                          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  border-gray-400 border-2 rounded"
                        />
                      </div>
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="bio"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Bio
                        </label>
                        <textarea className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 border-2 rounded"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => updateData(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                onClick={() => {
                  updateData(false)
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default ArtistModal
