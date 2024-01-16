type BtnProps = {
    type?: "submit" | "reset" | "button" | undefined
    className?:string
    children:string
}

function RegularBtn({type , className , children}:BtnProps) {
  return (
    <>
      <button
        type ={type ? type : "submit"}
        className={className ? className :  "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center "}
      >
        {children}
      </button>
    </>
  );
}

export default RegularBtn;
