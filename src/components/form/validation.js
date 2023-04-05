
export default function validate(userData) {
  const regexEmail = /\S+@\S+\.\S+/
  let errors = {}

  if(userData.email===''){
    errors.email = 'El nombre de usuario no puede estar vacío'
  }else if(userData.email.length > 35){
    errors.email = 'El nombre de usuario no puede tener más de 35 caracteres'
  }else if(!regexEmail.test(userData.email)){
    errors.email = 'Email inválido'
  }else{
    errors.email = ''
  }

  if(userData.password.length < 6 && userData.password.length > 10){
    errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres'
  }else if(!/\d/.test(userData.password)){
    errors.password= 'Debe contener al menos un número'
  }


  return errors
}




export const validation = (userData, errors, setErrors) => {
  // VALIDACIÓN DE EMAIL

  if(!userData.email) setErrors({...errors, email: 'Completa con tu email'});
  else if(userData.email.length>35) setErrors({...errors, email: 'No debe superar los 35 caracteres'})
  else if(!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{3})+$/.test(userData.email)) setErrors({...errors, email: 'Email inválido'})
  else setErrors({...errors, email: ''})

  // VALIDACIÓN DE PASSWORD

  if(userData.password.length < 6 || userData.password.length > 10) setErrors({...errors, password: 'Longitud inválida'})
  else if (!/\d/.test(userData.password)) setErrors({...errors, password: 'Debe contener al menos un número'})
  else setErrors({...errors, password: ''})
}

