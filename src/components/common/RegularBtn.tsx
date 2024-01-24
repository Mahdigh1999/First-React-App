type BtnProps = {
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  disable?: boolean;
  children: string;
};

function RegularBtn({ type, className, children, disable }: BtnProps) {
  return (
    <>
      <button
        disabled={disable ? disable : false}
        type={type ? type : "submit"}
        className={
          (disable ? " cursor-not-allowed " : "") +
          (className
            ? className
            : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center ")
        }
      >
        {children}
      </button>
    </>
  );
}

export default RegularBtn;
