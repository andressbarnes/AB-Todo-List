import React, { Component } from 'react';
import { Button } from 'bootstrap-4-react';
import ListViewer from '../../components/ListViewer';

class App extends Component {
  state = {
    people: [
      {
        name: 'Andy',
        age: 37,
        quote: 'This is my quote',
        hobbies: ['Basketball', 'art', 'Drone racing']
      },
      {
        name: 'Bob',
        age: 32,
        quote: 'This is another persons quote',
        hobbies: ['Racing', 'Music', 'Dancing']
      }
    ]
  };
  render() {
    const functions = {
      addItem: person => {
        this.setState(prevState => ({
          people: [...prevState.people, person]
        }));
      },

      removeItem: index => {
        let newArray = [...this.state.people];
        newArray.splice(index, 1);
        this.setState({ people: newArray });
      },

      updateItem: index => {}
    };

    const newPerson = {
      name: 'Bob',
      age: 32,
      quote: 'something else',
      hobbies: ['Racing', 'Music', 'Dancing']
    };

    return (
      <div className='App p-2'>
        <ListViewer data={this.state} {...functions} />
        <Button
          className='bg-primary text-white'
          onClick={() => {
            functions.addItem(newPerson);
          }}
        >
          Add Item
        </Button>
      </div>
    );
  }
}

export default App;
