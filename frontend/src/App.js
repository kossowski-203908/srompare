import React, {Component} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './store';
import ItemsList from './containers/Itemslist';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <ItemsList></ItemsList>
                </div>
            </Provider>
        );
    }
}

export default App;
