import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
   
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7o2lh5g', 'template_qxlnj4v', form.current, 'hckLF0KO6I8oTE8gN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
  <div className="flex min-h-screen items-center justify-start bg-white">
  <div className="mx-auto w-full max-w-lg">
    <h1 className="text-4xl font-medium">Contact us</h1>
    <p className="mt-3">Email us at help@domain.com or message us here:</p>

    <form ref={form} onSubmit={sendEmail} className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
      <div className="bg-transparent shadow-lg rounded-lg p-8 pb-12 mb-8">
      <label>Your Name</label>
      <input type="text" name="user_name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <label>Your Email</label>
      <input type="email" name="user_email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
      </div>
      <div>
      <label>Your Message</label>
      <textarea name="message" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
      </div>
      <div>
      <input type="submit" className="transition duration-500 ease hover:bg-purple-500 inline-block bg-pink-600 text-lg rounded-full text-white px-8 mt-16 py-3 cursor-pointer" value="Send" />
      </div>
    </form>
  </div>
</div>
  )
}

export default Contact