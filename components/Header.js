import Image from 'next/image'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon

} from '@heroicons/react/outline'
function Header() {
    return (
        <div>
            <div className='flex justify-between max-w-6xl'>
                {/* left - logo*/}
                <div className='relative hidden lg:inline-grid w-24 h-24'>
                    {/* Image is a next.js tag  */}
                    <Image
                    src="https://links.papareact.com/ocw" 
                    layout="fill"
                    objectFit='contain'
                    />

                </div>
                <div className='relative w-10 h-10 lg:hidden flex-shrink-0
                cursor-pointer'>
                    <Image
                    src="https://links.papareact.com/jjm" 
                    layout="fill"
                    objectFit='contain'
                    />

                </div>
       
                {/* middle - search input field*/}
                <div>
                    <div>
                        <SearchIcon />
                    </div>
                    <input type="text" placeholder="search" />
                </div>
                {/* right */}

            </div>
        </div>
       
    )
}

export default Header
