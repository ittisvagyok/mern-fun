import React, { Component } from "react";
//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.css';
import Button from 'react-bootstrap/Button';
import ExpenseTable from './components/ExpenseTable'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: '[]' };    
  }

  callApi() {
    fetch("http://localhost:5000/expense")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }
  

  componentDidMount() {
    this.callApi();
  }

  render() {

    return (
      <div className="container-fluid">
        <div className="App">
          <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <h1>Expense table</h1>
          </header>
          <div className="content">
            <ExpenseTable expensesData={this.state.apiResponse} />
          </div>
            <Button variant="success" className="btn-lg">kljsad</Button>{' '}
          
        </div>
      </div>
    );
  }
}

export default App;
