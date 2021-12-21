import { FC } from "react";
import "./style.css";
import Input from "../../components/input/component"
import { useFormik } from "formik";
import { initialValues, onSubmit, validationSchema } from "./form";
import { useShowError } from "../../utils/ui/stringError";
import { useDispatch } from "react-redux";
import { loginRequested, signinRequested } from "../../redux/user/actions";
import { User } from "../../models/user/types";
import { Link } from "react-router-dom";

const Login: FC = () => {
  const dispatch = useDispatch();

  const passUser = (user: Partial<User>) => {
    dispatch(loginRequested(user));
  };

  const signUser = (user: Partial<User>) => {
    dispatch(signinRequested(user));
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => onSubmit(values, passUser, signUser),
    validationSchema,
  });

  const errors = useShowError(formik.touched, formik.errors);
  return (
    <div className="login-container">
      <div className="login-form">
        <p className="title-login"> Log in </p>
        <div className= "areyounew-label">
          <label >
            Are you new around here?
            <input
                type="checkbox"
                name="register"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.register}
              />
          </label>
        </div>
        <Input
          name="username"
          className="login-inputs"
          placeholder="Username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          ErrorComponent={errors("username")}
          
        />
        <Input
          name="email"
          className="login-inputs"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          ErrorComponent={errors("email")}
         
        />
        <Input
          name="password"
          className="login-inputs"
          placeholder="Password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          ErrorComponent={errors("password")}
          
        />
        <button 
          className="login-clickable">
          <Link to = "/equipment" className= "link"> Login</Link>
        </button>
      </div>
    </div>
  );
};
export default Login;
