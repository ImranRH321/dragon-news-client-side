import React from 'react';
import logo from  '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className='text-center my-5'>
                <img src={logo} alt="" />
                <p><span>Journalism Without Fear or Favour</span></p>
                <p>{moment().format()}</p>
                <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
                <h1 className='text-success'>{moment().format('dddd, MMMM D ,YYYY')}</h1>
            </div>
        </div>
    );
};

export default Header;