import React from "react";
import { useSearch, useTheme } from "../../App";
function SearchBox() {
  // const [searchValue , setSearchValue] = useState<string>("");
  const { seacrhValue, handleSearchChange } = useSearch();
  const { isDark } = useTheme();
  const inputCommon =
    "border  w-full border-gray-300 text-xs px-3 py-2 rounded-full block";
  const inputClassName = isDark
    ? inputCommon + " text-gray-900 "
    : inputCommon + " text-blue-700 ";
  // const handleSearch = (event:React.ChangeEvent<HTMLInputElement> ) =>{

  //   setSearchValue(event.target.value)

  // }
  return (
    <>
      <div className="grow flex ">
        <input
          value={seacrhValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSearchChange(e)
          }
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
