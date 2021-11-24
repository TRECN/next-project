import Image from 'next/image'
function Header() {
    return (
        <div>
            <div className='flex'>
                {/* left */}
                <div className='relative w-24'>
                    {/* Image is a next.js tag  */}
                    <Image
                    src="https://links.papareact.com/ocw" 
                    layout="fill"
                    />

                </div>
                
                {/* middle */}
                {/* right */}

            </div>
        </div>
       
    )
}

export default Header
