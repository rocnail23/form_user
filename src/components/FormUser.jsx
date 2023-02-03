import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import defaultValue from '../utils/DefaultValues'

const FormUser = ({createNewUser, updateInfo, updateUserById}) => {
  const {register,handleSubmit,reset} = useForm()
  useEffect(() => {
    if(updateInfo) {
      reset(updateInfo)
    }
  }, [updateInfo])

  const submit = data => {
    if(updateInfo){
      // Actualizar
      updateUserById(updateInfo.id, data)
    } else {
      // Crear
      createNewUser(data)
    }
    reset(defaultValue)

  }
  return (
    
        <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input {...register('email')} type="email" id='email' />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input {...register('password')} type="password" id='password' />
      </div>
      <div>
        <label htmlFor="firstName">First name</label>
        <input {...register('first_name')} type="text" id='firstName' />
      </div>
      <div>
        <label htmlFor="lastName">Last name</label>
        <input {...register('last_name')} type="text" id='lastName' />
      </div>
      <div>
        <label htmlFor="birthday">Birthday</label>
        <input {...register('birthday')} type="date" id='birthday' />
      </div>
      <button>{updateInfo ? 'update' : 'create'}</button>
    </form>
    
  )
}

export default FormUser