import { Theme } from "../../App";
import { useContext, useState ,  } from "react";
import Input from "../common/inputs/Input";
import CheckBoxInput from "../common/inputs/CheckBoxInput";
import RegularBtn from "../common/RegularBtn";
// import { userSchema } from "../validations/LoginValidation";

type Account<T> = {
  username: T;
  password: T;
};
function LoginForm() {
  const { isDark } = useContext(Theme);
  const [account, setAccount] = useState<Account<string>>({
    username: "",
    password: "",
  });
  // const [error , setError] = useState({username:'' , password: ''})
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const result = await  userSchema.validate(account,{abortEarly:false}).catch(e => console.log(e));

    // console.log(result);

  }
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    
    const acc: Account<string> = { ...account };
    acc[name] = value;
    // console.log(typeof name ,name);
    console.log(acc);
    setAccount(acc);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={
        isDark
          ? "bg-slate-950 mt-[100px] w-full h-[fit-content] sm:w-[500px] p-6 md:p-12 sm:p-10 rounded-lg"
          : "bg-gray-200 mt-[100px]  w-full h-[fit-content] sm:w-[500px] p-6 md:p-12 sm:p-10  rounded-lg"
      }
    >
      <Input 
      label="Your Email"
      id = "username"
      type="email"
      onChange={handleChange}
      placeholder="Email ... ?"
      value={account.username}
      className="mb-5"
      name="username"
      />
      <Input 
      label="Your Password"
      id = "password"
      type="password"
      onChange={handleChange}
      placeholder="Password ... ?"
      value={account.password}
      className="mb-5"
      name="password"
      />

      <CheckBoxInput label="Remember Me" />
      <RegularBtn >Submit</RegularBtn>
    </form>
  );
}

export default LoginForm;
