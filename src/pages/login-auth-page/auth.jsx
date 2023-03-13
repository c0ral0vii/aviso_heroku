import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { authAPI } from "../../api/api";
import { createAccount } from "../../redux/auth-reducer";

import "./login-auth.css";
function AuthPage() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const onSubmit = async (data) => {
    let formdata = new FormData();
    formdata.append("email", `${data.email}`);
    formdata.append("username", `${data.username}`);
    formdata.append("password", `${data.password}`);
    formdata.append("re_password", `${data.re_password}`);

    let bodyContent = formdata;
    let response = await authAPI.auth(bodyContent);

    if (response) {
      dispatch(createAccount(response.data));
    }

  };

  if (isAuth === true) {
    navigate("/profile");
  }

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
                {errors.username && (
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
                    "password",
                    { min: 4, max: 8 },
                    { required: true }
                  )}
                />
                {errors.password && (
                  <span>* Пароль должен быть от 6 символов!</span>
                )}

                <p>Повторите пароль</p>
                <input
                  type="password"
                  {...register(
                    "re_password",
                    { min: 4, max: 8 },
                    { required: true }
                  )}
                />
                {errors.re_password && <span>*Повторите пароль!</span>}
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
