import React from 'react';
import '../styles/general.scss';

const General = (props) => {
  const handleChange = (e) => {
    const target = e.target;
    const name = target.value;

    props.generalHandler(e.target.name, name);
  };

  return (
    <form className='general-form'>
      <h1>General Information</h1>
      <input
        className='form-input'
        name='firstName'
        type='text'
        id='firstName'
        // value={props.general.firstName}
        onChange={handleChange}
        placeholder='First Name'
      />
      <input
        className='form-input'
        name='lastName'
        type='text'
        id='lastName'
        // value={props.general.firstName}
        onChange={handleChange}
        placeholder='Last Name'
      />
      <input
        className='form-input'
        name='email'
        type='email'
        id='email'
        // value={props.general.firstName}
        onChange={handleChange}
        placeholder='Email'
      />
      <input
        className='form-input'
        name='phone'
        type='tel'
        id='phone'
        // value={props.general.firstName}
        onChange={handleChange}
        placeholder='Phone Number'
      />
      <input
        className='form-input'
        name='linkedIn'
        type='text'
        id='linkedIn'
        // value={props.general.firstName}
        onChange={handleChange}
        placeholder='LinkedIn'
      />
      <input
        className='form-input'
        name='gitHub'
        type='text'
        id='gitHub'
        // value={props.general.firstName}
        onChange={handleChange}
        placeholder='GitHub'
      />
    </form>
  );
};

export default General;
