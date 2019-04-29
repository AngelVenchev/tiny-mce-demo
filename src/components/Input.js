import React, { Component } from 'react';

const styles = {
  input: {
    margin: '5px',
    borderRadius: '5px'
  }
}

export default class Input extends Component {
  render() {
    return (
      <div>
        <div>
          <label htmlFor={this.props.name}>{this.props.displayName}</label>
        </div>
        <div>
          <input 
            style={styles.input} 
            name={this.props.name}
            type="text"
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}
