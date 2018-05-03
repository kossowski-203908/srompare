import React, {Component} from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import { Provider } from 'react-redux';
import {store} from './store';
import ItemList from './containers/Itemlist';
import {withTheme} from "material-ui";


class App extends Component {
    render() {
        return (
            <Provider store={store}>

                    <div>
                        <ItemList></ItemList>

                    </div>

            </Provider>
        );
    }
}

export default App;
