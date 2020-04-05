import React from 'react';

function Header(){
    return(
        <div className= "Main-header-container">
            <div className="Main-header">
                <div className='Main-header-img'>
                    <img src={require('./images/logo.png')}/>
                </div>
                <div>
                    <h1>Ecogreen society</h1>
                </div>   
            </div>
            <div className='Menu'>
                <div><a>Home</a></div>
                <div><a>About us</a></div>
                <div><a>Contact</a></div>
            </div>
        </div>
    )
}

export default Header