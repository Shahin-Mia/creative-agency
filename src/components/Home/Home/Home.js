import React from 'react';
import Feedback from '../FeedbackSection/Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import ProjectsGallery from '../Projects/ProjectsGallery';
import Services from '../Services/Services';
import Sponsors from '../Sponsors/Sponsors';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Sponsors></Sponsors>
            <Services></Services>
            <ProjectsGallery></ProjectsGallery>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;