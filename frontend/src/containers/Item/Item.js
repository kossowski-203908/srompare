import React, { Component } from 'react';
import { Fa } from 'mdbreact';
import StarsVote from '../../components/utils/starsVote/StarsVote';
import { connect } from 'react-redux';

import { changeVote } from '../../actions/itemActions';

class Item extends Component {

    getRate = (rate) => {
        let { item, changeVote } = this.props;
        if(!item.userRate) {
            item.gradesAmount++;
            item.grade = (item.grade * (item.gradesAmount-1) + rate) / item.gradesAmount;
        } else {
            item.grade = (item.grade * item.gradesAmount - item.userRate + rate) / item.gradesAmount;
        }
        item.grade = item.grade.toFixed(2);
        item.userRate = rate;
        changeVote({ ...item });
    };

    render() {
        let { item } = this.props;

        return (
            <li className="item row z-depth-1 blue-grey lighten-5">
                <div className="name col-md-8">{item.name}</div>
                <div className="grade col-md-4">
                    <div className="rate mb-2">
                        <StarsVote scale="5"
                                   userRate={item.userRate}
                                   onStarClick={this.getRate}/>
                        <span className="font-weight-bold ml-2">{item.grade}</span>
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

const actions = {
    changeVote,
};

export default connect(null, actions)(Item);
