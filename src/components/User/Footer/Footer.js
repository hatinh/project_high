import React from 'react'
import './Footer.css';
export default function Footer() {
    return (
        <div>
  <footer>
    <div className="container">
      <div className="sec aboutUs">
        <h2>Về công ty</h2>
        <p>“HelperChoice cam kết mang đến cho mọi nhà nguồn nhân lực chất lượng cao hàng đầu bằng chính sự trân
          trọng, tình yêu và trách nhiệm cao của mình với cuộc sống con người và xã hội”</p>
        <ul className="sci">
          <li><a href><i className="fa fa-phone" /></a></li>
          <li><a href><i className="fa fa-envelope-open-text" /></a></li>
          <li><a href><i className="fab fa-facebook-f" /></a></li>
          <li><a href><i className="fab fa-instagram" /></a></li>
        </ul>
      </div>
      <div className="sec quickLinks">
        <h2>Liên kết nhanh</h2>
        <ul>
          <li><a href="#">Hỗ trợ khách hàng</a></li>
          <li><a href="#">Tuyển dụng</a></li>
          <li><a href="#">Khuyến mãi</a></li>
          <li><a href="#">Tin tức sự kiện</a></li>
        </ul>
      </div>
      <div className="sec contact">
        <h2>Liên hệ</h2>
        <ul className="info">
          <li>
            <span><i className="fa fa-map-marker" /></span>
            <span>137 Nguyễn thị thập <br /> TP Đà Nẵng <br /> Việt Nam </span>
          </li>
          <li>
            <span><i className="fa fa-phone" /></span>
            <p><a href="tel:0839579012">0839579012</a> <br />
              <a href="tel:0839579012">0839579012</a>
            </p>
          </li>
          <li>
            <span><i className="fa fa-envelope" /></span>
            <p><a href="mailto:trolevan26299@gmail.com">trolevan26299@gmail.com</a></p>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</div>

    )
}
