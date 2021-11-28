import Stories from "./Stories"

function Feed() {
    return (
        <main className='grid grid-cols-1'>
            {/* Section Left*/}
            <section>
                {/* Stories */}
                <Stories/>
                {/* Feed */}
            </section>
                

            {/* Section Right */}
            <section>
                {/* MiniProfiles */}
                {/* Suggestions */}
            </section>
                
        </main>
    )
}

export default Feed
