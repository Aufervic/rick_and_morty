import { useState } from "react"
import validate from './validation'

const Form = ({login}) => {

  const [userData, setUserData] =  useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] =  useState({
    email: '',
    password: '',
  })


  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    })

    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    )
  }


  const handleSubmit = (event) =>{
    event.preventDefault()
    login(userData)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input name='email' type="email" placeholder="" value={userData.email} onChange={handleChange}/>
      <p>{errors.email}</p>

      <label htmlFor="password">Password:</label>
      <input name='password' type="password" placeholder="" value={userData.password} onChange={handleChange}/>
      <p>{errors.password}</p>

      <button>Submit</button>
    </form>
  )
}

export default Form