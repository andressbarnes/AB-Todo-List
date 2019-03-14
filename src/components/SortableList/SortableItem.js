import React from 'react';
import { BDiv } from 'bootstrap-4-react';
import ActionButton from './ActionButton';
import { sortableElement } from 'react-sortable-hoc';
import { DragHandle } from './DragHandle';
export const SortableItem = sortableElement(({ value, func, rest }) => (
  <BDiv
    display='flex'
    justifyContent='between'
    className={`${!value.isCompleted ? 'bg-warning' : 'bg-success'} mb-1`}
  >
    <DragHandle />
    <ActionButton
      buttonType='todo-action-button mr'
      action={func.updateItem}
      uid={value.id}
      icon={value.isCompleted ? 'times' : 'check'}
      index={rest}
    />
    <div
      className={`toDoText ${value.isCompleted ? 'complete' : 'incomplete'}`}
    >
      {value.desc}
    </div>
    <ActionButton
      buttonType='todo-action-button ml'
      action={func.removeItem}
      uid={value.id}
      icon='trash'
      index={rest}
    />
  </BDiv>
));
