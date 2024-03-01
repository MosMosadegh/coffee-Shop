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

export default function Register() {
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

  const registerNewUser = (event) => {
    event.preventDefault();
    console.log("User Register");
  };

  return (
    <>
      <section className="flex-center my-40">
        <div className="font-DanaMedium text-sm md:text-xl text-zinc-700 dark:text-white bg-gray-200 dark:bg-zinc-700 shadow-lg rounded-2xl p-10 w-96">
          <span className="font-MorabbaBold block text-2xl my-2">ساخت حساب کاربری</span>
          <span className="block text-xl">
            خوشحالیم قراره به جمع ما بپیوندی دوست عزیز :)
          </span>
          <div className="bg-gray-200 rounded mt-6 p-4">
            <span className="text-gray-700 text-lg">
              قبلا ثبت‌نام کرده‌اید؟
            </span>
            <Link
              className="bg-gray-700 text-white text-base mx-3 px-4 py-1 rounded hover:bg-teal-600 dark:hover:bg-emerald-500 hover:text-white"
              to="/login"
            >
              وارد شوید
            </Link>
          </div>
          <form action="#" className="text-zinc-700">
            <div className="relative">
              <Input
                element="input"
                className="w-full border border-gray-300 my-4 py-4 px-4 rounded text-lg"
                type="text"
                placeholder="نام کاربری"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(25),
                ]}
                onInputHandler={onInputHandler}
              />
              {/* <i className="login-form__username-icon fa fa-user absolute left-4 top-6 text-lg text-gray-300"></i> */}
            </div>
            <div className="relative">
              <Input
                element="input"
                className="w-full border border-gray-300 py-4 px-4 rounded text-lg"
                type="email"
                placeholder="آدرس ایمیل"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                  emailValidator(),
                ]}
                onInputHandler={onInputHandler}
              />
              {/* <i className="login-form__password-icon fa fa-envelope"></i> */}
            </div>
            <div className="">
              <Input
                element="input"
                className="w-full border border-gray-300 my-4 py-4 px-4 rounded text-lg"
                type="password"
                placeholder="رمز عبور"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
                onInputHandler={onInputHandler}
              />
              {/* <i className="login-form__password-icon fa fa-lock-open"></i> */}
            </div>
            <Button
              className={`w-full rounded py-4 mt-4 ${
                formState.isFormValid ? "bg-green-500" : "bg-red-500"
              }`}
              type="submit"
              onClick={registerNewUser}
              disabled={false}
            >
              {/* <i className="login-form__btn-icon fa fa-user-plus text-white text-lg mr-4"></i> */}
              <span className="text-white">عضویت</span>
            </Button>
          </form>
          <div className="text-sm text-zinc-700 dark:text-white mt-4">
            <span className="">سلام کاربر محترم:</span>
            <ul className="">
              <li className="">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className="">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
