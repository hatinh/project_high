import React, { Component} from 'react'
import './Login.css';
import img_login from './login.svg';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../../services/auth.service";



const requiredPassword = value => {
  if (!value) {
    return (
      <div className="text-danger alertLog " role="alert">
            Vui lòng điền mật khẩu!
      </div>
    );
  }
};

const requiredUserName = value => {
  if (!value) {
    return (
      <div className="text-danger alertLog " role="alert">
        Vui lòng điền tên đăng nhập !
      </div>
    );
  }
};


export default class Login extends Component {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }
 
  render() {
 
    return (
      <div>

  <div className="block">
    <div className="forms-container">
      <div className="signin-signup">
        
      <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
          <h2 className="title">Đăng Nhập</h2>
          <div className="input-field">
            <i className="fas fa-user" />
            <Input
                type="text"
                name="username"
                placeholder="Tên Đăng Nhập"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[requiredUserName]}
              />
             
          </div>
          <div className="gc"></div>
          <div className="input-field">
            <i className="fas fa-lock" />
            <Input
                 className="pt-2"
                type="password"
                name="password"
                placeholder="Mật khẩu"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[requiredPassword]}
              />
          </div>
          <div className="gc"></div>
          <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          <p className="social-text">Hoặc đăng nhập bằng:</p>
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
        </Form>
       
      </div>
    </div>
    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>Bạn cần thuê người giúp việc ?</h3>
          <p>
            Vui lòng đăng ký tài khoản để bạn có thể tuyển được nhiều giúp việc phù hợp nhất với mình !
          </p>
     
          <button className="btn transparent" onclick={this.changeInUp}  id="sign-up-btn">
            Đăng ký
          </button>
        </div>
        <img src={img_login} alt="logo" className="image" />
      </div>
    </div>
  </div>
</div>

    )
  }
}

