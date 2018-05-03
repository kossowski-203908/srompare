import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { Table} from 'mdbreact';

class Itemslist extends Component {

    render() {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.items.map( e => <Item item={e} key={e.item}/>)}
                </tbody>
            </Table>
        );
    }


}
const mapStateToProps = (state) => ({
   items: state.items,
});
export default connect(mapStateToProps, {})(Itemslist);