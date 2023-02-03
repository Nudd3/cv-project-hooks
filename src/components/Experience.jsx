import React, { useState } from 'react';
import '../styles/experience.scss';
import uniqid from 'uniqid';

const Experience = (props) => {
  const [experience, setExperience] = useState({
    companyName: '',
    position: '',
    tasks: '',
    startYear: '',
    endYear: '',
  });

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    setExperience((experience) => ({ ...experience, [name]: target.value }));
  };

  const onSubmitExperience = (e) => {
    e.preventDefault();

    props.experienceHandler({ ...experience, id: uniqid() });

    setExperience({
      companyName: '',
      position: '',
      tasks: '',
      startYear: '',
      endYear: '',
    });
  };

  return (
    <form className='experience-form' onSubmit={onSubmitExperience}>
      <h1 className='section-title'>Experience</h1>
      <input
        className='form-input'
        type='text'
        value={experience.companyName}
        id='companyName'
        name='companyName'
        onChange={handleChange}
        placeholder='Company Name'
      />

      <input
        className='form-input'
        type='text'
        value={experience.position}
        id='position'
        name='position'
        onChange={handleChange}
        placeholder='Position'
      />

      <input
        className='form-input'
        type='text'
        value={experience.tasks}
        id='tasks'
        name='tasks'
        onChange={handleChange}
        placeholder='Tasks'
      />
      <input
        className='form-input'
        type='number'
        value={experience.startYear}
        id='startYear'
        name='startYear'
        onChange={handleChange}
        placeholder='Start Year'
      />

      <input
        className='form-input'
        type='number'
        value={experience.endYear}
        id='endYear'
        name='endYear'
        onChange={handleChange}
        placeholder='End Year'
      />
      <button className='add-btn' type='submit'>
        Add Experience
      </button>
    </form>
  );
};

export default Experience;
