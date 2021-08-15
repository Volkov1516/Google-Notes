import React from 'react';
import ReactDOM from 'react-dom';
import Body from './components/Body/Body';
import Sidebar from './components/Sidebar/Sidebar';
import Toolbar from './components/Toolbar/Toolbar';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Sidebar />
      <Body />
    </div>
  );
}

ReactDOM.render( <App />, document.getElementById('root') );
