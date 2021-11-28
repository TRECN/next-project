import Image from "next/image";
function Story({img, username}) {
    return (
        <div >
           <div className='relative w-20 h-20'>
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