// IMPORTS
// react
import React, {useState} from 'react';
import {useContext} from 'react';
import { userContext } from '../../contexts/UserContext';

// images

const StepStart =(props) =>{
const context = useContext(userContext);

const [form, setForm] = useState([]);
const [currentStep, setCurrentStep] = useState(0);

const onSubmit = form => {
    if(currentStep > 10){
        props.onboarding(form).then(() => props.history.push('/dashboard'))
    }
    setForm([...form, form ]), 
    setCurrentStep(currentStep + 1);
}

    return(
        <>
        {currentStep === 0 && <InfoIntro onSubmit={this.onSubmit} />}
        {currentStep === 1 && <StepOne onSubmit={this.onSubmit} />}
        {currentStep === 2 && <StepTwo onSubmit={this.onSubmit} />}
        {currentStep === 3 && <StepThree onSubmit={this.onSubmit} />}
        {currentStep === 4 && <StepFour onSubmit={this.onSubmit} />}
        {currentStep === 5 && <StepFive onSubmit={this.onSubmit} />}
        {currentStep === 6 && <StepSix onSubmit={this.onSubmit} />}
        {currentStep === 7 && <StepSeven onSubmit={this.onSubmit} />}
        {currentStep === 8 && <StepEight onSubmit={this.onSubmit} />}
        {currentStep === 9 && <StepNine onSubmit={this.onSubmit} />}
        {currentStep === 10 && 
        <>
        <StepTen  />
        <button onClick={this.onSubmit}>Continue</button>
        </>}
        </>
    )
}



export default StepStart;