import React, { Component } from 'react';
import { Fa } from 'mdbreact';

export default class StarsVote extends Component {

    state = {
        hover: this.props.userRate,
    };

    onHoverStar = (index) => {
        this.setState({ hover: index });
    };

    onOutStar = () => {
        if(!this.props.userRate) {
            this.setState({ hover: -1 });
        } else {
            this.setState({ hover: this.props.userRate });
        }
    };

    onStarClick = (index) => {
        this.props.onStarClick(index);
    };

    render(){
        const stars = [];
        for(let i = 1; i <= this.props.scale; i++ ){
            stars.push(<Fa icon="star" size="1x" key={i}
                           className={this.state.hover >= i ? 'deep-orange-text' : ''}
                           onMouseEnter={this.onHoverStar.bind(this, i)}
                           onMouseOut={this.onOutStar}
                           onClick={this.props.onStarClick.bind(this, i)}/>);
        }

        return(
            <div className="d-inline-block">
                {stars}
            </div>
        );
    }
}
