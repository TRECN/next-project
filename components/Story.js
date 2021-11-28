import Image from "next/image";
function Story({img, username}) {
    return (
        <div >
           <div className='relative w-20'>
               <Image
                src='https://media-exp1.licdn.com/dms/image/C5603AQF8Ig-OMxb8ng/profile-displayphoto-shrink_200_200/0/1618815249650?e=1639612800&v=beta&t=QBWC4GzCZYL7LwJToeQwqN9yIsF_CArs6nvjcSqVfn4'
                layout='fill'
                objectFit='contain'
               />
           </div>
           <p>{username}</p>
        </div>
    );
}

export default Story