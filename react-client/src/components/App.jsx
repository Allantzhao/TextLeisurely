import React from 'react';
import $ from 'jquery';
import Form from './Form.jsx';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lavender;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 36px;
  padding-bottom: 50px;
`;

const Container = styled.div`
  height: 600px;
  padding-left: 100px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  render () {
    return (
      <Div>
        <Header>Schedule a text to send!</Header>
        <Container>
          <Form />
        </Container>
      </Div>
    );
  }
}

export default App;