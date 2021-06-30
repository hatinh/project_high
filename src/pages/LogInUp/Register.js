import React, { Component } from "react";
import "./Login.css";
import Register from './register.svg';


export default class Login extends Component {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  render() {
    return (
      <div>
          <div className="block">
            <div className="forms-container">
                <div className="signin-signup">
                <form action="#" className="sign-up-form">
          <h2 className="title">Đăng ký</h2>
          <div className="input-field">
            <i className="fas fa-user" />
            <input type="text" placeholder="Tên đăng nhập" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-field">
            <i className="fa fa-phone" />
            <input type="text" placeholder="Số điện thoại" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock" />
            <input type="password" placeholder="Mật khẩu" />
          </div>
          <input type="submit" className="btn" defaultValue="Đăng ký" />
          <p className="social-text">Hoặc đăng ký tài khoản bằng:</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-google" />
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </form>
        <div className="panels-container">
        <div className="panel right-panel">
        <div className="content">
          <h3>Bạn đã có tài khoản ?</h3>
          <p>
            Nếu bạn đã có tài khoản vui lòng đăng nhập để tìm kiếm người giúp việc &amp; công việc phù hợp với mình nhất !
          </p>
          <button className="btn transparent" id="sign-in-btn">
            Đăng nhập
          </button>
        </div>
        <img src={Register} alt="logo" className="image" />
      </div>
        </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
}
