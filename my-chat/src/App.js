import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import MessagePage from './Components/MessagePage/MessagePage';
import SendForm from './Components/SendForm/SendForm';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
       messages: DUMMY_DATA
    }
  }
  render(){
   
    return (
      <div className="App">
       <Header />
       <MessagePage messages={this.state.messages}/>
       <SendForm />
      </div>
    );
  }
  }
  

export default App;
