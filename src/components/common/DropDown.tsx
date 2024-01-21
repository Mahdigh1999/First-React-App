import { useState } from "react";
import { useOutSideClick } from "../../utils/onClickOueside";
import { useTheme } from "../../App";
type Props = {
  label: string;
  lst: string[];
  onSelect: (value: string) => void;
};
const DropDown = ({ label, lst, onSelect }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
    const {isDark} = useTheme();
  const ref = useOutSideClick(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  });
  const handleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div ref={ref} className="relative w-[fit-content] ">
      <button
        onClick={handleOpen}
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className="text-white bg-blue-700 hover:bg-blue-800 h-[fit-content] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center "
        type="button"
      >
        {" " + label + " "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdownDivider"

          className={
            (isDark ? " bg-slate-900 " : " bg-gray-200 ") +
            "absolute top-[110%] z-10  divide-y divide-gray-100 rounded-lg shadow w-40 "
          }
        >
          <ul
            className="py-2 text-sm "
            aria-labelledby="dropdownDividerButton"
          >
            {lst.map((item) => (
              <li onClick={() => onSelect(item)} key={item}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-400 ">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
