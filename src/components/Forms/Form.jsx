import { useState } from "react";
import validate from "./validation";
import style from "./Form.module.css";

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
    // <form onSubmit={handleSubmit} className={style.login}>
    //   <div className={style.cardForm}>
    //     <label htmlFor="email">Email:</label>
    //     <input name='email' type="email" placeholder="" value={userData.email} onChange={handleChange}/>
    //     <p>{errors.email}</p>

    //     <label htmlFor="password">Password:</label>
    //     <input name='password' type="password" placeholder="" value={userData.password} onChange={handleChange}/>
    //     <p>{errors.password}</p>

    //     <button className={style.cardForm}>Submit</button>
    //   </div>

    // </form>
    <section className={style.formSection}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.inputBlock}>
          <label for="login-email">E-mail</label>
          <input name='email' id="login-email" type="email" required value={userData.email} onChange={handleChange}/>
          <p>{errors.email}</p>
        </div>

        <div className={style.inputBlock}>
          <label for="login-password">Password</label>
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
