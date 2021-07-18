import React, { Component } from 'react'

export default class IdentifyCode extends Component {
    render() {
        return (
            <div>
                    <form>
                      <div className='alert alert-success ' style={{fontSize:'25px'}}> Mã xác thực đã được gửi đến số điện thoại của bạn!</div>
                      <h4 style={{marginTop:'40px'}}>Vui lòng nhập mã xác thực:</h4>
                    <input style={{width:'500px'}} type="text" className='py-3' id="fname" name="fname" /><br />
                    <input type='submit' className='px-5'></input>
                    </form>
            </div>
        )
    }
}
