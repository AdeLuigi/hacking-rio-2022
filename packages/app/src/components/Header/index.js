import React from 'react';
import UserImgDummy from "./../../icon-256x256.png"
import "./style.css"
const Header = (props) => {


    return (
        <>
            <main className='content-header'>
                <div className='content-header-img'>
                    <img src={UserImgDummy} alt="userImgDummy_"></img>
                    
                    <p>Administrador</p>
                    <h1 style={{color: "white", marginRight:700, fontSize: 30, marginTop:5 }}>Complexo da Maré</h1>
                </div>
            </main>

        </>
    );
};

export default Header;