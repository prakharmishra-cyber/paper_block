import React from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../services/firebase.js";

const Result = ({ details, l }) => {

  const handleDownload = () => {
    getDownloadURL(ref(storage, details.FileName))
      .then((url) => {
       
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if(newWindow) newWindow.opener=null;

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="m-2 p-2 flex flex-col shadow-md font-mono rounded-md border-2 border-indigo-600 border-solid">

      <div className="flex justify-start flex-col md:flex-row space-x-3">
        <div className="mt-1 ml-3">
          <span className="text-indigo-600">Subject Name:</span>{" "}
          {details.SubjectName + " /"}
        </div>

        <div className="mt-1 ml-3">
          <span className="text-indigo-600">Subject Code:</span>{" "}
          {details.SubjectCode + " /"}
        </div>

        <div className="mt-1 ml-3">
          <span className="text-indigo-600">Trade:</span> {details.Trade + " /"}
        </div>

        <div className="mt-1 ml-3">
          <span className="text-indigo-600">Year:</span> {details.Year}
        </div>
      </div>

      <div className="mt-1 ml-3">
        <button
          type="button"
          onClick={handleDownload}
          className="py-2 px-4 flex justify-center items-center w-48 bg-indigo-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            width={20}
            height={20}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
            />
          </svg>
          Download
        </button>
      </div>
    </div>
  );
};

export default Result;
