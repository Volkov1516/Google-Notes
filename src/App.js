import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './state/store';

import SideMenu from './components/SideMenu/SideMenu';
import List from './components/List/List';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

//Компонента Imput - отвечает за создание новой заметки
//Нужно добавить ей следующие функции:
// - Добавление в Notes
// - Выбор Label
// - Выбор Color
// - Выбор Pin

function App() {
    return (
        <Router>
            <Box>
                <Provider store={store}>
                    <Grid container>
                        <Grid item xs={3}>
                            <SideMenu />
                        </Grid>
                        <Grid item xs={9}>
                            <List />
                        </Grid>
                    </Grid>
                </Provider>
            </Box>
        </Router>
    );
}

export default App