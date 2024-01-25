import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface IresetData {
  email: string
}
export default function ForgotPassword() {
  const [resetData, setResetData] = useState<IresetData>({
    email: ''
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IresetData>()

  // Check if there are any errors
  const hasErrors = Object.keys(errors).length > 0

  const onSubmit = async (resetData: IresetData) => {}

  return (
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <a>
                <i className="icon-left"></i> Back to shop
              </a>
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Forgot your password?</h2>
            <p className="form-block__description">
              Enter your email to recover your account
            </p>

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
              <button
                type="submit"
                className={` ${
                  hasErrors ? 'disabled' : '  btn--yellow'
                }  btn btn--rounded btn-submit`}
                disabled={hasErrors}
              >
                Reset password
              </button>
            </form>
          </div>
        </div>
      </section>
  )
}
