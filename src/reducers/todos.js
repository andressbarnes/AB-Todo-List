import initialState from './initialState';
import _ from 'lodash';

function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
}

const todosReducer = (state = [initialState], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let addItem = {
        id: _.uniqueId('todo'),
        desc: action.text,
        isCompleted: false
      };
      let newItems = [addItem, ...state.items];
      return {
        ...state,
        items: newItems
      };

    case 'REMOVE_TODO':
      let itemsRemove = [...state.items];
      const rmIndex = itemsRemove.findIndex(x => x.id === action.id);
      itemsRemove.splice(rmIndex, 1);
      return {
        ...state,
        items: itemsRemove
      };

    case 'UPDATE_TODO':
      let itemsUpdate = [...state.items];
      const chIndex = itemsUpdate.findIndex(x => x.id === action.id);
      itemsUpdate[chIndex].isCompleted = !itemsUpdate[chIndex].isCompleted;

      return {
        ...state,
        items: itemsUpdate
      };

    case 'UPDATE_ORDER':
      let newAry = [...state.items];

      newAry = array_move(
        action.data.items,
        action.data.oldIndex,
        action.data.newIndex
      );

      console.log(newAry);

      return {
        ...state,
        items: [...newAry]
      };

    default:
      return state;
  }
};

export default todosReducer;
