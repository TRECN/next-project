import Image from "next/image";
function Story({img, username}) {
    return (
        <div>
           <Image
           className='h-4 w-4'
           src={img}
           layout='fill'
           objectFit='contain'
           />
           <p>{username}</p>
        </div>
    );
}

export default Story