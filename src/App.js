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

import { Editor } from '@tinymce/tinymce-react';

class App extends Component {
  constructor() {
    super();

    this.editor = null;
    this.printContent = this.printContent.bind(this);
    this.initEditor = this.initEditor.bind(this);
    var templateContent = `
      Днес, {$date} в гр. {$city} се подписа настоящият договор за сътрудничество и съвместна дейност между: фирма "{$companyName}", представлявана от {$companyOwner}, с търговски адрес {$address}, от една страна и фирма {$companyName2}, представлявана от {$companyOwner2}, с търговски адрес {$address2}, от друга страна. 
      <p>СТРАНИТЕ СЕ СПОРАЗУМЯХА ЗА СЛЕДНОТО:</p>`

    var options = { year: 'numeric', month: 'long', day: 'numeric' };

    var values = {
      date: new Date().toLocaleDateString('bg-BG', options),
      city: "Пазарджик",
      companyName: "Венчев Консултинг ЕООД",
      companyOwner: "Ангел Венчев",
      companyName2: "САРА Консулт",
      companyOwner2: "Стефка Венчева",
      address: "ул. Янтра 14, ет 4, ап. 8",
      address2: "ул. Янтра 14, ет 4, ап. 8"
    }

    this.init = {
      plugins: "mention, template",
      // menubar: "insert",
      // toolbar: "template",
      templates: [{title: 'Договор', description: 'Някакъв си договор', content: templateContent}],
      template_replace_values: values,
      mentions: {
        source: [
            { name: 'Company name',
              property: 'companyName' }, 
            { name: 'Employee name',
              property: 'employeeName' },
            { name: 'UCN/UIC',
              property: 'ucnUic' },
            { name: 'IBAN',
              property: 'iban' }
        ],
        insert: function(item) {
          return `{$${item.property}}`
        }
      }
    }
  }

  printContent() {
    console.log("Template: ", this.editor.getContent())
  }

  initEditor(event, ref) {
    this.editor = ref;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Editor
          apiKey='hwjgvgigz3ijbarzkmw8081gddz0o1ll29tgrninsan0ocs2' 
          init={this.init}
          onInit={this.initEditor}/>
        <button onClick={this.printContent}>Print Template</button>
      </div>
    );
  }
}

export default App;
