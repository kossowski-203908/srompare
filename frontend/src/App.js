import React, {Component} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './store';
import ItemList from './containers/Itemlist';


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
