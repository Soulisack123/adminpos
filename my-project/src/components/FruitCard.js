import React from "react";

const FruitCard = ({ name, price, weight }) => {
  return (
    <div className="w-[200px] bg-gray-50 rounded-md text-center shadow-md">
      <h1>ຊື່: {name}</h1>
      <p>ລາຄາ: {price}</p>
      <p>ນ້ຳໜັກ: {weight}</p>
    </div>
  );
};
export default FruitCard;
