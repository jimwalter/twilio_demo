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
        <div className="reservation-module">
          <Form />
        </div>
        )
    }
}

export default App;
