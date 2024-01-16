
type InputProps = {
    className?:string;
    label : string;
    type:string;
    placeholder:string;
    name:string;
    id:string;
    value:string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>) => void
}


function Input({className , label , type , placeholder , name , id , value , onChange}:InputProps) {
  return (
    <div className={className ? className : "mb-5"}>
      <label htmlFor={id} className="block mb-2 text-sm font-medium ">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        // required
      />
    </div>
  );
}

export default Input;
