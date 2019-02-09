import React, { Component } from 'react';
import { Button, Container } from 'bootstrap-4-react';
import ListViewer from '../../components/ListViewer';
require('../../icons');

class App extends Component {
  state = {
    people: [
      {
        name: 'Andy',
        age: 37,
        quote: 'This is my quote',
        hobbies: ['Basketball', 'art', 'Drone racing'],
        completed: false
      },
      {
        name: 'Bob',
        age: 32,
        quote: 'This is another persons quote',
        hobbies: ['Racing', 'Music', 'Dancing'],
        completed: false
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

      updateItem: index => {
        let newArray = [...this.state.people];
        let isCompleted = newArray[index].completed;
        isCompleted ? (isCompleted = false) : (isCompleted = true);
        newArray[index].completed = isCompleted;
        this.setState({ people: newArray });
      }
    };

    const newPerson = {
      name: 'Bob',
      age: 32,
      quote: '',
      hobbies: ['Racing', 'Music', 'Dancing'],
      completed: false
    };

    return (
      <Container mt='2'>
        <ListViewer data={this.state} {...functions} />
        <Button
          className='bg-primary text-white'
          onClick={() => {
            functions.addItem(newPerson);
          }}
        >
          Add Item
        </Button>
      </Container>
    );
  }
}

export default App;
