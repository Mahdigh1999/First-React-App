import AccountBox from "../navbar/AccountBox";
import Menu from "./Menu";
import ShoppinCartBox from "./ShoppinCartBox";
function MenuBar() {

  return (
    <nav className=" w-[100%] h-auto z-20 py-2 top-0 start-0 border-b border-gray-400 flex justify-between items-center space-x-3 px-3">
      <AccountBox />
      <Menu />
      <ShoppinCartBox />
    </nav>
  );
}

export default MenuBar;
