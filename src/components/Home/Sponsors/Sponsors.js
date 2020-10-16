import React from 'react';
import airbnb from '../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';

const Sponsors = () => {
    return (
        <div className="container">
            <div style={{ minHeight: 300 }} className="row d-flex flex-wrap align-items-center justify-content-between">
                <div className="col-md-1"></div>
                <div className="col-md-2 col-sm-6">
                    <img style={{ height: 51 }} src={airbnb} alt="airbnb" className="img-fluid p-1" />
                </div>
                <div className="col-md-2 col-sm-6">
                    <img style={{ height: 44 }} src={google} alt="google" className="img-fluid p-1" />
                </div>
                <div className="col-md-2 col-sm-6">
                    <img style={{ height: 67 }} src={netflix} alt="netflix" className="img-fluid p-1" />
                </div>
                <div className="col-md-2 col-sm-6">
                    <img style={{ height: 36 }} src={slack} alt="slack" className="img-fluid p-1" />
                </div>
                <div className="col-md-2 col-sm-6">
                    <img style={{ height: 56 }} src={uber} alt="uber" className="img-fluid p-1" />
                </div>
            </div>
        </div>
    );
};

export default Sponsors;