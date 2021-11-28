import faker from 'faker'
import { useEffect, useState } from 'react'
import {Story} from './Story'
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
            {suggestions.map(profile=>(
               <Story 
               key={profile.id} 
               img={profile.avatar} 
               username={profile.username}/> 
            ))}
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
