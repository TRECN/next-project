import faker from 'faker'
import { useEffect, useState } from 'react'
function Stories() {

    const [suggestions,setSuggestions]=useState([]);

    useEffect(()=>{
        const Suggestions = [...Array(20)].map((_,i)=>({
            ...faker.helpers.contextualCard(),
            id: i,
        }))
        setSuggestions(Suggestions)
        console.log(Suggestions)
    },[])

    return (
        <div>
            {/* stories */}
            {/* stories */}
            {/* stories */}
            {/* stories */}
            {/* stories */}
            {/* stories */}
        </div>
    )
}

export default Stories
