import React from 'react';
import Carousel from 'react-elastic-carousel'
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
import './ProjectGallery.css'

const ProjectsGallery = () => {
    const breakPoints = [
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1024, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 }
    ]
    return (
        <section className="container-fluid gallery-bg d-flex flex-column align-items-center mb-5">
            <h2 className="gallery-title">Here are some of <span className="highlights">our works</span></h2>
            <Carousel itemPadding={[10, 20]} breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={4000}>
                <div className="item card">
                    <img src={carousel1} style={{ maxWidth: 468.1, maxHeight: 336.53 }} alt="" />
                </div>
                <div className="item card" >
                    <img src={carousel2} style={{ maxWidth: 468.1, maxHeight: 336.53 }} alt="" />
                </div>
                <div className="item card" >
                    <img src={carousel4} style={{ maxWidth: 468.1, maxHeight: 336.53 }} alt="" />
                </div>
                <div className="item card" >
                    <img src={carousel5} style={{ maxWidth: 468.1, maxHeight: 336.53 }} alt="" />
                </div>
                <div className="item card" >
                    <img src={carousel3} style={{ maxWidth: 468.1, maxHeight: 336.53 }} alt="" />
                </div>
            </Carousel>
        </section>
    );
};

export default ProjectsGallery;