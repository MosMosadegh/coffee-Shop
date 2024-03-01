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
      <section className=" flex-center my-40">
        <div className=" font-DanaMedium text-sm md:text-xl text-zinc-700 dark:text-white bg-gray-200 dark:bg-zinc-700 shadow-lg rounded-2xl p-10 w-96">
          <span className="font-MorabbaBold block text-2xl my-2">ورود به حساب کاربری</span>
          <span className="block text-xl">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </span>
          <div className="bg-gray-200 rounded mt-6 p-4">
            <span className="text-gray-700 text-lg">کاربر جدید هستید؟</span>
            <Link
              className="bg-gray-700 text-white text-base mx-3 px-4 py-1 rounded hover:bg-teal-600 dark:hover:bg-emerald-500 hover:text-white"
              to="/register"
            >
              ثبت نام
            </Link>
          </div>
          <form action="#" className="text-zinc-700">
            <div className="relative">
              <Input
                element="input"
                className=" w-full border border-gray-300 my-4 py-4 px-4 rounded text-lg"
                id="username"
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(25),
                  emailValidator(),
                ]}
                onInputHandler={onInputHandler}
              />
              <i className="login-form__username-icon fa fa-user absolute left-4 top-6 text-lg text-gray-300"></i>
            </div>
            <div className="relative">
              <Input
                element="input"
                className="w-full border border-gray-300 py-4 px-4 rounded text-lg"
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
              {/* <i className="login-form__password-icon fa fa-lock-open absolute left-4 top-6 text-lg text-gray-300"></i> */}
            </div>
            <Button
              className={`w-full rounded py-4 mt-4 ${
                formState.isFormValid ? "bg-green-500" : "bg-red-500"
              }`}
              type="submit"
              onClick={userLogin}
              disabled={!formState.isFormValid}
            >
              {/* <i className="login-form__btn-icon fas fa-sign-out-alt text-white text-lg mr-4"></i> */}
              <span className="text-white">ورود</span>
            </Button>
            <div className="text-sm text-zinc-700 dark:text-white mt-4">
              <label className="mb-3 flex items-center">
                <input className="ml-3" type="checkbox" />
                <span className="">مرا به خاطر داشته باش</span>
              </label>
              <label className="hover:text-teal-600">
                <a className="" href="#">
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
