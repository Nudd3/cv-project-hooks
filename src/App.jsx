import { useState } from 'react'

import './App.css'

const App = () => {

  const [general, setGeneral] = useState([]);
  const [educational, setEducational] = useState([]);
  const [experience, setExperience] = useState([]);

  const handleGeneral = (information) => {
    setGeneral(information);
  }  


  return (
    <div className="App">
      <div className="app-container">
        <div className="cv-form">
          <General firstNameHandler={firstNameHandler} />
        </div>
        <div className="app-container">
          <div className="paper-preview">

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
