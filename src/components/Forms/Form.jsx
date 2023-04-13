import { useState } from "react";
import validate from "./validation";
import style from "./Form.module.css";

import LoginImage from  '../../assets/rick-and-morty.png'

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <section className={style.formSection}>
      <form className={style.form} onSubmit={handleSubmit}>

          <img src={LoginImage} alt="" className={style.FormImage}/>

        <div className={style.inputBlock}>
          <label htmlFor="login-email">E-mail</label>
          <input name='email' id="login-email" type="email" required value={userData.email} onChange={handleChange}/>
          <p>{errors.email}</p>
        </div>

        <div className={style.inputBlock}>
          <label htmlFor="login-password">Password</label>
          <input name='password' id="login-password" type="password" required value={userData.password} onChange={handleChange}/>
          <p>{errors.password}</p>
        </div>

        <button type="submit" className={style.btnLogin}>
          Login
        </button>
      </form>
    </section>
  );
};

export default Form;
