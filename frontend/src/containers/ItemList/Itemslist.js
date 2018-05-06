import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ItemsList.css';
import Item from "../Item/Item";

class Itemslist extends Component {

    render() {
        let {items} = this.props;
        return (
            <div className="row">
                <ul className="itemsList col-md-8">
                    {items.map( e => {
                        return(<Item item={e} key={e.id} />);
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
