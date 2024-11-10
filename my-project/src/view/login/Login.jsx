import React from "react";

const Login = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[800px] h-[500px] bg-gray-200 flex justify-center">
        <div className="w-[800px] h-[150px] bg-orange-500 flex justify-center p-[10px]">
          <div className="w-[100px] h-[80px] bg-gray-300  ">
            <img src="/img/login.jpeg" alt="Logo" />
            <div className=" h-[30px] bg-white">
              <h2 className="text-center	">ຂາໄກ່ເຈ້ຕຸ້ຍ</h2>
              <div className="h-[50px] bg-gray-50 p-[50px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black"></div>
    </div>
  );
};

export default Login;
