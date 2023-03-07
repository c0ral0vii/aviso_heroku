import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import "./login-auth.css";
import axios from "axios";

function AuthPage() {
  React.useEffect(() => {
    document.title = `Регистрация`;
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = (data) => {
    if (data.create_password !== data.retry_password) {
      alert("Введите пароль повторно");
    }
        axios.post('http://127.0.0.1:8000/auth/users/', {
            email: data.email,
            username: data.username,
            re_password: data.retry_password,
            password: data.create_password,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};
  return (
    <div className="profile">
      <div className="profile_wrapper">
        <div className="autorizing_page">   
          <div
            className="create_acc"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2>Регистрация</h2>

            <div className="create_acc_form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <p>Логин</p>
                <input
                  type="text" 
                  {...register("username", { required: true })}
                />
                {errors.first_name && (
                  <span>* Логин является обьязательным!</span>
                )}

                <p>E-mail</p>
                <input
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>* E-mail является обьязательным!</span>}

                <p>Пароль</p>
                <input
                  type="password"
                  {...register(
                    "create_password",
                    { min: 4, max: 8 },
                    { required: true }
                  )}
                />
                {errors.create_password && (
                  <span>* Пароль должен быть от 6 символов!</span>
                )}

                <p>Повторите пароль</p>
                <input
                  type="password"
                  {...register(
                    "retry_password",
                    { min: 4, max: 8 },
                    { required: true }
                  )}
                />
                {errors.retry_password && <span>*Повторите пароль!</span>}
                <input
                  className="submit_button"
                  type="submit"
                  value="Зарегистрироваться"
                />
                <div className="password_recovery">
                  <p>
                    Уже есть аккаунт? <NavLink to="/login">Войти</NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
