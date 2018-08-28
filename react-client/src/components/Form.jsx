import React from 'react';
import NumberFormat from 'react-number-format';
import $ from 'jquery';
import styled from 'styled-components';

const TextForm = styled.form`
  display: flex;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PhoneNumber = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  font-size: 20px;
  width: 55%;
`;

const Message = styled.div`
  display: flex;
  justify-content: right;
  flex-direction: column;
  margin-right: 25px;
  align-items: right;
  font-size: 20px;
`;

const Textarea = styled.textarea`
  display: flex;
  height: 200px;
  width: 300px;
  font-size: 16px;
`;

const SubmitButton = styled.div`
  display: flex;
  margin-left: 25px;
`;

const InputButton = styled.input`
  height: 200px;
  width: 100px;
  position: relative;
`;

const Daily = styled.div`
  display: flex;
  margin-left: 25px;
  font-size: 20px;
  align-items: center;
`;

const SendAt = styled.div`
  display: flex;
  margin-left: 25px;
  flex-direction: column;
  font-size: 20px;
`;

const Input = styled.input`
  width: 30%;
`;

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
        sendDaily: this.state.sendDaily,
      },
      dataType: 'json',
    });
  }

  render () {
    return (
      <TextForm onSubmit={this.handleSubmit}>
        <Message>
          Message:
          <Textarea
            name="message"
            type="text"
            placeholder="Type your message here!"
            value={this.state.message}
            onChange={this.handleChange} />
        </Message>
        <NavBar>
          <PhoneNumber>
            Phone number:
            <NumberFormat
              format="(###) ###-####"
              mask=""
              name="phoneNumber"
              placeholder="Enter 10-digit phone number"
              onValueChange={this.handleChange}
              value={this.state.phoneNumber} />
          </PhoneNumber>
          <SendAt>
            Choose when to send this message:
            <Input
              name="sendAt"
              type="time"
              onChange={this.handleChange} />
          </SendAt>
          <Daily>
            Send daily?
            <input
              name="sendDaily"
              type="checkbox"
              checked={this.state.sendDaily}
              onChange={this.handleChange} />
          </Daily>
          <SubmitButton>
            <InputButton type="submit" value="Submit" />
          </SubmitButton>
        </NavBar>
      </TextForm>
    );
  }
}

export default Form;