import * as yup from "yup";
// import Joi from "joi";

export const userSchema = yup.object({
    username:yup.string().required("Username Box is Empty :( ").email("This is should be an email type"),
    password:yup.string().min(5, "More than 5 character need ").max(20 ,"Less than 20 character need" )
});
// const userSchema2 = Joi.object().keys({
//     username:Joi.string().email({tlds:{allow:true}}).required(),
//     password:Joi.string().required()
// });
// export function returnUserScema() {
//     return userSchema2;
// }

