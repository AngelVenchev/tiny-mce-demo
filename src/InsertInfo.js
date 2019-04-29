import React, { Component } from 'react';
import Input from './components/Input.js';

const styles = {
  container: {
    margin: '100px 0'
  },
  inputs: {
    display: 'flex', 
    flexDirection: 'column', 
    padding: '0 25%'
  },
  input: {
    margin: '5px',
    borderRadius: '10px'
  }
}

export default class InsertInfo extends Component {
  constructor() {
    super();

    this.state = {
      companyName: '',
      companyOwnerFirstName: '',
      companyOwnerLastName: '',
      companyUIC: ''
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  renderCompanies() {
    return this.props.companies.map(x => <div>{x.companyName}</div>);
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.inputs}>
          <Input 
            name={"companyName"}
            displayName="Име на компанията"
            value={this.state.companyName} 
            onChange={this.handleChange.bind(this)} />
          <Input 
            name="companyOwnerFirstName" 
            displayName="Собственик - Име"
            value={this.state.companyOwnerFirstName} 
            onChange={this.handleChange.bind(this)}
           />
          <Input 
            name="companyOwnerLastName" 
            displayName="Собственик - Фамилия"
            value={this.state.companyOwnerLastName} 
            onChange={this.handleChange.bind(this)}
           />
          <Input 
            name="companyUIC" 
            displayName="Булстат"
            value={this.state.companyUIC} 
            onChange={this.handleChange.bind(this)}
           />
        </div>
        <button onClick={() => this.props.onInsertCompany(this.state)}>Insert</button>
        <div>
          <h2>Компании:</h2>
          <div>
            {this.renderCompanies()}
          </div>
        </div>
      </div>
    );
  }
}
