import React, { Component } from 'react';
import { Container } from 'bootstrap-4-react';
import SortableList from '../../components/SortableList';
require('../../icons');

class App extends Component {
  render() {
    return (
      <Container mt='2'>
        {/* <ListViewer data={this.state} {...functions} /> */}
        <SortableList data={this.state} />
      </Container>
    );
  }
}

export default App;
