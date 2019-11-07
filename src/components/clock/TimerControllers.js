import React, { Component } from 'react';
import WorkController from './WorkController';
import BreakController from './BreakController';

export default class TimerControllers extends Component {
    
    render() {

        return (
            <div className="timer-controllers">
                <WorkController 
                    workTime={this.props.workTime}
                    incrementWorkTime={this.props.incrementWorkTime}
                    decrementWorkTime={this.props.decrementWorkTime}
                />
                <BreakController 
                    breakTime={this.props.breakTime}
                    incrementBreakTime={this.props.incrementBreakTime}
                    decrementBreakTime={this.props.decrementBreakTime}
                />
            </div>
        )

    }
}