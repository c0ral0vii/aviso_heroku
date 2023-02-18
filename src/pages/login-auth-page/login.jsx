import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import "./login-auth.css";
import axios from 'axios';

import googleIcon from "../../assets/icons/google-icon.png";
import vkIcon from "../../assets/icons/vk-icon.png";

function LoginPage() {
  React.useEffect(() => {
    document.title = `Вход в аккаунт`;
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

  const onAuthorize = (data) => {
    console.log(data); // Получаем с апи токен для логина, но я не понял как сохранить его в headers, если вы знаете то оно в response!
    axios.post('http://127.0.0.1:8000/auth/token/login/', {
            password: data.password,
            username: data.username,
        })
        .then(function (response) {
            console.log(response) // так вроде небезопастно делать, поэтому я это перепишу, но если хотите то напишите сами
                                  // нужно просто сохранить токен, чтобы можно было использовать в дальнейших запросах
            const instance = axios.create({
                baseURL: 'http://127.0.0.1:8000/api/',
                timeout: 1000,
                headers: {'Authorization': response.data.auth_token}
              });
        })
        .catch(function (error) {
            console.log(error);
        });
    };

  return (
    <div className="profile">
      <div className="profile_wrapper">
        <div className="autorizing_page">
          <div className="sign_in" data-aos="fade-up" data-aos-duration="1000">
            <h2>Вход в аккаунт</h2>

            <div className="signin_form">
              <form onSubmit={handleSubmit(onAuthorize)}>
                <div className="email_sign">
                  <p>E-mail или логин</p>
                  <input
                    type="text" // было так - type='email' и ...register("email"), поменял потому что на сайте написано e-mail или логин, но можно было вводить только login
                    {...register("username", { required: true })}
                  />
                  {errors.email && (
                    <span>* E-mail или логин объязательны!</span>
                  )}
                </div>
                <div className="password_sign">
                  <p>Пароль</p>
                  <input
                    type="password"
                    {...register(
                      "password",

                      { required: true }
                    )}
                  />
                  {errors.password && <span>* Пароль объязательный!</span>}
                </div>
                <div className="login_links">
                  <a href="#">
                    <img src={googleIcon} alt="google icon" />
                  </a>
                  <a href="#">
                    <img src={vkIcon} alt="vk icon" />
                  </a>
                </div>

                <div className="signin_button">
                  <input
                    className="submit_button"
                    type="submit"
                    value="ВОЙТИ"
                  />
                </div>
              </form>
              <div className="password_recovery">
                <NavLink to="/auth">
                  <p>Создать новый аккаунт</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
