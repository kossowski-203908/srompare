import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

export default class Itemlist extends Component {

    render() {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>John Smith</TableCell>
                        <TableCell>Employed</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }


}