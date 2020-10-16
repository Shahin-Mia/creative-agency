import React from 'react';
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className='custom-bg'>
            <Navbar></Navbar>
            <Main></Main>
        </div>
    );
};

export default Header;