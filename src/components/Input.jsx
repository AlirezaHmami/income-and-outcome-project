import React, { useContext } from "react";
import Income from "./State/Income";
import Outcome from "./State/Outcome";
import Account from "./State/Account";
import { AppContext } from "../Context/AppContext";
function Input() {
  const {setCost,cost,setDescribe,describe,setDate,date,setType,type,addBtnHandel} = useContext(AppContext)
  return (
    <div className="bg-gray-200 rounded-lg">
      <div className="p-5 flex justify-around items-center">
        <Income />
        <Outcome />
        <Account />
      </div>
      <hr className="border-gray-300" />
      <div className="p-5 flex items-center justify-around">
        <span>
          <label className="mr-2" htmlFor="number">
            Cost:
          </label>
          <input
            type="number"
            id="number"
            className="outline-none rounded shadow-md p-2"
            value={cost}
            onChange={(e) => (e.target.value >= 0 ? setCost(e.target.value) : 0)}
          />
        </span>
        <span>
          <label className="mr-2" htmlFor="Describe">
            Describe:
          </label>
          <input
            type="text"
            id="Describe"
            className="outline-none rounded shadow-md p-2"
            value={describe}
            onChange={(e) => setDescribe(e.target.value)}
          />
        </span>
        <span>
          <label className="mr-2" htmlFor="Date">
            Date:
          </label>
          <input
            type="date"
            id="Date"
            className="outline-none rounded shadow-md p-2"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </span>
        <span>
          <label className="mr-2" htmlFor="Type">
            Type:
          </label>
          <select
            id="Type"
            name="Type"
            className="outline-none rounded shadow-md p-2"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Income">Income</option>
            <option value="Outcome">Outcome</option>
          </select>
        </span>
        <button className="bg-green-500 hover:bg-green-600 text-white hover:text-green-50 rounded-xl px-5 py-2"
        onClick={addBtnHandel}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Input;
