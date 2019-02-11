import React from 'react';
import { InputGroup, Form } from 'bootstrap-4-react';
import ActionButton from '../ActionButton';

const NewToDoInput = props => {
  const { func } = props;

  const validateToDoItem = e => {
    const inputValue = document.querySelector('#toDoInput');
    const key = e.which || e.keyCode;
    if (key === 13 && inputValue.value !== '') {
      const toDoText = inputValue.value;
      inputValue.value = '';
      func.addItem(toDoText);
    }
  };

  document.addEventListener('keydown', validateToDoItem);

  return (
    <InputGroup mb='3'>
      <Form.Input id='toDoInput' type='text' />
      <InputGroup.Append>
        <ActionButton action={validateToDoItem} icon='plus' color={'primary'} />
      </InputGroup.Append>
    </InputGroup>
  );
};

export default NewToDoInput;
