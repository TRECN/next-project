import Image from 'next/image'
function Header() {
    return (
        <div>
            <div className='flex justify-between max-w-6xl'>
                {/* left */}
                <div className='relative w-24'>
                    {/* Image is a next.js tag  */}
                    <Image
                    src="https://links.papareact.com/ocw" 
                    layout="fill"
                    objectFit='contain'
                    />

                </div>
                    kjdlfjak
                {/* middle */}
                {/* right */}

            </div>
        </div>
       
    )
}

export default Header
