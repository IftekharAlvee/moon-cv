import React from 'react';
import AwardAndScholarship from './AwardAndScholarship/AwardAndScholarship';
import CoCurricullar from './CoCurricular/CoCurricullar';
import Education from './Education/Education';
import Objectives from './Objectives/Objectives';
import Publications from './Publications/Publications';
import References from './Reference/References';
import ResearchAndProject from './ResearchAndProject/ResearchAndProject';
import Skills from './Skills/Skills';
import WorkExperience from './WorkExperience/WorkExperience';

const Landing = () => {
    return (
        <div>
            <div className="container">
                <Objectives></Objectives>
                <Education></Education>
                <WorkExperience></WorkExperience>
                <Publications></Publications>
                <ResearchAndProject></ResearchAndProject>
                <AwardAndScholarship></AwardAndScholarship>
                <Skills></Skills>
                <CoCurricullar></CoCurricullar>
                <References></References>
            </div>
        </div>
    );
};

export default Landing;