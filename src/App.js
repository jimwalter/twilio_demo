import React from 'react';
import Form from './Form';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }
    
    render() {
      return (
        <div>
          <header>
            <h2>
              Make your EPIC PASS reservation
            </h2>
            <img src='./assets/logo.png' alt='epic pass logo' />
          </header>
          <div className="reservation-module">
            <Form />
          </div>
        </div>
        )
    }
}

export default App;
