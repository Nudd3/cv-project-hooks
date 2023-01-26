import React, {useState} from 'react';

const General = props => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleChange = e => {
    const target = e.target;
    const name = target.name;
    setFirstName(firstName);
  }

}
