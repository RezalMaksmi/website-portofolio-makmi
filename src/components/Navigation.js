
import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import React from 'react';
import './Navigation.css';
import Profil from '../pages/Profil';
import Chat from '../pages/Chat';
import logo from '../img/logo.png'


const onBtn = (e) => {
    const hover = document.querySelector('#hover');
    const defaul = document.querySelector('#default');
    // console.log(e)
    if(e.target.pathname === '/'){

        // console.log('ya ini /')
    }else{
        
    }
        // e.target.classList.add("btn-hover")
        // e.target.classList.remove("btn-default")
        // console.log('ini btn Hover')
        // e.target.classList.remove("btn-default")
        // e.target.classList.add("btn-hover")
      

}


const Navigation = () => {

    return(
        <div className="container">                    
        <Router>
            <nav className="navigation">
                <div className="wrap-top">
                    <div className="bg-top"></div>
                    <div className="img-top">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className='wrap-name'>
                    <h4>Rezal Nur Syaifudin</h4>
                    <h5>Portofolioku</h5>
                    <div className='buttom-top'>
                        <Link to="/" onClick={onBtn} className='btn-hover' id='hover'>Profil</Link>
                        <Link to="/chat" onClick={onBtn} className="btn-default" id='default'>Chat</Link>
                    </div>
                </div>
            </nav>
                <Routes>
                    <Route element={<Profil /> } path="/" />
                    <Route element={<Chat />} path="/chat" />
                </Routes>
            </Router>   
        </div>
    )
}

export default Navigation;