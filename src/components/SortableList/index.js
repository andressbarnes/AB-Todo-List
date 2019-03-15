import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BDiv } from 'bootstrap-4-react';

import { sortableContainer } from 'react-sortable-hoc';
import { addTodo, removeTodo, updateTodo, updateOrder } from '../../actions';

//custom elements
import { NewToDoInput } from './NewToDoInput';
import { SortableItem } from './SortableItem';

//styles
require('./icons');
require('./index.css');

const SortableContainer = sortableContainer(({ children }) => {
  return <div>{children}</div>;
});

class SortableList extends Component {
  constructor(props) {
    super(props);
    this.updateOrder = this.props.updateOrder;
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const data = {
      items: this.props.items,
      oldIndex: oldIndex,
      newIndex: newIndex
    };
    this.updateOrder(data);
  };

  render() {
    const { items, removeTodo, addTodo, updateTodo } = this.props;

    const listActions = {
      addItem: text => {
        addTodo(text);
      },

      removeItem: val => {
        removeTodo(val);
      },

      updateItem: val => {
        updateTodo(val);
      },

      handleChange: event => {
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

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: id => {
      dispatch(removeTodo(id));
    },
    addTodo: text => {
      dispatch(addTodo(text));
    },
    updateTodo: id => {
      dispatch(updateTodo(id));
    },
    updateOrder: data => {
      dispatch(updateOrder(data));
    }
  };
};

const mapStateToProps = state => {
  const { todosReducer } = state;
  return {
    items: todosReducer.items
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortableList);
