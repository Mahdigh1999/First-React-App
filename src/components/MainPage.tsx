import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import Multidimensional from "./Multidimensional";
import Posts from "./Posts";
import Footer from "./Footer";
import GameMusices from "./GameMusices";
function MainPage() {
  return (
    <>
      <Header />
      <div className="relative min-[1400px]:w-[1400px] w-full mx-auto my-2   rounded-lg ">
        
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/2D-3DGames/*" element = {<Multidimensional/>}/>
        <Route path="/Game-Musics" element = {<GameMusices />}/>
        <Route path="/companies" element = {<Companies/>}/>
        <Route path="/posts" element = {<Posts />}/>
        <Route path="/contact-us" element = {<h1>Contact Us</h1>}/>

      </Routes>
      
      </div>
      <div className="relative min-[1400px]:w-[1400px] w-full mx-auto my-2  rounded-lg ">
      <Footer/>
      </div>
    </>
  );
}

export default MainPage;
