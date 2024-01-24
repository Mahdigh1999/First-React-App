import { Theme } from "../../App";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSchema } from "../../validations/LoginValidation";
import { transformYupErrorsIntoObject } from "../../utils/transformYupErrorsIntoObject";
import Input from "../common/inputs/Input";
import CheckBoxInput from "../common/inputs/CheckBoxInput";
import RegularBtn from "../common/RegularBtn";
import auth from "../../services/authService";

type Account<T> = {
  username: T;
  password: T;
};

function LoginForm() {
  const navigate = useNavigate();

  const { isDark } = useContext(Theme);
  const [account, setAccount] = useState<Account<string>>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<Record<string, string>>({});

  // console.log(userSchema2)
  // const [error , setError] = useState({username:'' , password: ''})

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
    const isValid = await validate();
    console.log(isValid);
    if (!isValid) {
      console.log("not sumit");
      return;
    }
    try {
      console.log("Submited");
      await auth.login(account.username, account.password)

      window.location.replace('/');
    } catch (ex: any) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...error };

        for (let i in errors) {
          i = " ";
        }
        console.log(errors);
        errors.username = ex.response.data.message;
        setError(errors);
      }
    }
    // userSchema
    //   .validate(account ,{abortEarly:false})
    //   .then(val => console.log(val))
    //   .catch(err =>

    //     console.log(err.errors)
    //   )
  };
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    const acc: Account<string> = { ...account };
    if (name == "username" || name == "password") acc[name] = value;
    // console.log(typeof name ,name);
    // console.log(acc);
    setAccount(acc);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={
          isDark
            ? "block bg-slate-950 mt-[100px] w-full h-[fit-content] sm:w-[500px] p-6 md:p-12 sm:p-10 rounded-lg"
            : "block bg-gray-200 mt-[100px]  w-full h-[fit-content] sm:w-[500px] p-6 md:p-12 sm:p-10  rounded-lg"
        }
      >
        <div className="w-[fit-content] mx-auto ">
          <div>username: lgronaverp</div>
          <div> password: 4a1dAKDv9KB9</div>
        </div>
        <Input
          label="Your Username"
          id="username"
          type="text"
          onChange={handleChange}
          placeholder="Email ... ?"
          value={account.username}
          className="mb-5"
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

        <CheckBoxInput label="Remember Me" />
        <RegularBtn>Submit</RegularBtn>
      </form>
    </>
  );
}

export default LoginForm;
