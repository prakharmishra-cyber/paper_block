import React, { useState, useRef } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { storage } from "../services/firebase.js";
import { ref, uploadBytes } from "firebase/storage";

const QuestionPoster = () => {
  const InputRef = useRef();
  const [isLoading, SetIsLoading] = useState(false);

  const [details, setDetails] = useState({
    name: "",
    trade: "",
    regno: "",
    year: "",
    teacherName: "",
    subjectName: "",
    subjectCode: "",
    pdffile: null,
  });

  const [url, setUrl] = useState("");

  const genRand = (len) => {
    return Math.random()
      .toString(36)
      .substring(2, len + 2);
  };

  const onChangee = (e) => {
    const files = e.target.files;
    console.log(files[0]);
    files.length > 0 && setUrl(URL.createObjectURL(files[0]));
    setDetails({
      ...details,
      pdffile: files[0],
    });
  };

  const handleChange = (event, field) => {
    setDetails({
      ...details,
      [field]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var temp = genRand(8);

    SetIsLoading(true);

    fetch("http://localhost:5000/papers", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        mode: "cors",
      },
      body: JSON.stringify({
        ...details,
        fileName: temp,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    uploadBytes(ref(storage, temp), details.pdffile).then((snapshot) => {
      alert('File Uploaded Successfully');
      SetIsLoading(false);
    });

    setDetails({
      name: "",
      trade: "",
      regno: "",
      year: "",
      teacherName: "",
      subjectName: "",
      subjectCode: "",
      pdffile: null,
    });

    InputRef.current.value = "";
    console.log(details);
  };

  return (
    <div className="m-3 font-mono p-4 border-2 border-gray-100 border-solid flex lg:flex-row flex-col">
      <form className="flex font-mono flex-col space-y-3 m-auto md:w-3/5 shadow-xl rounded-md p-3">
        <div className="text-3xl font-semibold  font-mono text-center text-indigo-600">
          Post a paper
        </div>
        <hr />
        <div className=" relative ">
          <label htmlFor="name-with-label" className="text-indigo-600">
            Name
          </label>
          <input
            type="text"
            id="name-with-label"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="Name"
            placeholder="Your name"
            onChange={(event) => handleChange(event, "name")}
            value={details.name}
          />
        </div>

        <div className=" relative ">
          <label htmlFor="name-with-label" className="text-indigo-600">
            Trade
          </label>
          <input
            type="text"
            id="name-with-label"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="Trade"
            placeholder="Your Trade"
            onChange={(event) => handleChange(event, "trade")}
            value={details.trade}
          />
        </div>

        <div className=" relative ">
          <label htmlFor="name-with-label" className="text-indigo-600">
            RegnNo.
          </label>
          <input
            type="text"
            id="name-with-label"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="RegnNo."
            placeholder="Your Registration Number"
            onChange={(event) => handleChange(event, "regno")}
            value={details.regno}
          />
        </div>

        <div className=" relative ">
          <label htmlFor="name-with-label" className="text-indigo-600">
            Paper Year
          </label>
          <input
            type="text"
            id="name-with-label"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="Paper Year"
            placeholder="Paper Year"
            onChange={(event) => handleChange(event, "year")}
            value={details.year}
          />
        </div>

        <div className=" relative ">
          <label htmlFor="name-with-label" className="text-indigo-600">
            Teacher Name
          </label>
          <input
            type="text"
            id="name-with-label"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="Teacher Name"
            placeholder="Teacher Name"
            onChange={(event) => handleChange(event, "teacherName")}
            value={details.teacherName}
          />
        </div>

        <div className=" relative ">
          <label htmlFor="name-with-label" className="text-indigo-600">
            Subject Name (As in Paper for better reach)
          </label>
          <input
            type="text"
            id="name-with-label"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="Subject Name"
            placeholder="Subject Name"
            onChange={(event) => handleChange(event, "subjectName")}
            value={details.subjectName}
          />
        </div>

        <div className=" relative ">
          <label htmlFor="name-with-label" className="text-indigo-600">
            Subject Code
          </label>
          <input
            type="text"
            id="name-with-label"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="Subject Code"
            placeholder="Subject Code"
            onChange={(event) => handleChange(event, "subjectCode")}
            value={details.subjectCode}
          />
        </div>

        <div className=" relative ">
          <label htmlFor="name-with-label" className="text-indigo-600">
            Upload Question Paper (PDF/ JPEG only)
          </label>
          <input
            type="file"
            id="name-with-label"
            onChange={onChangee}
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="upload"
            placeholder="Upload Paper"
            ref={InputRef}
            required
          />
        </div>

        {isLoading ? (
          <>
            <button
              type="button"
              className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2 animate-spin"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
              </svg>
              loading
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleSubmit}
              type="submit"
              className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Submit
            </button>
          </>
        )}
      </form>

      <div className="p-3 m-3 text-2xl rounded-lg shadow-lg w-full text-semibold text-indigo-600 border-2 border-indigo-300 border-solid">
        <div style={{ height: "750px" }}>
          {url ? (
            <div
              style={{
                border: "1px solid rgba(0, 0, 0, 0.3)",
                height: "100%",
              }}
            >
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
                <Viewer fileUrl={url} />
              </Worker>
            </div>
          ) : (
            <div
              style={{
                alignItems: "center",
                border: "2px dashed rgba(0, 0, 0, .3)",
                display: "flex",
                fontSize: "2rem",
                height: "100%",
                justifyContent: "center",
                width: "100%",
              }}
            >
              Preview area
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionPoster;
