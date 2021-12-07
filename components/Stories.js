import faker from 'faker'
import { useEffect, useState } from 'react'
import Story from './Story'
function Stories() {

    const [suggestions,setSuggestions]=useState([]);

    useEffect(()=>{
        const suggestions = [...Array(5)].map((_,i)=>({
            ...faker.helpers.contextualCard(),
            id: i,
        }))
        setSuggestions(suggestions)
        console.log(suggestions)
    },[])

    )
}

export default Stories
