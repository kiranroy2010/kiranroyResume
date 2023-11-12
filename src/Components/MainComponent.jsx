import React from 'react';
import '../Assets/Css/Main.css';
import '../Assets/Css/Fonts.css';
import PROFILE from "../Data/Profile"; 

import Header from './Header/Header';
import IntroSection from './Body/IntroSection';
import MainInformation from './Body/MainInformation ';
import WorkExperience from './Body/WorkExperience';
import ProjectInfo from './Body/ProjectInfo';
import Footer from './Footer/Footer'
import WIDSection from './Body/What I do Section/WIDSection';


function MainComponent(props) {
    return (
        <div>
            <Header profile={PROFILE[0]} />
            <IntroSection profile={PROFILE[0]} />
            <WIDSection profile={PROFILE[0]}/>
            <MainInformation profile={PROFILE[0]} />
            <WorkExperience profile={PROFILE[0]} />
            <ProjectInfo profile={PROFILE[0]} />
            <Footer/>
        </div>
    );
}

export default MainComponent;