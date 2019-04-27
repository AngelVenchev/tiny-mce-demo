import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Editor } from '@tinymce/tinymce-react';

class App extends Component {
constructor() {
  super();

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
    plugins: "template",
    // menubar: "insert",
    // toolbar: "template",
    templates: [{title: 'Договор', description: 'Някакъв си договор', content: templateContent}],
    template_replace_values: values
  }
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Editor apiKey='hwjgvgigz3ijbarzkmw8081gddz0o1ll29tgrninsan0ocs2' init={this.init} />
      </div>
    );
  }
}

export default App;
