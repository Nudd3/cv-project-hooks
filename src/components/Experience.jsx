import React from 'react';
import '../styles/experience.scss'
const Experience = props => {

  const onSubmitExperience = (e) => {
    
    e.preventDefault();
    
    for(let i = 0; i < e.target.length; i++){
      console.log(e.target[i].value);
    }
  }

  return (
    <form className='experience-form' onSubmit={onSubmitExperience}>
          <h1 className='section-title'>Experience</h1>
          <input
            className='form-input'
            type='text'
            // value={companyName}
            id='companyName'
            name='companyName'
            // onChange={this.handleChange}
            placeholder='Company Name'
          />

          <input
            className='form-input'
            type='text'
            // value={position}
            id='position'
            name='position'
            // onChange={this.handleChange}
            placeholder='Position'
          />

          <input
            className='form-input'
            type='text'
            // value={tasks}
            id='tasks'
            name='tasks'
            // onChange={this.handleChange}
            placeholder='Tasks'
          />
          <input
            className='form-input'
            type='number'
            // value={startYear}
            id='startYear'
            name='startYear'
            // onChange={this.handleChange}
            placeholder='Start Year'
          />

          <input
            className='form-input'
            type='number'
            // value={endYear}
            id='endYear'
            name='endYear'
            // onChange={this.handleChange}
            placeholder='End Year'
          />
          <button className='add-btn' type='submit'>
            Add Experience
          </button>
        </form>
  )
}

export default Experience;