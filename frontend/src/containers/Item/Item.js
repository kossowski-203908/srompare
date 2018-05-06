import React, { Component } from 'react';
import { Fa } from 'mdbreact';
import StarsVote from '../../components/utils/starsVote/StarsVote';

export default class Item extends Component {

    state = {
        ...this.props.item
    };

    getRate = (rate) => {
        if(!this.state.userRate) {
            this.setState({ gradesAmount: this.state.gradesAmount + 1 });
        }
        this.setState({ userRate: rate });
    };

    render() {
        let item = this.state;
        return (
            <li className="item row z-depth-1 blue-grey lighten-5">
                <div className="name col-md-8">{item.name}</div>
                <div className="grade col-md-4">
                    <div className="rate mb-2">
                        <StarsVote scale="5"
                                   userRate={item.userRate}
                                   onStarClick={this.getRate}/>
                        <span className="font-weight-bold ml-3">{item.grade}</span>
                    </div>
                    <div className="desc d-flex align-items-center">
                        <Fa icon="eye" size="2x"/>
                        <span className="ml-2">votes amount:
                            <span className="font-weight-bold ml-1">{item.gradesAmount}</span>
                        </span>
                    </div>
                </div>
            </li>
        );
    }
}
