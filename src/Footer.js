import React from 'react';

function Footer(){
    return(
        <div className= 'Main-footer'>
            <div className='Main-header-img'>
                    <img src={require('./images/logo.png')}/>
                </div>
                <div>
                    <h1>Ecogreen society</h1>
                </div>   
        </div>
    )
}

export default Footer;