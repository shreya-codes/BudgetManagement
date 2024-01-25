import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface IloginData {
  email: string
  password: string
}

export default function LoginPage() {
  const [loginData, setLoginData] = useState<IloginData>({
    email: '',
    password: ''
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IloginData>()

  // Check if there are any errors
  const hasErrors = Object.keys(errors).length > 0

  const onSubmit = async (data: IloginData) => {
    
  }

  return (
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/">
              <span>
                <i className="icon-left"></i> Back to home
              </span>
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Log in</h2>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
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

              <div className="form__info">
                <Link
                  href="/forgotPassword"
                  className="form__info__forgot-password"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className={` ${
                  hasErrors ? 'disabled' : '  btn--yellow'
                }  btn btn--rounded btn-submit`}
                disabled={hasErrors}
              >
                Sign in
              </button>

              <p className="form__signup-link">
                Not a member yet? <Link href="/register">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
  )
}
