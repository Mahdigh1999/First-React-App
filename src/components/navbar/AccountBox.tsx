function AccountBox() {
  return (
    <>
      <div
        id="accountInfo"
        className="h-full rounded-full flex items-center cursor-pointer shadow-md shadow-blue-500/40 select-none"
      >
        <div className=" w-8 h-8 rounded-full border border-gray-500"></div>
        <span className="px-1 md:me-2 text-xs min-[400px]:block md:w-24 w-8 h-4 overflow-hidden me-1 hidden">
          Mahdi Ghaffari
        </span>
      </div>
    </>
  );
}

export default AccountBox;
