import Image from 'next/image'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from '@heroicons/react/outline';
import {HomeIcon} from '@heroicons/react/solid'
function Header() {
    return (
        <div className='shadow-sn border-b bg-white sticky top-0 z-10'>
            <div className='flex justify-between max-w-6xl mx-10 lg:mx-auto '>
                {/* left - logo*/}
                <div className='relative hidden lg:inline-grid w-24'>
                    {/* Image is a next.js tag  */}
                    <Image
                    src="https://links.papareact.com/ocw" 
                    layout="fill"
                    objectFit='contain'
                    />
                </div>
                <div className='relative w-10 lg:hidden flex-shrink-0
                cursor-pointer'>
                    <Image
                    src="https://links.papareact.com/jjm" 
                    layout="fill"
                    objectFit='contain'
                    />
                </div>
               
            </div>
        </div>   
    )
}

export default Header
