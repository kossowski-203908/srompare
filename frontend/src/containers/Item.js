import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        return (
            <tr >
                <th scope="row">1</th>
                <td>{this.props.item}</td>
                <td>{this.props.item}</td>
            </tr>
        );
    }
}