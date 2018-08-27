import React from 'react';
import NumberFormat from 'react-number-format';
import $ from 'jquery';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      message: '',
      sendAt: '',
      sendDaily: true,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.value) {
        this.setState({
          phoneNumber: event.value
        });
      } else {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      
      this.setState({
        [name]: value
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    alert(`Your message will be sent to ${this.state.phoneNumber} at ${this.state.sendAt}`);

    $.ajax({
      method: "POST",
      url: '/texts',
      data: {
        phoneNumber: this.state.phoneNumber,
        message: this.state.message,
        sendAt: this.state.sendAt,
      },
      dataType: 'json',
    });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Phone number: {' '}
          <NumberFormat
            format="(###) ###-####"
            mask=""
            name="phoneNumber"
            placeholder="Enter 10-digit phone number"
            onValueChange={this.handleChange}
            value={this.state.phoneNumber} />
        </label>
        <br />
        <label>
          Message: {' '}
          <textarea
            name="message"
            type="text"
            placeholder="Type your message here!"
            value={this.state.message}
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Choose when to send this message: {' '}
          <input
            name="sendAt"
            type="time"
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Send daily?
          <input
            name="sendDaily"
            type="checkbox"
            checked={this.state.sendDaily}
            onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;