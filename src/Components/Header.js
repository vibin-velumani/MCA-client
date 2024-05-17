import React from "react";
import "../StyleSheet/Header.css";

function Header() {
  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
            alt="logo"
          />
        </div>
        <div className="qHeader__icons">
          <div className="qHeader__icon">
            <i className="fas fa-home"></i>
          </div>
          <div className="qHeader__icon">
            <i className="fas fa-list"></i>
          </div>
          <div className="qHeader__icon">
            <i className="fas fa-check"></i>
          </div>
          <div className="qHeader__icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="qHeader__icon">
            <i className="fas fa-bell"></i>
          </div>
        </div>
        <div className="qHeader__input">
          <input type="text" placeholder="Search questions" />
        </div>
        <div className="qHeader__Rem">
          <img
            src="URL_OF_STATIC_AVATAR_IMAGE"
            alt="avatar"
            className="avatar"
          />
          <button>Add Question</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
