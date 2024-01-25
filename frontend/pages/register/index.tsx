import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

interface IRegistrationData{
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}

export default function RegisterPage(){
    const [registrationData,setRegistrationData] = useState<IRegistrationData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch
    } = useForm<IRegistrationData>()
    const hasErrors = Object.keys(errors).length > 0;

    const onSubmit = async (registrationData: IRegistrationData)=>{
    }
    return (
        <section className="form-page">
          <div className="container">  
            <div className="form-block">
              <h2 className="form-block__title">Create an account</h2>
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__input-row">
                  <input
                    {...register('firstName', {
                      required: 'First name is required'
                    })}
                    className="form__input"
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                  />
                  {errors.firstName && (
                    <span className="message message--error">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
  
                <div className="form__input-row">
                  <input
                    {...register('lastName', {
                      required: 'Last name is required'
                    })}
                    className="form__input"
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                  />
                  {errors.lastName && (
                    <span className="message message--error">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
  
                <div className="form__input-row">
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Invalid email address'
                      }
                    })}
                    className="form__input"
                    placeholder="Email"
                    type="text"
                    name="email"
                  />
                  {errors.email && (
                    <span className="message message--error">
                      {errors.email.message}
                    </span>
                  )}
                </div>
  
                <div className="form__input-row">
                  <input
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters long'
                      }
                    })}
                    className="form__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                  {errors.password && (
                    <span className="message message--error">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="form__input-row">
                  <input
                    {...register('confirmPassword', {
                      required: 'Confirm Password is required',
                      validate: value =>
                        value === watch('password') || 'Passwords do not match'
                    })}
                    className="form__input"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                  />
                  {errors.confirmPassword && (
                    <span className="message message--error">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className={` ${
                    hasErrors ? 'disabled' : '  btn--yellow'
                  }  btn btn--rounded btn-submit`}
                  disabled={hasErrors}
                >
                  Sign up
                </button>
              </form>
              <p className="form__signup-link">
                Not a member yet? <Link href="/login"> Login</Link>
              </p>
            </div>
          </div>
        </section>
    )
}