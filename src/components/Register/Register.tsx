import { Theme } from "../../App";
import { useContext, useState } from "react";
import Input from "../common/inputs/Input";
import CheckBoxInput from "../common/inputs/CheckBoxInput";
import RegularBtn from "../common/RegularBtn";
import { userSchema } from "../../validations/RgisterValidation";
import { transformYupErrorsIntoObject } from "../../utils/transformYupErrorsIntoObject";

type Account<T> = {
  firstName: T;
  lastName: T;
  username: T;
  password: T;
  email:T
  confirmPassword: T;
};

function Register() {
  const { isDark } = useContext(Theme);
  const [account, setAccount] = useState<Account<string>>({
    firstName: "",
    lastName: "",
    email:"",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<Record<string, string>>({});
  const [acceptPolicy , setAcceptPlocy] = useState<boolean>(false);
  const handleAcceptPolicy = () => {
    setAcceptPlocy(prev => !prev)
  }

  const validate = async () => {
    try {
      const result = await userSchema.validate(account, { abortEarly: false });
      console.log(result);
    } catch (err: any) {
      const validationErrors = transformYupErrorsIntoObject(err);
      setError(validationErrors);
    }
    return await userSchema.isValid(account);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate();
    const result = validate();
    if (!result) {
      console.log("No Registered");
      return;
    }
    console.log("Registered");

    // console.log(result);
  };
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    const acc: Account<string> = { ...account };
    if (
      name == "username" ||
      name == "email" ||
      name == "firstName" ||
      name == "lastName" ||
      name == "password" ||
      name == "confirmPassword"
    )
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
        label="First Name"
        id="firstName"
        type="text"
        onChange={handleChange}
        placeholder="First Name ... ?"
        value={account.firstName}
        className="mb-5 w-[48%] float-left"
        name="firstName"
        error={error.firstName}
      />
      <Input
        label="Last Name"
        id="lastName"
        type="text"
        onChange={handleChange}
        placeholder="Lasr Name ... ?"
        value={account.lastName}
        className="mb-5  w-[48%] float-right "
        name="lastName"
        error={error.lastName}
      />
      <Input
        label="Your Email"
        id="email"
        type="text"
        onChange={handleChange}
        placeholder="Email ... ?"
        value={account.email}
        className="mb-5 clear-both"
        name="email"
        error={error.email}
      />
      <Input
        label="Your Username"
        id="username"
        type="text"
        onChange={handleChange}
        placeholder="Username ... ?"
        value={account.username}
        className="mb-5 clear-both"
        name="username"
        error={error.username}
      />
      <Input
        label="Your Password"
        id="password"
        type="password"
        onChange={handleChange}
        placeholder="Password ... ?"
        value={account.password}
        className="mb-5"
        name="password"
        error={error.password}
      />
      <Input
        label="Confirm Your Password"
        id="confirmPassword"
        type="password"
        onChange={handleChange}
        placeholder="Confirm Password ... ?"
        value={account.confirmPassword}
        className="mb-5"
        name="confirmPassword"
        error={error.confirmPassword}
      />

      <CheckBoxInput checked = {acceptPolicy} setChecked = {handleAcceptPolicy} label="Accepr Policy" />
      <RegularBtn disable={!acceptPolicy}>Register</RegularBtn>
    </form>
  );
}

export default Register;
