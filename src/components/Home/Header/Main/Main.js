import React from 'react';
import frame from '../../../../images/logos/Frame.png';

const Main = () => {
    return (
        <div className="container">
            <div style={{ minHeight: '90vh' }} className="row d-flex align-items-center">
                <div className="col-md-6 col-12">
                    <h1 className='title'>Let's Grow Your <br /> Brand To The <br /> Next Level</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus enim dignissimos. Error facilis voluptatibus sint ea, aspernatur repudiandae iure!</p>
                    <button className="btn btn-dark px-5 py-2 my-3">HIRE US</button>
                </div>
                <div className="col-md-6 col-12 my-5">
                    <img src={frame} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Main;