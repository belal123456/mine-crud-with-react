import React from "react";

export default function Errorhandle({ title, para, errorHndle }) {
  return (
    <div onClick={errorHndle}>
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="bg-black bg-opacity-70 text-white flex flex-col items-center justify-center w-1/2 h-1/2 ">
          <h2 className="text-center text-2xl   text-red-500  ">{title}</h2>
          <p className="text-red-600 text-4xl">{para}</p>
          <button
            className="text-red-400  mt-5 items-center  align-middle text-2xl  text-center "
            onClick={errorHndle}
          >
            ok
          </button>
        </div>
      </div>
    </div>
  );
}
