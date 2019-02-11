import React from 'react';
import { Form } from 'bootstrap-4-react';

const InputField = props => {
  const { text, ...custom } = props;
  return (
    <Form.Input
      sm
      id={custom.id}
      className='m-1 inputToDo'
      placeholder='Shit to do...'
      value={text}
      type='text'
      onChange={custom.onChange}
      htmlDisabled
    />
  );
};

export default InputField;
