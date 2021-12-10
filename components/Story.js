import Image from "next/image";
function Story({img, username}) {
    return (
        <div >
           <div className='relative w-14 h-14 rounded-full p-[1.5px]'>
               <Image
                src={img}
                layout='fill'
                objectFit='contain'
               />
           </div>
           <p>{username}</p>
        </div>
    );
}

export default Story