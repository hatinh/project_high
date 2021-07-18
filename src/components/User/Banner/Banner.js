import React, { Component } from 'react'
import './Banner.css'

export default class Banner extends Component {
  render() {
    return (
      <div>
        <header>
  <div className="banner container-fluid">
  <div className="banner_left">
    <div className="content">
      <div className="title">
        <h1>Tìm người giúp việc tiệc vời!</h1>
      </div>
      <h2>
        Đăng ký trọn gói dành cho người sử dụng lao động giúp việc gia đình. Tìm kiếm, cho thuê và cung
        cấp đào tạo.
      </h2>
      <form autoComplete="off" className='form_banner'>
        <div className="autocomplete" >
          <input id="myInput" type="text" name="myCountry" placeholder="Tỉnh/Thành Phố" />
        </div>
        <input type="submit" defaultValue="Xem" className="px-5 btnInput" />
      </form>
    </div>
  </div>
  <div className="banner_right">
    <img src="./image_banner1.png" alt />
  </div>
</div>

  </header>
      </div>
    )
  }
}
