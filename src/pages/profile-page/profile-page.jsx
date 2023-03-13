import React from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import "./profile-page.css";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import NewMails from "./new-mails";
import Rating from "./rating";
import Setting from "./setting";
import User from "./user";

const ProfilePage = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);

  return (
    <div className="profile">
      <div className="profile_wrapper">
        <div className="sidebar">
          <div className="sidebar_title">
            <h1>Личный кабинет</h1>
          </div>
          <div className="side_menu_list">
            <NavLink to="user">
              <div className="slist_item">
                <p>Профиль</p>
              </div>
            </NavLink>
            <NavLink to="rating">
              <div className="slist_item">
                <p>Статусы</p>
              </div>
            </NavLink>
            <NavLink to="setting">
              <div className="slist_item">
                <p>Настройки</p>
              </div>
            </NavLink>
            <NavLink to="new_mail">
              <div className="slist_item">
                <p>Мои сообщения</p>
              </div>
            </NavLink>
          </div>
          <div className="sign_out">
            <p>Выход</p>
          </div>
        </div>
        <div className="content_part">
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/user" element={<User />} />
            <Route path="/rating" element={<Rating />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/new_mail" element={<NewMails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
