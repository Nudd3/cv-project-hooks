import { useState } from 'react';

import General from './components/General';
import GeneralRender from './components/GeneralRender';
import Educational from './components/Educational';
import EducationalRender from './components/EducationalRender';
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
  const [educational, setEducational] = useState([]);
  const [experience, setExperience] = useState([]);

  const generalHandler = (type, info) => {
    setGeneral((general) => ({
      ...general,
      [type]: info,
    }));
  };

  const educationHandler = (newEducation) => {
    console.log(typeof educational)
    setEducational(educational => [...educational, newEducation]);
    console.log(typeof educational)
  };

  const deleteEducationHandler = id => {
    const newEducations = educational.filter(ed => ed.id !== id);
    setEducational(newEducations);
  }
  //const handleEducationalChanage

  return (
    <div className='App'>
      <div className='app-container'>
        <div className='cv-form-container'>
          <General generalHandler={generalHandler} /*general={general}*/General/>
          <Educational educationHandler={educationHandler}/>
          <Experience />
        </div>
      </div>
      <div className='app-container'>
        <div className='paper-preview'>
          <GeneralRender general={general} />
          <EducationalRender educational={educational} deleteEducationHandler={deleteEducationHandler} />
        </div>
      </div>
    </div>
  );
};

export default App;
