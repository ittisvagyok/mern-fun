import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import ModifyModal from './ModifyModal';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class ExpenseTable extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  state = {
    isOpen: false,
    data: {}
  };  

  openModal = (element, e) => {
    this.setState({ 
      isOpen: true,
      data: element
    });
  }
  
  closeModal = () => this.setState({ 
    isOpen: false,
    data: {}
   });

  handleDelete(_id, e){
    this.props.handleDelete(_id, e);
  }

  render () {
      //console.log(this.props.expensesData);      
      return(        
        <>
          <ModifyModal show={this.state.isOpen} closeModal={this.closeModal} data={this.state.data}/>          
          <Table hover responsive>
            <thead>
              <tr>
                <th>#
                </th>
                <th>Title
                </th>
                <th>Ammount
                </th>
                <th>Category
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.expensesData.map((element, index) => {                
                //console.log(element);
                return(
                  <tr key={element._id}>
                    <td>{index + 1}</td>
                    <td>{element.title}</td>
                    <td>{element.ammount}</td>
                    <td>{element.category ? element.category.title : <i>Uncategorized</i>}</td>
                    <td><i className="bi bi-pencil-square px-2" onClick={(e) => this.openModal(element, e)}/></td>
                    <td><i className="bi bi-x-square px-2" onClick={(e) => this.handleDelete(element._id, e)} /></td>
                  </tr>
                );
              })}      
            </tbody>
          </Table>
        </>
      );
  }
}

export default ExpenseTable;