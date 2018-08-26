import React from 'react';
import $ from 'jquery';
import Form from './Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  render () {
    return (
      <div>
        <h1>Schedule a text to send!</h1>
        <Form />
      </div>
    );
  }
}

export default App;