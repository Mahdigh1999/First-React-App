import { NavLink } from "react-router-dom";
import { Theme } from "../../App";
import { useContext } from "react";
import { GoArrowLeft } from "react-icons/go";

type Props = {
  menuIsOpen:boolean;
  onClose:() => void;
}



function Menu({menuIsOpen , onClose}:Props) {
  const { isDark } = useContext(Theme);


  const isActiveClassCommon =
    "relative text-xs  xl:text-lg lg:text-sm py-2 w-full font-mono before:rounded-lg before:bottom-0 before:left:0 before:border-2 before:transition-all before:delay-900  before:absolute before:content(' ')";
  const mobileStylesMenuHolderCommonPart = !menuIsOpen
    ? "left-[-500%] " +
      " top-0 fixed min-[720px]:sticky rounded-lg border py-2 min-[720px]:w-[fit-content] w-full h-auto transition-[left] delay-900"
    : "left-[-12px] " +
      "top-0 fixed min-[720px]:sticky rounded-lg border py-2 min-[720px]:w-[fit-content] w-full h-auto  transition-[left] delay-900";

  const mobileStylesMenuHolder = isDark
    ? mobileStylesMenuHolderCommonPart +
      " bg-slate-950 min-[720px]:border-none  border-gray-600"
    : mobileStylesMenuHolderCommonPart +
      " bg-gray-100 min-[720px]:border-none  border-gray-300";
  const mobileStylesNavlinks =
    "min-[720px]:inline block min-[720px]:text-left text-center";


  const renderNavlink = (child: string, to: string) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? mobileStylesNavlinks +
              "    min-[720px]:mx-1 md:mx-2 py-[2px] px-2 border-2 border-gray-500 h-auto rounded-lg border-dashed "
            : mobileStylesNavlinks +
              "    min-[720px]:mx-1 md:mx-2 py-[2px] px-2 border-2 border-transparent"
        }
      >
        {({ isActive }) => {
          return (
            <span
              className={
                isActive
                  ? isActiveClassCommon +
                    " before:border-lime-700 before:w-full  "
                  : isActiveClassCommon +
                    " before:border-transparent before:w-2  "
              }
            >
              {child}
            </span>
          );
        }}
      </NavLink>
    );
  };
  return (
    <div className={mobileStylesMenuHolder}>
      <div
        onClick={onClose}
        className="w-[fit-content] cursor-pointer my-2 mx-auto min-[720px]:hidden"
      >
        <GoArrowLeft />
      </div>
      {renderNavlink("Home", "/")}
      {renderNavlink("2D-3D Games", "/2D-3DGames")}
      {renderNavlink("Popular Games", "/popular")}
      {renderNavlink("Companies", "/companies")}
      {renderNavlink("Posts", "/posts")}
      {renderNavlink("Contact Us", "/contact-us")}
    </div>
  );
}

export default Menu;
