import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InsertInfo from './InsertInfo.js';
import BuildTemplate from './BuildTemplate.js';
import InsertTemplate from './InsertTemplate.js';

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
      companies: [],
      templates: []
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
      return <InsertInfo onInsertCompany={this.onInsertCompany.bind(this)} companies={this.state.companies} />
      case 1:
      return <BuildTemplate onInsertTemplate={this.onInsertTemplate.bind(this)} templates={this.state.templates} />
      case 2:
      return <InsertTemplate info={this.state.info} templates={this.state.templates} />
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
          <button style={styles.button} onClick={() => this.setState({demoStep: 0})} >Step 1</button>
          <button style={styles.button} onClick={() => this.setState({demoStep: 1})} >Step 2</button>
          <button style={styles.button} onClick={() => this.setState({demoStep: 2})} >Step 3</button>
        </div>
      </div>
    );
  }
}
