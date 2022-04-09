import React, { Component } from "react";
import Table from 'react-bootstrap/Table';

class ExpenseTable extends Component {
  constructor(props) {
    super(props);
  }

  resToArray (data) {
    let newArray = JSON.parse(data);    
    return(newArray);
  }

  render () {
      //console.log(this.resToArray(this.props.expensesData));      
      return(
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
            {this.resToArray(this.props.expensesData).map((element, index) => {                
              console.log(element);
              return(
                <tr key={element._id}>
                  <td>{index + 1}</td>
                  <td>{element.title}</td>
                  <td>{element.ammount}</td>
                  <td>{element.category ? element.category.title : <i>Uncategorized</i>
                  }
                  </td>
                </tr>
              );
            })}            
          </tbody>
        </Table>
      );
  }
}

export default ExpenseTable;