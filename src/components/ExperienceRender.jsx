import React from 'react';

const ExperienceRender = (props) => {
  return (
    <div className='experience-preview'>
      <div className='container'>
        <h1 className='preview-title'>Experience</h1>

        {props.experiences?.map((experience) => {
          return (
            <div key={experience.id} className='experience-container delete-btn-div'>
              <div className='experience-upper'>
                <div className='title-container'>
                  <h1 className='company-name'>{experience.companyName}</h1>
                  <button
                    className='visible'
                    onClick={() => props.deleteExperienceHandler(experience.id)}
                  >
                    Delete
                  </button>
                </div>
                <h1>{experience.position}</h1>
              </div>
              <div className="experience-lower">
                <h1>{experience.tasks}</h1>
                <h1>{experience.startYear} - {experience.endYear}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceRender;