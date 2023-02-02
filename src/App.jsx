import { useState } from 'react';

import General from './components/General';
import GeneralRender from './components/GeneralRender';
import Education from './components/Education';
import EducationRender from './components/EducationRender';
import Experience from './components/Experience';
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
  const [experiences, setExperience] = useState([]);

  const generalHandler = (type, info) => {
    setGeneral((general) => ({
      ...general,
      [type]: info,
    }));
  };

  const educationHandler = (newEducation) => {
    setEducations(educations => [...educations, newEducation]);
  }

  const experienceHandler = (newExperience) => {
    setExperience
  }

  const deleteEducationHandler = id => {
    const newEducation = educations.filter(ed => ed.id !== id);
    setEducations(newEducation);
  }

  return (
    <div className='App'>
      <div className='app-container'>
        <div className='cv-form-container'>
          <General generalHandler={generalHandler} /*general={general}*/General/>
          <Education educationHandler={educationHandler}/>
          <Experience />
        </div>
      </div>
      <div className='app-container'>
        <div className='paper-preview'>
          <GeneralRender general={general} />
          <EducationRender educations={educations} deleteEducationHandler={deleteEducationHandler} />
        </div>
      </div>
    </div>
  );
};

export default App;
