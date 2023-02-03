import { useState } from 'react';

import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import GeneralRender from './components/GeneralRender';
import EducationRender from './components/EducationRender';
import ExperienceRender from './components/ExperienceRender';
import './App.scss';

const App = () => {
  //[type]: [...this.state[type], obj]
  const [general, setGeneral] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedIn: '',
    github: '',
  });
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const generalHandler = (type, info) => {
    setGeneral((general) => ({
      ...general,
      [type]: info,
    }));
  };

  const educationHandler = (newEducation) => {
    setEducations((educations) => [...educations, newEducation]);
  };

  const experienceHandler = (newExperience) => {
    setExperiences((experiences) => [...experiences, newExperience]);
  };

  const deleteEducationHandler = (id) => {
    const newEducation = educations.filter((ed) => ed.id !== id);
    setEducations(newEducation);
  };

  const deleteExperienceHandler = (id) => {
    const newExperiences = experiences.filter((ex) => ex.id !== id);
    setExperiences(newExperiences);
  };

  return (
    <div className='App'>
      <div className='app-container'>
        <div className='cv-form-container'>
          <General generalHandler={generalHandler} />
          <Education educationHandler={educationHandler} />
          <Experience experienceHandler={experienceHandler} />
        </div>
      </div>
      <div className='app-container'>
        <div className='paper-preview'>
          <GeneralRender general={general} />
          <EducationRender
            educations={educations}
            deleteEducationHandler={deleteEducationHandler}
          />
          <ExperienceRender
            experiences={experiences}
            deleteExperienceHandler={deleteExperienceHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
