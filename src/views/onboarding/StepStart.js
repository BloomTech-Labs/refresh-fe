// IMPORTS
// react
import React, {useState} from 'react';
import {useContext} from 'react';
import { UserContext } from '../../contexts/UserContext';

// components
import InfoIntro from './steps/InfoIntro';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import StepFive from './steps/StepFive';
import StepSix from './steps/StepSix';
import StepSeven from './steps/StepSeven';
import StepEight from './steps/StepEight';
import StepNine from './steps/StepNine';
import StepTen from './steps/StepTen';

const StepStart =(props) =>{
const context = useContext(UserContext);

const [formdata, setForm] = useState([]);
const [currentStep, setCurrentStep] = useState(0);

const onSubmit = form => {
    if(currentStep >= 10){
        console.log(formdata);
        props.onboarding(form).then(() => props.history.push('/dashboard'))
    }
    setForm([...formdata, form]); 
    setCurrentStep(currentStep + 1);
}

    return(
        <>
        {currentStep === 0 && <InfoIntro onSubmit={onSubmit} />}
        {currentStep === 1 && <StepOne onSubmit={onSubmit} />}
        {currentStep === 2 && <StepTwo onSubmit={onSubmit} />}
        {currentStep === 3 && <StepThree onSubmit={onSubmit} />}
        {currentStep === 4 && <StepFour onSubmit={onSubmit} />}
        {currentStep === 5 && <StepFive onSubmit={onSubmit} />}
        {currentStep === 6 && <StepSix onSubmit={onSubmit} />}
        {currentStep === 7 && <StepSeven onSubmit={onSubmit} />}
        {currentStep === 8 && <StepEight onSubmit={onSubmit} />}
        {currentStep === 9 && <StepNine onSubmit={onSubmit} />}
        {currentStep === 10 &&<StepTen onSubmit={onSubmit} />}
        </>
    )
}



export default StepStart;