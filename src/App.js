import React from 'react';
import SendFormContainer from './containers/SendFormContainer';
import SendMessagesListContainer from './containers/SendMessagesListContainer';
import Logo from './components/Logo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <SendFormContainer />
      <SendMessagesListContainer />
    </div>
  );
}

export default App;
