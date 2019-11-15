import React from 'react'


const WeightHeight = (props) =>{
    const sliderScale=(unit,range)=>{
       let items = []
       for(let i = 0 ; i < range; i++){
           if(i % unit === 0){
            items.push('|')
           } else {
            items.push('.')
           }
        }
        return items
    }
    return(
        <>
            <div className="Container">
                {sliderScale(10,50).map((x,i)=>x)}
            </div>
        </>
    )
}

export default WeightHeight;
