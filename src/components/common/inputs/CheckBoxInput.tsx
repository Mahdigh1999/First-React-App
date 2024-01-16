type Props = {
    className?:string
    label:string
}
function CheckBoxInput({label}:Props) {
    return (
        <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "

          />
        </div>
        <label htmlFor="remember" className="select-none ms-2 text-sm font-medium ">
          {label}
        </label>
      </div>
    );
}

export default CheckBoxInput;