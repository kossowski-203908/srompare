import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from "../../actions/itemActions";
import { Input, Fa, Button } from 'mdbreact';

class AddItem extends Component {

    state = {
        id: this.props.last + 1,
        name: '',
        grade: 0,
        gradesAmount: 0,
        description: '',
    };

    render() {
        return (
            <div>
                <form>
                    <p className="h5 text-center mb-4">Add new item</p>
                    <Input label="itemName" id="name" value={this.state.name} onChange={e => this.onInputChange(e)} icon="tag" group type="email" validate error="wrong" success="right"/>
                    <Input type="textarea" label="itemDescription" id="description" value={this.state.description} onChange={e => this.onInputChange(e)} icon="pencil"/>
                    <div className="text-center">
                        <Button color="deep-orange" color="unique" onClick={ e => this.onButtonClicked(e)}>Send <Fa icon="paper-plane-o" className="ml-1"/></Button>
                    </div>
                </form>
            </div>
        );
    }

    onButtonClicked(event) {
        event.preventDefault();
        this.props.addItem(this.state);
        this.props.history.push('/');
    }

    onInputChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }
}

const mapStateToProps = (state) => ({
    last: state.items[state.items.length - 1].id,
})

const actions = {
   addItem,
};

export default connect(mapStateToProps, actions)(AddItem);