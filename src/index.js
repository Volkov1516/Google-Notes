import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';

import Body from './components/Body/Body';
import Sidebar from './components/Sidebar/Sidebar';
import Toolbar from './components/Toolbar/Toolbar';

function App() {  
  return (
    <div className="App">
        <Provider store={store}>
          <Toolbar />
          <Sidebar />
          <Body />
        </Provider>
    </div>
  );
}

ReactDOM.render( <App />, document.getElementById('root') );
