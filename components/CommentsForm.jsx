import React, { useRef, useState, useEffect } from 'react';
//import submitComment from services to send data

import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, [])
  

  const handleCommentSubmission = () => {
     setError(false);
    //we will add new query for saving the comment in services.
     const { value: comment } = commentEl.current;
     const { value: name } = nameEl.current;
     const { value: email } = emailEl.current;
     //we have the storData checked as it is a check-box.
     const { checked: storeData } = storeDataEl.current;

     if(!comment || !name || !email) {
        setError(true);
        return;
     }
      //as we destructured the value we wont need to destructure it again so the value 
      // of name, email, comment and slug will submit the entered values.
     const commentObj = { name, email, comment, slug }
     
     // storing the data into localstorage
     // the removeItem is to remove the data from localstorage as it is set by default to save it.
     // nextjs will be window.localStorage unlike localStorage in reactjs.
     if(storeData) {
        window.localStorage.setItem('name', name);
        window.localStorage.setItem('email', email);
     } else {
        window.localStorage.removeItem('name', name);
        window.localStorage.removeItem('email', email);
     }
     //submitComment function
     submitComment(commentObj)
       .then((res) => {
        setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        })
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a Reply</h3>
      <p className="text-xs mt-1 mb-2">tell us what your opinions on the article are!</p>
      <div className="grid grid-cols-1 gap-4 mb-4">
      <textarea 
      ref={commentEl}  
      className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
      name="comment" 
      placeholder="Comment" 
      />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
      <input type="text" 
      ref={nameEl} 
      className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
      placeholder="Name" 
      name="name" 
      />
      <input type="email" 
      ref={emailEl} 
      className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
      placeholder="Email" 
      name="email" 
      />
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
            <input //storing data in localstorage to retrieve it, if user wants
            // us to remember the details of name and email. 
            ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true" 
            />
            <label className="text-xs ml-1 text-gray-500 cursor-pointer" htmlFor="storeData">
              Remember my name and email next time I comment.
             </label>
        </div>
      </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are required</p> }
      <div className="mt-8">
       <button type="button" 
       onClick={handleCommentSubmission}
       className="transition duration-500 ease hover:bg-purple-500 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
       >
         Send It!
       </button>
       {showSuccessMessage && <span className="text-xs float-right font-semibold mt-3 text-green-600">Comment Submitted for review</span> }
      </div>
     </div>
  )
}

export default CommentsForm