import Image from "next/image";
function Story({img, username}) {
    return (
        <div >
           <div className='relative w-10 h-10'>
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