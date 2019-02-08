import React, { Component } from 'react';
import { BDiv, Form, Button, Col, Row } from 'bootstrap-4-react';

class listViewer extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(this.props.data);
    let newArray = [...this.props.data.people];
    newArray[event.target.id].quote = event.target.value;
    this.setState({ people: newArray[event.target.id] });
  }

  render() {
    const { data, ...func } = this.props;

    const items = data.people.map((el, i) => (
      <Col lg='12' key={i}>
        <BDiv
          display='flex'
          justifyContent='between'
          className='bg-warning mb-1 p-1'
        >
          <div className='text-white m-1 p-1'>{el.name}</div>
          <Form.Input
            id={i}
            sm
            className='m-1'
            placeholder='Default input'
            value={el.quote}
            type='text'
            onChange={this.handleChange}
          />
          <Button
            className='bg-danger text-white m-1 p-1'
            onClick={() => {
              func.removeItem(i);
            }}
          >
            remove
          </Button>
        </BDiv>
      </Col>
    ));

    return <Row>{items}</Row>;
  }
}

export default listViewer;
