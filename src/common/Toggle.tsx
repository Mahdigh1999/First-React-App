import { useContext } from "react";
import { Theme } from "../App";

function Toggle() {
  const {isDark , handleDarkMood} = useContext(Theme);
  const toggleCommon  = "w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-4 peer-focus:ring-green-300  peer-checked:after:translate-x-full   after:content-[''] after:absolute after:top-[9%] after:start-[2px]  after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-600"
  const toggleTrumbColor  = isDark ? toggleCommon + " after:bg-slate-950 peer-checked:after:border-slate-900 after:border-slate-900" : toggleCommon + " after:bg-white " ;
  return (
    <>
      <label className="relative inline-flex items-center me-5 cursor-pointer">
        <input
          onInput={handleDarkMood}
          type="checkbox"
          value=""
          className="sr-only peer"
        />
        <div className={toggleTrumbColor}></div>
        <span className="ms-3 text-sm font-medium select-none">
          {isDark ? "Dark" : "Light"}
        </span>
      </label>
    </>
  );
}

export default Toggle;
