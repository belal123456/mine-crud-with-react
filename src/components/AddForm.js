import React, { useState } from "react";
import TableData from "./TableData";
import Errorhandle from "./Errorhandle";

export default function AddForm(props) {
  const [userInf, SetuserInf] = useState([]);

  const [userData, setuserData] = useState({
    userName: "",
    userAge: "",
  });
  const handleUserName = (event) => {
    setuserData((prevSate) => {
      return {
        ...prevSate,
        userName: event.target.value,
      };
    });
  };
  const handleUserAge = (event) => {
    setuserData((prevSate) => {
      return {
        ...prevSate,
        userAge: event.target.value,
      };
    });
  };
  const [error, setError] = useState();

  const handleSumbit = (event) => {
    event.preventDefault();
    if (
      userData.userName.trim().length === 0 ||
      userData.userAge.trim().length === 0
    ) {
      setError({ title: "invalid title", para: "entre your name " });
      return;
    }
    if (+userData.userAge < 1) {
      setError({
        title: "there is problem with your age , entre correct age  ",
        para: "entre correct age ",
      });
      return;
    }
    const expensData = {
      NameUser: userData.userName,
      ageUser: userData.userAge,
    };
    SetuserInf((prev) => [...prev, expensData]);

    setuserData({
      userName: "",
      userAge: "",
    });
  };
  console.log(userInf);
  const myErrorHndler = () => {
    setError(null);
  };

  return (
    <div className="flex flex-col bg-zinc-800 bg-opacity-50">
      {error && (
        <Errorhandle
          title={error.title}
          para={error.para}
          errorHndle={myErrorHndler}
        />
      )}
      <form onSubmit={handleSumbit} className="mx-auto pt-2 mt-1">
        <div className="mb-6 ">
          <label
            htmlFor="userName"
            className="block mb-2 font-large text-slate-200 text-2xl"
          >
            user Name
          </label>
          <input
            type="text"
            id="userName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="entre your user name"
            value={userData.userName}
            onChange={handleUserName}
          />
        </div>
        <div className="mx-auto">
          <label
            htmlFor="age"
            className="block mb-2 font-large text-slate-200 text-2xl"
          >
            {" "}
            entre your age
          </label>
          <input
            type="text"
            id="age"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={handleUserAge}
            value={userData.userAge}
          />
        </div>
        <button
          type="submit"
          className="text-white mt-5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slat-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
        >
          add user
        </button>
      </form>
      <TableData youData={userInf} />
    </div>
  );
}
