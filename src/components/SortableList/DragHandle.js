import React from 'react';
import { sortableHandle } from 'react-sortable-hoc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const DragHandle = sortableHandle(() => (
  <div className='dragHandle'>
    <FontAwesomeIcon className='fa-lg' icon='grip-lines' />
  </div>
));
