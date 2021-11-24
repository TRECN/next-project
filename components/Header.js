import Image from 'next/image'
function Header() {
    return (
        <div>
            <h1>This is the header</h1> 

            {/* left */}
            <div>
                {/* Image is a next.js tag  */}
                <Image
                src="https://links.papareact.com/ocw" 
                layout="fill"
                />
            </div>
            {/* middle */}
            {/* right */}

        </div>
    )
}

export default Header
