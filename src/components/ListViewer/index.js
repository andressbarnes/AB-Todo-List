import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BDiv, Form, Button, Col, Row } from 'bootstrap-4-react';
import './listViewer.css';

class listViewer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  addListeners() {
    //do things
  }

  componentDidMount() {
    this.addListeners();
  }

  componentDidUpdate() {
    this.addListeners();
  }

  handleChange(event) {
    let newArray = [...this.props.data.people];
    newArray[event.target.id].quote = event.target.value;
    this.setState({ people: newArray[event.target.id] });
  }

  render() {
    const { data, ...func } = this.props;

    const items = data.items.map((el, i) => (
      <Col sm='12' key={i}>
        <BDiv
          draggable='true'
          data-id={`00${i}`}
          display='flex'
          justifyContent='between'
          className={`item ${
            !el.completed ? 'bg-warning' : 'bg-success'
          } mb-1 p-1`}
        >
          <Button sm link className='text-white dragButton'>
            <FontAwesomeIcon className='passthrough fa-lg' icon='grip-lines' />
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
            className='m-1 inputToDo'
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
