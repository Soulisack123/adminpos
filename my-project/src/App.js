import { useState } from "react";
import "./App.css";
import RouterPath from "./router/rou";
function App() {
  // const [bgcolor, setBgColor] = useState("#000000");

  // const [number, setNumber] = useState(0);  // Corrected syntax

  // function add() {
  //   setNumber(number + 1);
  // }
  // function del()
  // {
  //   setNumber(number - 1);
  // }

  return (
    <RouterPath />

    // <div>
    //   <div className="flex justify-self-center text-center pt-[50px]">
    //     <div className="w-[400px] border-2 border-black">
    //       <h3>Number: {number} </h3>
    //     </div>
    //   </div>
    //   <div className="flex justify-self-center pt-[3px] text-center">
    //     <div className="w-[133px] border-2 border-black">
    //       <button onClick={del}>ລົບຄ່າ</button>
    //     </div>
    //     <div className="w-[133px] border-2 border-black">
    //     <button onClick={() => setNumber(0)}>reset</button>
    //     </div>
    //     <div className="w-[133px] border-2 border-black">
    //       <button onClick={add}>ເພີ່ມຄ່າ</button>
    //     </div>
    //   </div>
    // </div>
    // <div>
    // <div className='flex justify-center'>
    // <div className='w-[150px] border-2 border-black flex justify-center' >
    //     Color Picker
    // </div>
    // </div>
    // <div className='flex justify-center pt-[10px] '>
    // <div className='w-[100px] border-2 rounded-[50%] h-[100px] bg-[#f11d1d]'  onClick={() => setBgColor("#f11d1d")}>

    // </div>
    // <div className='w-[100px] border-2 rounded-[50%] h-[100px] bg-[#22c55e]' onClick={() => setBgColor("#22c55e")}></div>
    // <div className='w-[100px] border-2 rounded-[50%] h-[100px] bg-[#1c33ff]' onClick={() => setBgColor("#1c33ff")}> </div>
    // </div>
    // <div className='flex justify-center w-[500px] h-[350px] bg-black ml-[250px] pt-[20px]' style={{backgroundColor:bgcolor}}>
    // </div>
    // </div>
  );
}
export default App;
