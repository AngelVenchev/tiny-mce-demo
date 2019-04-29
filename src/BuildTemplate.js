import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/silver/theme';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';
import 'tinymce/skins/content/default/content.css';
import 'tinymce/plugins/template';
import 'tinymce-mention';
import 'tinymce-mention/css/rte-content.css';
import 'tinymce-mention/css/autocomplete.css';
import Input from './components/Input.js';

import { Editor } from '@tinymce/tinymce-react';

export default class BuildTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      templateName: ''
    }
    this.editor = null;
    this.printContent = this.printContent.bind(this);
    this.initEditor = this.initEditor.bind(this);

    this.init = {
      height : "350px",
      plugins: "mention",
      mentions: {
        source: [
          { 
            name: 'Страна 1 - Име на компанията',
            property: 'side1companyName'
          }, 
          { 
            name: 'Страна 1 - Собственик - Име',
            property: 'side1companyOwnerFirstName'
          },
          { 
            name: 'Страна 1 - Собственик - Фамилия',
            property: 'side1companyOwnerLastName'
          },
          { 
            name: 'Страна 1 - Булстат',
            property: 'side1companyUIC'
          },
          { 
            name: 'Страна 2 - Име на компанията',
            property: 'side2companyName'
          }, 
          { 
            name: 'Страна 2 - Собственик - Име',
            property: 'side2companyOwnerFirstName'
          },
          { 
            name: 'Страна 2 - Собственик - Фамилия',
            property: 'side2companyOwnerLastName'
          },
          { 
            name: 'Страна 2 - Булстат',
            property: 'side2companyUIC'
          },
          { 
            name: 'Днешна дата',
            property: 'dateNow'
          },
        ],
        insert: function(item) {
          return `{$${item.property}}`
        }
      }
    }
  }

  printContent() {
    var template = {
      name: this.state.templateName,
      content: this.editor.getContent()
    }
    this.props.onInsertTemplate(template);
  }

  initEditor(event, ref) {
    this.editor = ref;
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  renderTemplates() {
    return this.props.templates.map(x => <div>{x.name}</div>);
  }

  render() {
    return (
      <div>
        <Input 
          name="templateName"
          onChange={this.handleChange.bind(this)}
          displayName="Име на Темплейт"
          value={this.state.templateName} 
        />
        <Editor
          style={{height: '600px'}}
          apiKey='hwjgvgigz3ijbarzkmw8081gddz0o1ll29tgrninsan0ocs2' 
          init={this.init}
          onInit={this.initEditor}/>
        <button onClick={this.printContent}>Запази</button>
        <div>
          <h2>Темплейти:</h2>
          <div>
            {this.renderTemplates()}
          </div>
        </div>
      </div>
    );
  }
}
