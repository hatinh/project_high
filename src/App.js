import React from 'react'; 
import { BrowserRouter, Route ,NavLink,Switch } from 'react-router-dom';
import Footer from './components/User/Footer/Footer';
import Navbar from './components/User/Header/Navbar';
import Home from './pages/Home/Home.js'
import Login from './pages/LogInUp/Login.js'
import logout from './pages/LogInUp/Register'
import IdentifyCode from './pages/LogInUp/IdentifyCode'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Switch>
     <Route exact path='/home' component={Home}/>
     <Route exact path='/login' component={Login}/>
     <Route exact path='/logout' component={logout}/>
     <Route exact path='/code' component={IdentifyCode}/>
     
     <Route exact path='/' component={Home}/> 

    {/* đường dẫn mặc định khi vào trang chủ thì vào trang Home */}
    </Switch>
    <Footer/>

    </BrowserRouter>
    </div>
  );
}

export default App;
