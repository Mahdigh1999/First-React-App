import Toggle from "../common/Toggle";
// import AccountBox from "./AccountBox";
import SearchBox from "../common/SearchBox";
import Logo from "../common/Logo";
function Navbar() {
  return (
    <nav className=" w-full h-auto z-20 py-2  border-b border-gray-400 flex justify-around items-center space-x-3 px-3">
      <Logo/>
      <SearchBox />
      <Toggle />
    </nav>
  );
}

export default Navbar;
