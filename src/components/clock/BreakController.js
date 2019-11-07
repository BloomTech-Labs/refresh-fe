import React, { Component } from 'react';

export default class BreakController extends Component {
    
    handleBreakIncrement = () => {
        this.props.incrementBreakTime()
    };

    handleBreakDecrement = () => {
        this.props.decrementBreakTime()
    };
    
    render() {
        
        return (
            <div className="break-buttons">
                <p>CURRENT BREAK</p>
                <button onClick={this.handleBreakIncrement}> + </button>
                <span> {this.props.breakTime} </span>
                <button onClick={this.handleBreakDecrement}> - </button> 
            </div>
        )
    
    }
}