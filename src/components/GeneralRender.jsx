import React from 'react';

const GeneralRender = props => {

  const {firstName, lastName, email, phone,linkedIn, gitHub} = props.general;

  return (
    <div className='general-preview'>
      <div className="name">
        <h1>{firstName} {lastName}</h1>
      </div>
      <div className="general-container">
        <h2>LinkedIn: {linkedIn}</h2>
        <h2>Email: {email}</h2>
      </div>
      <div className="general-container">
        <h2>Github: {gitHub}</h2>
        <h2>Phone: {phone}</h2>
      </div>
    </div>
  )

}

export default GeneralRender;