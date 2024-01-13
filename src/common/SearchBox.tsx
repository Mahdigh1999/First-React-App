import { useContext } from "react";
import { Theme } from "../App";
function SearchBox() {
  const isDark = useContext(Theme);
  const inputCommon =
    "border  w-full border-gray-300 text-xs px-3 py-2 rounded-full block";
  const inputClassName = isDark
    ? inputCommon + " text-gray-900 "
    : inputCommon + " text-gray-100 ";

  return (
    <>
      <div className="grow flex ">
        <input
          className={inputClassName}
          type="text"
          id="mainSearch"
          placeholder="Search . . ."
        />
        <label htmlFor="mainSearch"></label>
      </div>
    </>
  );
}

export default SearchBox;
