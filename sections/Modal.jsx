import React from "react";

function Modal({ setOpenModal }) {
  return (
    <div className="w-full h-full min-h-screen bg-gray-900 bg-opacity-80 top-0 fixed sticky-0">
      <div className="justify-center items-center">
        <div className="justify-top items-top titleCloseBtn">
          <button className=""
            onClick={() => {
              setOpenModal(false);
            }}
          >
            ❌
          </button>
        </div>
        <div className="justify-center items-center mt-4 mb-4 ml-4">
          <h1>Welcome Potential Subscriber?</h1>
        </div>
        <div className="justify-center items-center mt-4 mb-4 ml-4">
          <p className="jusitfy-center items-center">
            Subscribe via Visa 💳 or mastercard 💳!
          </p>
        </div>
        <div className="footer">
          <button
          className="transition duration-500 ease ml-2 hover:bg-black-500 inline-block bg-purple-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>

          <button
          className="ml-4 mr-4 transition duration-500 ease hover:bg-black-500 inline-block bg-purple-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
          >
           Continue
           </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;