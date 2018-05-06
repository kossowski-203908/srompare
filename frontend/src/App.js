import React, {Component} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './store';
import ItemsList from './containers/ItemList/Itemslist';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/mdbreact/dist/css/mdb.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <ItemsList/>
                </div>
            </Provider>
        );
    }
}

export default App;
