import { useState } from 'react';

import General from './components/General';
import GeneralRender from './components/GeneralRender';
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

  //const handleEducationalChanage

  return (
    <div className='App'>
      <div className='app-container'>
        <div className='cv-form-container'>
          <General generalHandler={generalHandler} general={general} />
        </div>
      </div>
      <div className='app-container'>
        <div className='paper-preview'>
          <GeneralRender general={general} />
        </div>
      </div>
    </div>
  );
};

export default App;
