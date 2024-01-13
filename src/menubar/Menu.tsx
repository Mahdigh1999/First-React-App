import { NavLink } from "react-router-dom";
function Menu() {
  const isActiveClassCommon =
    "relative text-xs  xl:text-lg lg:text-sm py-2 w-full font-mono before:rounded-lg before:bottom-0 before:left:0 before:border-2 before:transition-all before:absolute before:content(' ')";
  const renderNavlink = (child: string, to: string) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "mx-1 md:mx-2 py-[2px] px-2 border-2 border-gray-500 h-auto rounded-lg border-dashed "
            : "mx-1 md:mx-2 py-[2px] px-2 border-2 border-transparent"
        }
      >
        {({ isActive }) => {
          return (
            <span
              className={
                isActive
                  ? isActiveClassCommon +
                    " before:border-lime-700 before:w-full "
                  : isActiveClassCommon +
                    " before:border-transparent before:w-2 "
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
    <div className=" ">
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
