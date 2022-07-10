import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Subscribe = () => {
 const [mpesaToggled, setMpesaToggled] = useState(false);

  const handleSubmit = (e) => {
   e.preventDefault();

   fetch("https://cors-anywhere.herokuapp.com/{https://tinypesa.com/express/ralin}", {
    method: 'POST',
    headers: {
        Apikey: "Ev15EZlIj6Y",
        "Content-type": 'application/x-www-form-urlencoded',
    },
    body: "amount=1&msisdn=0111225811&account_no=50",
   }).then (() => {
     console.log('Sent');
   })
  }

  return (
    <div className="flex min-h-screen items-center justify-start bg-white">
    <div className="mx-auto w-full max-w-lg">
    <h1 className="text-4xl pl-1 font-medium">Subscribe</h1>
    <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
    <p className="text-sm text-gray-600 flex items-center">Choose to pay via Paypal or Mpesa</p>
    <button type="button" className="text-gray-900 mt-4 mb-4 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
     <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
      Check out with PayPal
      </button>
      <button type="button" 
      className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
      onClick={() => setMpesaToggled(!mpesaToggled)}
      >
       <svg class="w-4 h-4 mr-2 -ml-1 text-[#626890]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
        Pay with Mpesa
      </button>
      { mpesaToggled && 
    <div className="antialiased w-88 h-65 bg-black text-gray-400 font-inter p-5">
    <div className="container mx-auto">
      <div>
        <div id="title" class="text-center my-4">
          <h1 className="font-bold text-4xl text-white">Pricing Plans</h1>
          <p className="text-light text-gray-500 text-xl pt-2 pb-2">
             Mpesa Payment
          </p>
          <input type="tel" placeholder="Phone number" name="phonenumber" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
          <button className="btn btn-success" onClick={handleSubmit}>Buy For <b>Ksh 50</b></button>
               </div>
              </div>
            </div>
           </div>}
      <p>Or go <Link href="/"><button className="transition duration-500 ease hover:bg-purple-500 inline-block bg-pink-600 text-lg rounded-full text-white px-8 mt-16 py-3 cursor-pointer">Back</button></Link></p>
    </form>
    </div>
    </div>
  )
}

export default Subscribe
