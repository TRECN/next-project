import Image from "next/image";
function Story({img, username}) {
    return (
        <div>
           <Image
           src={img}
           />
           <p>{username}</p>
        </div>
    );
}

export default Story