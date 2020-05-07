import React from 'react'
import {addWater, subtractWater} from '../../../../../views/private/actions/actions-user'
import {connect} from 'react-redux'
import '../styles.css';
import WaterImage from './water.svg'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from "../AnimatedProgressProvider"
class WaterCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3 className='metrics-card-title'>Water</h3>
                <div className= 'metrics-card-content'>
                    <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={this.props.water / 8 * 100}
                    duration={.75}
                    easingFunction={easeQuadInOut}
                    >
                        {value=>{
                            const roundedValue=Math.round(value)
                            if(this.props.water >= 8){
                                return (
                                    <CircularProgressbarWithChildren  styles={buildStyles({ pathTransition: "none" })} value={value}>
                                    <img style={{ width: 125, marginTop: 10 }} src={WaterImage} alt="Water" />
                                    <div className='progress-bar-text-complete' > <header>{`${roundedValue}%`}</header></div>
                                    </CircularProgressbarWithChildren>
                                )
                            } else {
                                return (
                                    <CircularProgressbarWithChildren  styles={buildStyles({ 
                                        pathColor: `salmon`,
                                        pathTransition: "none" })} value={value}>
                                    <img style={{ width: 125, marginTop: 10 }} src={WaterImage} alt="Water" />
                                    <div className='progress-bar-text-incomplete'> <header>{`${roundedValue}%`}</header></div>
                                    </CircularProgressbarWithChildren>
                                )
                            }
                           
                        }}
               
                </AnimatedProgressProvider>
                </div>
                <div className='metric-card-input'>
                <button disabled={this.props.isFetching} onClick={() => this.props.subtractWater(-1, this.props.userId, this.props.dailyPoints, this.props.totalPoints)}>-</button>
                <h3>{this.props.water}/8</h3>
                <button disabled={this.props.isFetching} onClick={() => this.props.addWater(1, this.props.userId, this.props.dailyPoints, this.props.totalPoints)}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        water: state.userReducer.water,
        userId: state.userReducer.userId,
        dailyPoints: state.userReducer.dailyPoints,
        totalPoints: state.userReducer.totalPoints,
        isFetching: state.userReducer.isFetching
    }
}
export default connect(mapStateToProps, { addWater, subtractWater })(WaterCard);
