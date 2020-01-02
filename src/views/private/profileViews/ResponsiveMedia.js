import React from 'react';
import {useMediaQuery} from 'react-responsive';



const ResponsiveMedia = () => {
    
    const deskTop = useMediaQuery({
        query: `(min-device-width: 1224)`
        //add styles here
    })
    const mobile = useMediaQuery({
        query: '(min-device-width: 320px, max-device-width: 480px)'
       [{
           color: red,
           background: white
       }]
    })
    const mobileLandscape = useMediaQuery({
        query: `(min-device-width: 320px)`
        //add styles here
    })
    const tabletLandscape = useMediaQuery({
        query: `(min-device-width: 768px, max-device-width: 1024)`
        //add styles here
    })
    
    return (
        <>
          {mobile}
          {deskTop}
          {mobileLandscape}
          {tabletLandscape}
        </>
    )
};

export default ResponsiveMedia;