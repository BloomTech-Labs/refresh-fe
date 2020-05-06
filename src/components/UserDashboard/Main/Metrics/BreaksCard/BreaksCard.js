import React from 'react'
import {connect} from 'react-redux'
import {addBreaks, subtractBreaks} from '../../../../../views/private/actions/actions-user'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import '../styles.css';
import BreakImage from './breaks.svg'
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from "../AnimatedProgressProvider"

class BreaksCard extends React.Component{
   render(){
        return(
            <div className='water-card metric-card'>

                <h3 className='metrics-card-title'>Breaks</h3>

                <div className= 'metrics-card-content'>
             
                <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={this.props.breaks / 2 * 100}
                    duration={.75}
                    easingFunction={easeQuadInOut}
                    >
                        {value=>{
                            const roundedValue=Math.round(value)
                            if(this.props.breaks===2){
                                return(
                                    <CircularProgressbarWithChildren  
                                    
                                        styles={buildStyles({
                                        pathColor: ``,
                                        pathTransition: "none" 
                                })}
                                    value={value} >
                                <img style={{ width: 150, marginTop: 10 }} src={BreakImage} alt="Breaks" />
                                <div style={{ fontSize: 15, marginTop: 25 }}> <header>{`${roundedValue}%`}</header></div>
                                </CircularProgressbarWithChildren>
                                )
                            } else {
                                return(
                                    <CircularProgressbarWithChildren  
                                    
                                        styles={buildStyles({
                                        pathColor: `salmon`,
                                        pathTransition: "none" 
                                })}
                                    value={value} >
                                <img style={{ width: 150, marginTop: 10 }} src={BreakImage} alt="Breaks" />
                                <div style={{ fontSize: 15, marginTop: 25 }}> <header>{`${roundedValue}%`}</header></div>
                                </CircularProgressbarWithChildren>
                                )
                            }
                            
                        }}
                   
                    </AnimatedProgressProvider>
                  

              
               </div>

                <div className='metric-card-input'>

                <button disabled={this.props.isFetching} onClick={() => this.props.subtractBreaks(-1, this.props.userId, this.props.dailyPoints, this.props.totalPoints)}>-</button>
                
                <h3>{this.props.breaks}/2</h3>
                
                <button disabled={this.props.isFetching} onClick={() => this.props.addBreaks(1, this.props.userId, this.props.dailyPoints, this.props.totalPoints)}>+</button>
          
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        breaks: state.userReducer.breaks,
        userId: state.userReducer.userId,
        dailyPoints: state.userReducer.dailyPoints,
        totalPoints: state.userReducer.totalPoints,
        isFetching: state.userReducer.isFetching
    }
}

export default connect(mapStateToProps, {addBreaks, subtractBreaks})(BreaksCard)