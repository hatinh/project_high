import React from 'react'
import img_banner from './image_banner1.png'
import './Banner.css';
export default function Banner() {
    return (
       <div>
  {/* BANNER */}
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
        <form autoComplete="off" action="/action_page.php">
          <div className="autocomplete" style={{width: 300}}>
            <input id="myInput" type="text" name="myCountry" placeholder="Tỉnh/Thành Phố" />
          </div>
          <input type="submit" defaultValue="Xem" className="px-5 btnInput" />
        </form>
      </div>
    </div>
    <div className="banner_right">
      <img src= {img_banner} alt="abc"/>
    </div>
  </div>
</div>

    )
}
