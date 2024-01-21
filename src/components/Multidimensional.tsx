import { Route, Routes } from "react-router-dom";
import Breadcrumb2D3D from "./Breadcrumb2D3D";
import Dimention2D from "./Dimention2D";
import Dimention3D from "./Dimention3D";
// import { useEffect, useState } from "react";
const Multidimensional = () => {

  return (
    <div>
      <Breadcrumb2D3D />
      <div className="">
        <Routes>

            <Route path="/2D" element={<Dimention2D/>} />
            <Route path="/3D" element={<Dimention3D/>} />
           
        </Routes> 
        
      </div>
    </div>
  );
};
export default Multidimensional;
