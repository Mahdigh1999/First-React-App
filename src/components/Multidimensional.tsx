import { Navigate, Route, Routes } from "react-router-dom";
import Breadcrumb2D3D from "./Breadcrumb2D3D";
import Dimention2D from "./Dimention2D";
import Dimention3D from "./Dimention3D";
import { useState } from "react";
// import { useEffect, useState } from "react";
const Multidimensional = () => {
  const [choosed , setChoosed] = useState(false)
  const  handleChoose = () => {
    setChoosed(true)
  }
  return (
    <div>
      <Breadcrumb2D3D />
      <div className="">
        <Routes>

            <Route path="/2D" element={<Dimention2D open = {handleChoose}/>} />
            <Route path="/3D" element={<Dimention3D open = {handleChoose}/>} />
           
        </Routes> 
            {!choosed &&  <Navigate to='2D'/>}
      </div>

    </div>
  );
};
export default Multidimensional;
