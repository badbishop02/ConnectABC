import React from 'react';

const Reveal = () => {

  return (
    <form>
     <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10"
        >
          <div
            id="plan"
            class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
          >
            <div id="title" class="w-full py-5 border-b border-gray-800">
              <h2 class="font-bold text-3xl text-white">Startup</h2>
              <h3 class="font-normal text-indigo-500 text-xl mt-2">
                $9<sup>,99</sup>/month
              </h3>
            </div>
            <div id="content" class="">
              <div id="icon" class="my-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p class="text-gray-500 text-sm pt-2">
                  Perfect individuals or startups
                </p>
              </div>
              <div id="contain" class="leading-8 mb-10 text-lg font-light">
                <ul>
                  <li>10 hours of support</li>
                  <li>128MB of storage</li>
                  <li>2048MB bandwith</li>
                  <li>Subdomain included</li>
                </ul>
                <div id="choose" class="w-full mt-10 px-6">
                  <a
                    href="#"
                    class="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                    >Choose</a
                  >
                </div>
              </div>
            </div>
           </div>
           </form>
  )
}

export default reveal