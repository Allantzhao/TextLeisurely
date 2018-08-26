import React from 'react';
import NumberFormat from 'react-number-format';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      message: '',
      date: '',
    }

  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Phone number: {' '}
        </label>
        <br />
        <label>
          Message: {' '}
        </label>
        <br />
        <label>
          Choose when to send this message: {' '}
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;