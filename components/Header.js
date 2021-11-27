import Image from 'next/image'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from '@heroicons/react/outline';
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
                    <HomeIcon className='navBtn'/>
                    <MenuIcon className='h-6 md:hidden cursor-pointer'/>
                    <div className='relative navBtn -top-1'>
                        <PaperAirplaneIcon className='rotate-45'/>
                        <div className='absolute -top-1 -right-2 rounded-full 
                        text-xs w-5 h-5 bg-red-500 flex items-center justify-center animate-pulse
                        text-white'>3</div>
                    </div>
                    <PlusCircleIcon className='navBtn'/>
                    <UserGroupIcon className='navBtn'/>
                    <HeartIcon className='navBtn'/>
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQF8Ig-OMxb8ng/profile-displayphoto-shrink_200_200/0/1618815249650?e=1639612800&v=beta&t=QBWC4GzCZYL7LwJToeQwqN9yIsF_CArs6nvjcSqVfn4" alt="profile pic" 
                    className='h-10 w-10 rounded-full cursor-pointer border-black border-2'/>
                </div>
            </div>
        </div>   
    )
}

export default Header
