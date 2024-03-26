import React from "react";

function Cart({ item }) {
  return (
    <div className="bg-white p-5 rounded shadow-md flex justify-between">
      <div className="space-y-1">
        <h1 className="text-xl font-bold">
          {item.type}&nbsp;
          {item.type === "Income" ? (
            <span className="text-green-500 font-semibold">↗</span>
          ) : (
            <span className="text-red-500 font-semibold">↘</span>
          )}
        </h1>
        <p className="text-gray-500">{item.describe}</p>
        <p>{item.date}</p>
      </div>
      <div className="font-bold text-3xl text-gray-600">
        <p>
          {item.type === "Income" ? (
            <span className="text-green-500 font-semibold">+</span>
          ) : (
            <span className="text-red-500 font-semibold">-</span>
          )}
          &nbsp;{item.cost}$
        </p>
      </div>
    </div>
  );
}

export default Cart;
