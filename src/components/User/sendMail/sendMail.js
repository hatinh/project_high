import React from 'react'
import './sendMail.css'
export default function sendMail() {
    return (
        <div>
  {/* SIDEBAR */}
  <div className="sidebar-contact">
    <div className="toggle" />
    <div className="scroll">
      <h2>Liên hệ</h2>
      <form action>
        <input type="text" name placeholder="Họ tên" />
        <input type="email" name placeholder="Email" />
        <input type="rel" name placeholder="Số điện thoại" />
        <textarea placeholder="Nội dung" defaultValue={""} />
        <input type="submit" defaultValue="Gửi" />
      </form>         
    </div>
  </div>
</div>

    )
}
