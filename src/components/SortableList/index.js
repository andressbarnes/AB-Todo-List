import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';
//import FormField from '../InputField';
import NewToDoInput from '../NewToDoInput';
import { SortableItem } from './SortableItem';
import { sortableContainer } from 'react-sortable-hoc';
import arrayMove from 'array-move';

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

  render() {
    const { items } = this.state;

    const listActions = {
      addItem: text => {
        const item = { desc: text, isCompleted: false };
        let newState = this.state.items.slice();
        newState.unshift(item);
        this.setState(prevState => ({
          items: newState
        }));
      },

      removeItem: val => {
        const { index } = val;
        let newArray = [...this.state.items];
        newArray.splice(index, 1);
        this.setState(prevState => ({
          items: newArray
        }));
      },

      updateItem: val => {
        const { index } = val;
        let newArray = [...this.state.items];
        let isCompleted = newArray[index].isCompleted;
        isCompleted ? (isCompleted = false) : (isCompleted = true);
        newArray[index].isCompleted = isCompleted;
        this.setState(prevState => ({
          items: newArray
        }));
      },

      handleChange: event => {
        //console.log(event.target.id);
        let newArray = [...this.state.items];
        newArray[event.target.id].desc = event.target.value;
        this.setState(prevState => ({
          items: newArray
        }));
      }
    };

    return (
      <div>
        <BDiv className='newToDoContainer'>
          <NewToDoInput
            func={listActions}
            className='inputText'
            placeholder='Shit to do...'
          />
        </BDiv>

        <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
          {items.map((value, index) => (
            <SortableItem
              func={listActions}
              key={`item-${index}`}
              rest={index}
              index={index}
              value={value}
            />
          ))}
        </SortableContainer>
      </div>
    );
  }
}

export default SortableList;
