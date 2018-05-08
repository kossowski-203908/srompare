import React, {Component} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './store';
import ItemsList from './containers/ItemList/Itemslist';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/mdbreact/dist/css/mdb.css';
import { Container } from 'mdbreact';
import Header from "./components/header/Header";
import AddItem from "./containers/AddItem/AddItem";
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header/>
                        <Container>
                            <Route exact path="/" component={ItemsList}/>
                            <Route path="/add" component={AddItem}/>
                        </Container>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
