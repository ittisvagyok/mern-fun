import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
//import { Form } from "react-bootstrap/lib/Navbar";
import Form from 'react-bootstrap/Form';

class ModifyModal extends Component {
  constructor(props) {
    super(props);
  }

//    state = {
//      isOpen: true
//    };

  render() {
    console.log(this.props.data);
    //let data = this.props.data;

    return(
      <Modal show={this.props.show} onHide={this.props.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Modify Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    autoFocus
                    defaultValue={this.props.data.title}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Label>Ammount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Ammount"
                    defaultValue={this.props.data.ammount}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select>
                    <option value="1" selected>Opt 1</option>
                    <option value="2">Opt 2</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="light" onClick={this.props.closeModal}>Cancel</Button>
              <Button variant="success" onClick={this.props.closeModal}>Save</Button>
            </Modal.Footer>
          </Modal>
    );
  }
}

export default ModifyModal;