import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './state/store';

import SideMenu from './components/SideMenu/SideMenu';
import List from './components/List/List';

import './App.css';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ToolBar from './components/ToolBar/ToolBar';

function App() {
    return (
        <Router>
            <Box>
                <Provider store={store}>
                    <ToolBar />
                    <Grid container>
                            <SideMenu />
                            <List />
                    </Grid>
                </Provider>
            </Box>
        </Router>
    );
}

export default App