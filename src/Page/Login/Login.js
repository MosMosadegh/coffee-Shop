import React from "react";
import { Link } from "react-router-dom";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import { useForm } from "../../hooks/useForm";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../Validators/rules";

export default function Login() {
  const [formState, onInputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  console.log(formState);

  const userLogin = (event) => {
    event.preventDefault();
    console.log("User Login");
  };

  return (
    <>
      <section className="login-register flex-center my-40">
        <div className=" login bg-white shadow-lg rounded p-10 w-96">
          <span className="login__title block text-gray-700 text-2xl">
            ورود به حساب کاربری
          </span>
          <span className="login__subtitle block text-gray-700 text-xl">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </span>
          <div className="login__new-member bg-gray-200 rounded mt-6 p-4">
            <span className="login__new-member-text text-gray-700 text-lg">
              کاربر جدید هستید؟
            </span>
            <Link
              className="login__new-member-link bg-gray-700 text-white text-base px-4 py-1 rounded"
              to="/register"
            >
              ثبت نام
            </Link>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username relative">
              <Input
                element="input"
                className="login-form__username-input w-full border border-gray-300 py-4 px-4 rounded text-lg"
                id="username"
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                  emailValidator(),
                ]}
                onInputHandler={onInputHandler}
              />
              <i className="login-form__username-icon fa fa-user absolute left-4 top-6 text-lg text-gray-300"></i>
            </div>
            <div className="login-form__password relative">
              <Input
                element="input"
                className="login-form__password-input w-full border border-gray-300 py-4 px-4 rounded text-lg"
                id="password"
                type="password"
                placeholder="رمز عبور"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
                onInputHandler={onInputHandler}
              />
              <i className="login-form__password-icon fa fa-lock-open absolute left-4 top-6 text-lg text-gray-300"></i>
            </div>
            <Button
              className={`login-form__btn w-full rounded py-4 mt-4 ${
                formState.isFormValid ? 'bg-green-500' : "bg-red-500"
              }`}
              type="submit"
              onClick={userLogin}
              disabled={!formState.isFormValid}
            >
              <i className="login-form__btn-icon fas fa-sign-out-alt text-white text-lg mr-4"></i>
              <span className="login-form__btn-text text-white">ورود</span>
            </Button>
            <div className="login-form__password-setting mt-4">
              <label className="login-form__password-remember flex items-center">
                <input
                  className="login-form__password-checkbox mr-2"
                  type="checkbox"
                />
                <span className="login-form__password-text text-gray-600 text-lg">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label className="login-form__password-forget">
                <a
                  className="login-form__password-forget-link text-gray-600 text-lg"
                  href="#"
                >
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
