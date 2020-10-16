import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-bg">
            <div className="container">
                <div className="row d-flex align-items-baseline">
                    <div className="col-md-6 col-12 my-5">
                        <h2 className="footer-title">Let us handle your <br /> project, professionally.</h2>
                        <p><small>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.</small></p>
                    </div>
                    <div className="col-md-6 col-12 my-5">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control input-field" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control input-field" placeholder="Your name/company's name" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control input-field" id="exampleFormControlTextarea1" rows="10" placeholder="Your message"></textarea>
                            </div>
                            <button type='submit' className="btn btn-dark px-5 py-2">Send</button>
                        </form>
                    </div>
                </div>
                <footer className="text-center pb-4">Copyright orange labs {new Date().getFullYear()}</footer>
            </div>
        </div>
    );
};

export default Footer;