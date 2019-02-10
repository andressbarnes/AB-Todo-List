import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BDiv, Button } from 'bootstrap-4-react';
import ActionButton from '../ActionButton';
import FormField from '../InputField';
import {
  sortableContainer,
  sortableElement,
  sortableHandle
} from 'react-sortable-hoc';
import arrayMove from 'array-move';

const DragHandle = sortableHandle(() => (
  <Button sm link className='text-white'>
    <FontAwesomeIcon className='fa-lg' icon='grip-lines' />
  </Button>
));

const SortableItem = sortableElement(({ value, func, rest }) => (
  <BDiv
    display='flex'
    justifyContent='between'
    className={`${!value.isCompleted ? 'bg-warning' : 'bg-success'} mb-1 p-1`}
  >
    <DragHandle />
    <ActionButton
      action={func.updateItem}
      icon={value.isCompleted ? 'times' : 'check'}
      index={rest}
    />
    <FormField
      sm
      text={value.desc}
      id={rest}
      onChange={func.handleChange}
      placeholder='Shit to do...'
    />
    <ActionButton action={func.removeItem} icon='trash' index={rest} />
  </BDiv>
));

const SortableContainer = sortableContainer(({ children }) => {
  return <div>{children}</div>;
});

class SortableList extends Component {
  state = {
    items: [
      { desc: 'Walk the dog', isCompleted: false },
      { desc: 'Clean the bathroom', isCompleted: false },
      { desc: 'Wash the car', isCompleted: true },
      { desc: 'Take out the trash', isCompleted: false },
      { desc: 'Pick up the kids at 3pm', isCompleted: false },
      { desc: 'Cook dinner', isCompleted: false }
    ]
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex)
    }));
  };

  addItem = () => {
    const item = { desc: '', isCompleted: false };
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }));
  };

  render() {
    const { items } = this.state;

    const functions = {
      removeItem: val => {
        const { index } = val;
        let newArray = [...this.state.items];
        newArray.splice(index, 1);
        this.setState({ items: newArray });
      },

      updateItem: val => {
        const { index } = val;
        let newArray = [...this.state.items];
        let isCompleted = newArray[index].isCompleted;
        isCompleted ? (isCompleted = false) : (isCompleted = true);
        newArray[index].isCompleted = isCompleted;
        this.setState({ item: newArray });
      },

      handleChange: event => {
        //console.log(event.target.id);
        let newArray = [...this.state.items];
        newArray[event.target.id].desc = event.target.value;
        this.setState({ items: newArray });
      }
    };

    return (
      <div>
        <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
          {items.map((value, index) => (
            <SortableItem
              func={functions}
              key={`item-${index}`}
              rest={index}
              index={index}
              value={value}
            />
          ))}
        </SortableContainer>
        <ActionButton action={this.addItem} icon='plus' color={'primary'} />
      </div>
    );
  }
}

export default SortableList;
