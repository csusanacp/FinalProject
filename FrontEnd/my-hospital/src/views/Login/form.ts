import { sha512 } from "js-sha512";
import * as yup from "yup";
import { User } from "../../models/user/types";

export interface formValues {
  username: string;
  email: string;
  password: string;
  register?: boolean;
}

export const initialValues: formValues = {
  username: "",
  email: "",
  password: "",
  register: false,
};

export const validationSchema: yup.SchemaOf<formValues> = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email().required("email is required"),
  password: yup
    .string()
    .min(4, "Write a minimun of 5 characters")
    .max(18, "Write a maximun of 18 characters")
    .required("Password is required"),
  register: yup.boolean(),
});

export const onSubmit = (
  values: formValues,
  login: (user: Partial<User>) => void,
  signin: (user: Partial<User>) => void
) => {
  const possibleUser: Partial<User> = {
    username: values.username,
    email: values.email,
    password: sha512(values.password),
  };

  if (!values.register) {
    login(possibleUser);
  } else {
    signin(possibleUser);
  }
};
