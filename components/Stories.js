import faker from 'faker'
import { useEffect, useState } from 'react'
import Story from './Story'
function Stories() {

    const [suggestions,setSuggestions]=useState([]);



    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200
        border rounded-sm overflow-x-scroll'>
            {suggestions.map((profile)=>(
               <Story 
               key={profile.id} 
               img={profile.avatar} 
               username={profile.username}
               /> 
            ))}
            
        </div>
    )
}

export default Stories
