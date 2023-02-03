import React from 'react';

const EducationRender = props => {


  return (
    <div className='education-preview'>
        <div className='container'>
          <h1 className='preview-title'>Education</h1>

          {props.educations?.map((education) => {
            return (
              <div key={education.id} className='education-container delete-btn-div'>
                <div className='education-upper'>
                  <div className='title-container'>
                    <h1 className='school-name'>{education.schoolName}</h1>
                    <button
                      className='visible'
                      onClick={() => props.deleteEducationHandler(education.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <h1>{education.city}</h1>
                </div>
                <div className='education-lower'>
                  <h1>{education.studyTitle}</h1>
                  <h1>
                    {education.startYear} - {education.endYear}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  )

}

export default EducationRender;