import React from 'react'

type Props = {
    className?:string
    checked?:boolean;
    setChecked?:() => void;
    label:string
}
function CheckBoxInput({label ,className, checked , setChecked}:Props) {

    return (
        <div className={className? className : " flex  items-center mb-5 "}>

          <input
            onInput={setChecked}
            checked = {checked}
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "

          />

        <label htmlFor="remember" className="select-none ms-2 text-sm font-medium ">
          {label}
        </label>
      </div>
    );
}

export default CheckBoxInput;