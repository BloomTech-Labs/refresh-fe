import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Scraper = () =>{
    const [paths, setPaths] = useState()
    useEffect(()=>{
        axios.get('https://idealspine.com/wp-json/store-locator-plus/v2/locations/')
        .then(res=>setPaths(res.data))
        .catch(err=>console.log('error',err))
    })

    console.log('PATHS',paths)
    return(
        <div>test</div>
    )
}

export default Scraper