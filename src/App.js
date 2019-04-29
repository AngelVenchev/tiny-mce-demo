import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InsertInfo from './InsertInfo.js';
import InsertTemplate from './InsertTemplate.js';
import BuildTemplate from './BuildTemplate.js';

const styles = {
  wizardSteps: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
    textAlign: 'center'
  }, 
  button: {
    margin: '5px'
  }
}

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      demoStep: 0,
      companies: [{
        companyName: 'Компания 1',
        companyOwnerFirstName: 'Иван',
        companyOwnerLastName: 'Попов',
        companyUIC: '123456789'
      }, {
        companyName: 'Компания 2',
        companyOwnerFirstName: 'Крум',
        companyOwnerLastName: 'Иванов',
        companyUIC: '987654321'
      }],
      templates: [{
        name: "Тестови темплейт с 2 страни",
        content: `<p>Днес на {$dateNow} компаниите {$side1companyName} и {$side2companyName} 
        със собстевници в лицата на {$side1companyOwnerFirstName} {$side1companyOwnerLastName} и 
        {$side2companyOwnerFirstName} {$side2companyOwnerLastName}</p><p>Край</p>`
      }]
    }
  }

  onInsertCompany(company) {
    var companies = this.state.companies.concat([company]);
    this.setState({companies});
  }

  onInsertTemplate(template) {
    var templates = this.state.templates.concat([template]);
    this.setState({templates});
  }

  renderDemoStep(step) {
    switch(step) {
      case 0:
      return <InsertInfo 
        onInsertCompany={this.onInsertCompany.bind(this)} 
        companies={this.state.companies} 
        />
      case 1:
      return <BuildTemplate 
        onInsertTemplate={this.onInsertTemplate.bind(this)}
        templates={this.state.templates} 
        companies={this.state.companies}
        />
      case 2:
      return <InsertTemplate companies={this.state.companies} templates={this.state.templates} />
      default:
      return null;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        {this.renderDemoStep(this.state.demoStep)}
        <div style={styles.wizardSteps}>
          <button style={styles.button} onClick={() => this.setState({demoStep: 0})} >Стъпка 1</button>
          <button style={styles.button} onClick={() => this.setState({demoStep: 1})} >Стъпка 2</button>
          <button style={styles.button} onClick={() => this.setState({demoStep: 2})} >Стъпка 3</button>
        </div>
      </div>
    );
  }
}
