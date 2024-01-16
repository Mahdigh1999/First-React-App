import AccountBox from "../navbar/AccountBox";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";
import ShoppinCartBox from "./ShoppinCartBox";
import AuthBtns from "./AuthBtns";
function MenuBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenuPosition = () => {
    setMenuIsOpen((menuIsOpen) => !menuIsOpen);
  };
  const auth = false;
  return (
    <nav className=" w-[100%] h-auto z-20 md:py-1 py-2 top-0 start-0 border-b border-gray-400 flex justify-between items-center space-x-3 px-3">
      <div className="flex space-x-2">
        {auth && <AccountBox />}
        {!auth && <AuthBtns />}
        <button onClick={handleMenuPosition} className="border border-gray-500 min-[720px]:hidden p-2 mr-48 rounded-full">
          <GiHamburgerMenu />
        </button>
      </div>
      <Menu menuIsOpen = {menuIsOpen} onClose = {handleMenuPosition} />
      <ShoppinCartBox />
    </nav>
  );
}

export default MenuBar;
