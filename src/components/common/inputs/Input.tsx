import { useTheme } from "../../../App";
type InputProps = {
  className?: string;
  label: string;
  type: string;
  placeholder: string;
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

function Input({
  className,
  label,
  type,
  placeholder,
  name,
  id,
  value,
  onChange,
  error,
}: InputProps) {
  const { isDark } = useTheme();
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
      {error && (
        <p
          className={
            (isDark ? " text-yellow-500 " : " text-red-800 ") +
            " p-1 mt-1 text-sm  rounded-lg "
          }
        >
          {error}
        </p>
      )}
    </div>
  );
}
{
  /* <div class=" dark:bg-gray-800 dark:text-yellow-300" role="alert">
  <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
</div> */
}
export default Input;
