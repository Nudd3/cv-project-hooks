import React from 'react';

const GeneralRender = props => {

  return (
    <div>
      <h1>Here comes the first name:</h1>
      {props.general.firstName}
      <h1>Here comes the last name:</h1>
      {props.general.lastName}
      
    </div>
  )

}

export default GeneralRender;