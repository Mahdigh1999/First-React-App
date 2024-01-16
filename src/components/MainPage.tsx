import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
function MainPage() {
  return (
    <>
      <Header />
      <div className="relative min-[1400px]:w-[1400px] w-full mx-auto my-2  flex rounded-lg overflow-hidden">
        
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/2D-3DGames" element = {<h1>2D-3D Games</h1>}/>
        <Route path="/popular" element = {<h1>Popular Games</h1>}/>
        <Route path="/companies" element = {<h1>Companies</h1>}/>
        <Route path="/posts" element = {<h1>Posts</h1>}/>
        <Route path="/contact-us" element = {<h1>Contact Us</h1>}/>

      </Routes>
      </div>
    </>
  );
}

export default MainPage;
