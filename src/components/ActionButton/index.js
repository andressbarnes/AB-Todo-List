import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'bootstrap-4-react';

const ActionButton = props => {
  const { icon, action, ...custom } = props;
  return (
    <Button
      sm
      link
      primary={custom.color}
      className={`${custom.buttonType} text-white`}
      onClick={() => action(custom)}
    >
      <FontAwesomeIcon className='fa-lg' icon={icon} />
    </Button>
  );
};

export default ActionButton;
