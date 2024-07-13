import React from "react";

export default function TableData({ youData }) {
  // let userInputData = props.youData;
  // console.log(userInputData);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex flex-col mt-5 ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              user name
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              age
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {youData.map((item) => (
            <tr
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              key={Math.random()}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center "
              >
                {item.NameUser}
              </th>
              <td className="px-6 py-4 text-center">{item.ageUser}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
