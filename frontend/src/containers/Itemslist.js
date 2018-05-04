import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ItemsList.css';
import Item from './Item';
import { Table } from 'mdbreact';
import {Fa} from 'mdbreact';

class Itemslist extends Component {

    render() {
        return (
            <div className="row">
                <ul className="itemsList col-md-8">
                    {this.props.items.map( e => {
                        return(
                            <li key={e.id} className="item row">
                                <div className="name col-md-8">{e.name}</div>
                                <div className="grade col-md-4">
                                    <div className="rate">  {e.grade}</div>
                                    <div className="desc"><Fa icon="pencil" fixed/> votes amount: {e.gradesAmount}</div>
                                </div>


                            </li>);
                    })}
                </ul>
            </div>
        );
    }


}
const mapStateToProps = (state) => ({
   items: state.items,
});
export default connect(mapStateToProps, {})(Itemslist);