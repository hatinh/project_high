import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
  {/* Menu */}
  <nav>
    <input type="checkbox" id="check" />
    <label htmlFor="check" className="checkbtn">
      <i className="fa fa-align-justify" />
    </label>
    <label className="logo">HelperChoice</label>
    <ul>
      <li><NavLink to="/login" className="btLightRun" >
          <span />
          <span />
          <span />
          <span />
          Đăng Nhập
        </NavLink>
      </li>
      <li><NavLink to="/logout" className="btLightRun" id="btnSignUp">
          <span />
          <span />
          <span />
          <span />
          Đăng Ký
        </NavLink>
      </li>
    </ul>
  </nav>
</div>

    )
}
