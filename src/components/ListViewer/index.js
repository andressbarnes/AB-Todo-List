import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BDiv, Form, Button, Col, Row } from 'bootstrap-4-react';
import './listViewer.css';

class listViewer extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let newArray = [...this.props.data.people];
    newArray[event.target.id].quote = event.target.value;
    this.setState({ people: newArray[event.target.id] });
  }

  render() {
    const { data, ...func } = this.props;

    let itemsDrag = document.getElementsByClassName('.item');
    [].forEach.call(itemsDrag, col => {
      col.addEventListener('dragstart', handleDragStart, false);
    });

    const handleDragStart = e => {
      this.style.opacity = '0.4'; // this / e.target is the source node.
    };

    const items = data.people.map((el, i) => (
      <Col sm='12' key={i}>
        <BDiv
          display='flex'
          justifyContent='between'
          className={`${
            !el.completed ? 'bg-warning' : 'bg-success'
          } mb-1 p-1 item`}
          draggable='true'
        >
          <Button
            sm
            link
            className='text-white'
            onClick={() => {
              //func.removeItem(i);
            }}
          >
            <FontAwesomeIcon className='fa-lg' icon='grip-lines' />
          </Button>
          <Button
            sm
            link
            className='text-white'
            onClick={() => {
              func.updateItem(i);
            }}
          >
            <FontAwesomeIcon
              className='fa-lg'
              icon={`${el.completed ? 'times' : 'check'}`}
            />
          </Button>
          <Form.Input
            id={i}
            sm
            className='m-1'
            placeholder='Shit to do...'
            value={el.quote}
            type='text'
            onChange={this.handleChange}
          />
          <Button
            sm
            link
            className='text-white'
            onClick={() => {
              func.removeItem(i);
            }}
          >
            <FontAwesomeIcon className='fa-lg' icon='trash' />
          </Button>
        </BDiv>
      </Col>
    ));

    return <Row>{items}</Row>;
  }
}

export default listViewer;
