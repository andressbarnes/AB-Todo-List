import React from 'react';
import { InputGroup, Form } from 'bootstrap-4-react';
import ActionButton from '../ActionButton';

const NewToDoInput = props => {
  const { func } = props;
  return (
    <InputGroup mb='3'>
      <Form.Input type='text' />
      <InputGroup.Append>
        <ActionButton action={func.addItem} icon='plus' color={'primary'} />
      </InputGroup.Append>
    </InputGroup>
  );
};

export default NewToDoInput;
