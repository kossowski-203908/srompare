import React, {Component} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './store';
import ItemsList from './containers/Itemslist';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <ItemsList></ItemsList>
                </div>
            </Provider>
        );
    }
}

export default App;
