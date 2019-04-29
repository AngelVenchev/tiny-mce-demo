import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      side1: -1,
      side2: -1
    }
  }

  initEditor(event, ref) {
    setTimeout(() => {
      document.getElementsByClassName('tox-mbtn__select-label')[3].click();
      setTimeout(() => {
        document.getElementsByClassName('tox-collection__item-label')[0].click()
      }, 125);
    }, 100);
  }

  getEditorOptions() {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var values = {
      dateNow: new Date().toLocaleDateString('bg-BG', options),
    };

    Object.keys(this.props.companies[this.state.side1]).forEach(key => {
      values['side1' + key] = this.props.companies[this.state.side1][key];
    });

    Object.keys(this.props.companies[this.state.side2]).forEach(key => {
      values['side2' + key] = this.props.companies[this.state.side2][key];
    });

    console.log(values);

    var editorOptions = {
      plugins: "template",
      templates: this.props.templates.map(x => ({title: x.name, content: x.content, description: ''})),
      template_replace_values: values,
      height : "350px"
    }

    return editorOptions;
  }

  renderWizard() {
    if(this.state.side1 >= 0 && this.state.side2 >= 0) {
        return <Editor
          apiKey='hwjgvgigz3ijbarzkmw8081gddz0o1ll29tgrninsan0ocs2' 
          init={this.getEditorOptions.apply(this)}
          onInit={this.initEditor.bind(this)}/>
    } else {
      return (<div>
        <select value={this.state.side1} onChange={(event) => this.setState({side1: event.target.value})}>
          <option value={-1}>Изберете страна 1</option>
          {this.props.companies.map((c, i) => <option value={i}>{c.companyName}</option>)}
        </select>
        <select value={this.state.side2} onChange={(event) => this.setState({side2: event.target.value})}>
          <option value={-1}>Изберете страна 2</option>
          {this.props.companies.map((c, i) => <option value={i}>{c.companyName}</option>)}
        </select>
      </div>)
    }
  }

  render() {
    return (
      <div>
        {this.renderWizard()}
      </div>
    );
  }
}

export default App;
