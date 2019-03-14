import React, { Component } from 'react';
import { Container } from 'bootstrap-4-react';
import SortableList from '../../components/SortableList';
import { Helmet } from 'react-helmet';

class App extends Component {
  render() {
    return (
      <Container mt='2' p='1' shadow bg='white'>
        <Helmet>
          <style>{'body { background-color: #d2e6ec; }'}</style>
        </Helmet>
        <SortableList />
      </Container>
    );
  }
}

export default App;
