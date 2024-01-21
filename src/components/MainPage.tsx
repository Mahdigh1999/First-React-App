import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import Multidimensional from "./Multidimensional";
import Posts from "./Posts";
import Footer from "./Footer";
function MainPage() {
  return (
    <>
      <Header />
      <div className="relative min-[1400px]:w-[1400px] w-full mx-auto my-2   rounded-lg ">
        
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/2D-3DGames/*" element = {<Multidimensional/>}/>
        <Route path="/popular" element = {<h1>Popular Games</h1>}/>
        <Route path="/companies" element = {<Companies/>}/>
        <Route path="/posts" element = {<Posts />}/>
        <Route path="/contact-us" element = {<h1>Contact Us</h1>}/>

      </Routes>
      <Footer/>
      </div>
    </>
  );
}

export default MainPage;
