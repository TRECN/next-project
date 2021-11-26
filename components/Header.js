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
        <div>
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
                {/* middle - search input field*/}
                <div className='max-w-xs '>
                    <div className='relative mt-1 p-3 rounded-md '>
                        <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                            <SearchIcon className='h-5 w-5 text-gray-400'/>
                        </div>
                        <input className='bg-gray-50 block w-full pl-10 sm:text-sm
                        border-gray-300 focus:border-black focus: ring-black rounded-md' type="text" placeholder="Search" />
                    </div>
                </div>
                {/* right */}
                <div className='flex items-center justify-end space-x-4 '>
                    <HomeIcon className='h-10 w-10 hidden md:inline'/>
                    <MenuIcon className='h-6 md:hidden cursor-pointer'/>
                    <PaperAirplaneIcon/>
                </div>
            </div>
        </div>   
    )
}

export default Header
