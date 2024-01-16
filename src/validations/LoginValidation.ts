
import * as yup from "yup";

export const userSchema = yup.object().shape({
    username:yup.string().required().email(),
    password:yup.string().min(5).max(20)
});


