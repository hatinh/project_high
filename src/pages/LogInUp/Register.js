import React, { Component } from 'react'
import "./Login.css";
import img_Register from './register.svg';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../services/auth.service";
import { isEmail } from "validator";
import firebase from './firebase'

const required = (value) => {
    if (!value) {
        return (
            <div className="text-danger alertLog" role="alert">
                Không được để trống!
            </div>
        );
    }
};

const email = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="text-danger alertLog" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="text-danger alertLog" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="text-danger alertLog" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);

    this.state = {
        username: "",
        email: "",
        password: "",
        successful: false,
        message: "",
        phone: "",
    };
}

handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }

onChangeUsername(e) {
    this.setState({
        username: e.target.value,
    });
}

onChangeEmail(e) {
    this.setState({
        email: e.target.value,
    });
}

onChangePhone(e) {
    this.setState({
        phone: e.target.value,
    });
}

onChangePassword(e) {
    this.setState({
        password: e.target.value,
    });
}

configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }

onSignInSubmit = (e) => {
    this.configureCaptcha()
    const phoneNumber = "+84" + this.state.phone
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          this.props.history.push("/code");
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }

handleRegister(e) {
    e.preventDefault();
    this.setState({
        message: "",
        successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
        AuthService.register(
            this.state.username,
            this.state.email,
            this.state.phone,
            this.state.password
        ).then(
            (response) => {
                this.setState({
                    message: response.data.message,
                    successful: true,
                });
                this.props.history.push("/login")
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    successful: false,
                    message: resMessage,
                });
                this.props.history.push("/login")
                
            }
        );
    }
 //   this.onSignInSubmit();
}
  render() {
    return (
      <div>
      <div className="block">
          <div className="forms-container">
              <div className="signin-signup">
             
                  <Form
                      onSubmit={this.handleRegister}
                      ref={(c) => {
                          this.form = c;
                      }}
                      className="sign-up-form"
                  >
                       {this.state.message && (
                                    <div className="form-group mt-3">
                                        <div
                                            className={
                                                this.state.successful
                                                    ? "alert alert-success"
                                                    : "alert alert-danger"
                                            }
                                            role="alert"
                                        >
                                            {this.state.message}
                                        </div>
                                    </div>
                                )}
                             
                      <h2 className="title">Đăng ký</h2>
                      { !this.state.successful && (
                         <div className="div_register">
                              <div className="input-field">

                                  <i className="fas fa-user"/>
                                  <Input
                                      type="text"
                      
                                      placeholder="Tên Đăng Nhập"
                                      name="username"
                                      value={this.state.username}
                                      onChange={this.onChangeUsername}
                                      validations={[required, vusername]}
                                  />
                                  
                              </div>
                              <div className="gcr"></div>
                              <div className="input-field">
                                  <i className="fas fa-envelope" />
                                  <Input
                                      type="text"
                                     
                                      placeholder="Email"
                                      name="email"
                                      value={this.state.email}
                                      onChange={this.onChangeEmail}
                                      validations={[required, email]}
                                  />
                                 
                              </div>
                              <div className="gcr"></div>
                              <div className="input-field">
                                  <i className="fa fa-phone" />
                                  <Input
                                      type="text"
                                     
                                      placeholder="Phone"
                                      name="phone"
                                      value={this.state.phone}
                                      onChange={this.handleChange}
                                  />
                                  <div id="sign-in"></div>
                              </div>
                              
                              <div className="gcr"></div>
                              <div className="input-field">
                                  <i className="fas fa-lock" />
                                  <Input
                                      type="password"
                                      name="password"
                                      placeholder="*********"
                                      value={this.state.password}
                                      onChange={this.onChangePassword}
                                      validations={[required, vpassword]}
                                  />
                              </div>
                              <div className="gcr"></div>
                              <div className="form-group">
                                  <button
                                      type="submit"
                                      className="btn btn-primary btn-block"
                                  >
                                      Đăng ký
                                  </button>
                              </div>
                              
                          </div>
                      )}
                      
                      <CheckButton
                          style={{ display: "none" }}
                          ref={(c) => {
                              this.checkBtn = c;
                          }}
                      />

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
                  </Form>
                  <div className="panels-container">
                      <div className="panel right-panel">
                          <div className="content">
                              <h3>Bạn đã có tài khoản ?</h3>
                              <p>
                                  Nếu bạn đã có tài khoản vui lòng đăng nhập để tìm kiếm
                                  người giúp việc &amp; công việc phù hợp với mình nhất !
                              </p>
                              <button className="btn transparent" id="sign-in-btn">
                                  Đăng nhập
                              </button>
                          </div>
                          <img src={img_Register} alt="logo" className="image" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
}
}
