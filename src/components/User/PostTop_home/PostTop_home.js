import React, { Component,useEffect } from "react";
import Tinh from "./TinhThanh.json";
import style from './PostTop_home.module.css'
import baiPost from './Top10post.json'
import top5 from './Top5.json'
import ReactPaginate from 'react-paginate'
import axios from 'axios';


export default class PostTop_home extends Component {

  
  constructor(props) {
    super(props)

    this.state = {
        offset: 0,
        tableData: [],
        orgtableData: [],
        perPage: 3,
        currentPage: 0,
        country:[1]
       
    }
    this.handlePageClick = this.handlePageClick.bind(this);
    this.submit = this.submit.bind(this);
}

submit(e){
  e.preventDefault()
  {this.handleChange(e)};
  console.log("sss",this.state.country);
}

handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.loadMoreData()
    });

};

loadMoreData() {
const data = this.state.orgtableData;

const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
this.setState({
  pageCount: Math.ceil(data.length / this.state.perPage),
  tableData:slice
})

}

componentDidMount(){
    this.getData();
    this.getProvince();

}


  renderTinh = () => {
  
    return this.state.country.map((tenTinh, index) => {
      return <option>{tenTinh.province_name}</option>;
    });
  };

  getData() {
    axios
        .get(`https://mocki.io/v1/89c66305-500b-422d-a339-58790b7491bc`)
        .then(res => {
         
          var data = res.data;
          
          
          var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
          

          this.setState({
              pageCount: Math.ceil(data.length / this.state.perPage),
              orgtableData :res.data,
              tableData:slice
          })
      });
}


getProvince() {
  axios
      .get(`https://vapi.vnappmob.com/api/province`)
      .then(res => {
       
        var data = res.data.results;
        this.setState({
          country:data
        })
    });
}

  renderPost = () =>{
    return this.state.tableData.map((post,index) => { 
      return (
      
        <div className="media border p-1 mt-1 mb-1" key={index}>
          <div className="media-body">
            <h5  style={{color:'#203181'}}>{post.tenChuNha} | <span class="badge badge-light"> Hình thức:{post.hinhThuc}</span> | <span class="badge badge-light"> Lương: {post.salary}</span>  <span class="badge badge-info" >{post.diaChi}</span> </h5>
            <p className='text-break' style={{fontSize:'15px'}}> <b>Nội dung:</b> {post.Content.substr(0,190)} <a className='text-primary ' style={{textDecoration:'none' ,cursor:'pointer'}}>  Xem thêm...</a></p>
            <small style={{paddingRight:'60px'}}><i className='text-secondary'>Được đăng lúc:{post.timePost}</i></small>
          </div>
          <img src={post.imgProfile} alt="true" className="ml-2 mt-3 rounded-circle" style={{width:'70px',height:'80px'}} />
      
      
       </div>
      



      )
    }) 
  } 

  renderTop5 = () => {
    return top5.map((top,index) => {
      return (
        <div className="media border p-1  mt-1 mb-1" key={index}>
        <div className="media-body">
          <h5  style={{color:'#203181'}}> {top.tenUngVien} | <span className="badge badge-light"> {top.tuoi} Tuổi </span>  </h5>
        
             <span className="badge badge-info" >{top.diaChi}</span>
             <span className="badge badge-light ml-3"> Lượt thuê:{top.luotThue}</span>
              <br/>
              <br/>
               <div className='row pl-3 pt-2 '>
                    <i className="fa fa-star" style={{color:'#ffc800'}}></i>
                    <i className="fa fa-star" style={{color:'#ffc800'}}></i>
                    <i className="fa fa-star" style={{color:'#ffc800'}}></i>
                    <i className="fa fa-star" style={{color:'#ffc800'}}></i>
                    <i className="fa fa-star" style={{color:'#ffc800'}}></i>
               <div type="button" className={style.buttonPT} > <i class="fa fa-arrow-right"></i> Tuyển dụng</div>
               </div>
        </div>
        <img src='https://toplist.vn/images/800px/kamiwedding-316252.jpg' alt="true" className="ml-2 mt-3 rounded-circle" style={{width:'70px',height:'80px'}} />
   </div>
      )
    })
  }

  handleChange = (e) => {
    // to find out if it's checked or not; returns true or false
    const checked = e.target.checked;
    console.log(checked)
    // to get the checked value
    const checkedValue = e.target.value;
    console.log(checkedValue)
    // to get the checked name
    const checkedName = e.target.name;
    console.log(checkedName)


    if(e.target.name ==='vehicle1' && e.target.value==='something2'){
      this.setState({
        offset: 0,
        tableData: [],
        orgtableData: [],
        perPage: 3,
        currentPage: 0
      });
    }else{{this.getData()}
    {this.renderPost()}
    }
 
    };


  render() {
   
    return (
      <div className="container-fluid">
        <div className="row  w-100 pb-3">
          <div className="col-2 text-center border border-right-0 filter" style={{ width: "300%" }}>
             <form  style={{ paddingTop: "10%" ,marginTop:'80px' }} className='border'>
                  <div style={{ width: "500%" }}>
                <div className="form-check-inline ">
                  <label className="form-check-label" htmlFor="check1">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="check1"
                      name="vehicle1"
                      onChange={this.handleChange}
                      defaultValue="something1"
                      comingsoon="false"
                    />
                    Full Time
                  </label>
                </div>
                <div className="form-check-inline">
                  <label className="form-check-label" htmlFor="check2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="check2"
                      name="vehicle2"
                      onChange={this.handleChange}
                      defaultValue="something2"
                    />
                    Part Time
                  </label>
                </div>
              </div>
            
              <div className="form-group"></div>
            
              <div style={{ width: "250%", padding: "20px 0 20px 0" }}>
                <label htmlFor="sel1">Tỉnh thành:</label> 
                <select className="form-control " id="sel1" name="sellist1" >
                  <option>Chọn tỉnh :</option>
                  {this.renderTinh()}
                </select>
              </div>

              <button className="btn btn-primary" onClick={this.submit}>
                Tìm kiếm
              </button>
              
            </form> 


            


          </div>
          <div className="col-7 border border-left-0">
          <h2 className="p-3 text-center" style={{color:'#203181'}} >TOP BÀI ĐĂNG MỚI NHẤT</h2>
              {this.renderPost()}

              <ReactPaginate
      previousLabel={"prev"}
      nextLabel={"next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={this.state.pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={this.handlePageClick}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}/>
           {/*    <ul class="pagination justify-content-center pt-3" >
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">4</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
               </ul> */}
          </div>
          <div className="col-3 border">
             <h4 className="p-3 mb-4 text-center" style={{color:'#203181'}} >TOP 5 ỨNG VIÊN XUẤT SẮC</h4>
             {this.renderTop5()}
            
          </div>
        </div>
      </div>
    );
  }
}

