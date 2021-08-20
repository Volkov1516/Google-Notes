import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './state/store';

import Toolbar from './components/Toolbar/Toolbar';
import Menu from './components/Menu/Menu';
import Body from './components/Body/Body';

//Создать компоненту NoteCard*, которую пробрасывать в map для Заметок, Архива и всех меток. Это компонента тела заметки

function App() {
  return (
    <Router>
      <div className="App">
        <Provider store={store}>
          <Toolbar />
          <Menu />
          <Body />
        </Provider>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
