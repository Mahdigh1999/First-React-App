import * as Yup from "yup";

const RegExp = /[A-Z a-z]+[A-Z a-z 0-9]*\W+[A-Z a-z 0-9 \W]/;

export const userSchema = Yup.object({
  firstName: Yup.string()
    .max(12, "Most less than 12 char")
    .min(3, "Most more than 3 char")
    .required("Name box is Empty"),
  lastName: Yup.string()
    .max(12, "Most less than 12 char")
    .min(3, "Most more than 3 char")
    .required("Name box is Empty"),
  username: Yup.string()
    .email("It isn't Email type")
    .required("Email Box is Empty"),
  password: Yup.string()
    .matches(
      RegExp,
      "Password should start a char and have  at least a special char "
    )
    .required("Password Box is Empty"),
  confirmPassword: Yup.string()
    .matches(
      RegExp,
      "Password should start a char and have  at least a special char "
    )
    .required("Password Box is Empty"),
});
