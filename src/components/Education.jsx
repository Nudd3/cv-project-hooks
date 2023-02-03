import React, { useState } from 'react';
import '../styles/education.scss';
import uniqid from 'uniqid';

const Education = (props) => {
  const [education, setEducation] = useState({
    schoolName: '',
    studyTitle: '',
    city: '',
    startYear: '',
    endYear: '',
  });

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    setEducation((education) => ({ ...education, [name]: target.value }));
  };

  const onSubmitEducation = (e) => {
    e.preventDefault();

    props.educationHandler({ ...education, id: uniqid() });
    setEducation({
      schoolName: '',
      studyTitle: '',
      city: '',
      startYear: '',
      endYear: '',
    });
  };

  return (
    <form className='education-form' onSubmit={onSubmitEducation}>
      <h1 className='section-title'>Education</h1>
      <input
        className='form-input'
        type='text'
        name='schoolName'
        id='schoolName'
        value={education.schoolName}
        onChange={handleChange}
        placeholder='School Name'
      />
      <input
        className='form-input'
        type='text'
        name='studyTitle'
        id='studyTitle'
        value={education.studyTitle}
        onChange={handleChange}
        placeholder='Study Title'
      />

      <input
        className='form-input'
        type='text'
        name='city'
        id='city'
        value={education.city}
        onChange={handleChange}
        placeholder='City'
      />

      <input
        className='form-input'
        type='number'
        name='startYear'
        id='startYear'
        value={education.startYear}
        onChange={handleChange}
        placeholder='Start Year'
      />
      <input
        className='form-input'
        type='number'
        name='endYear'
        id='endYear'
        value={education.endYear}
        onChange={handleChange}
        placeholder='End Year'
      />
      <button className='add-btn' type='submit'>
        Add Education
      </button>
    </form>
  );
};

export default Education;
