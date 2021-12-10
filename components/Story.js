import Image from "next/image";
function Story({img, username}) {
    return (
        <div >
           
           <p className="text-xs w-">{username}</p>
        </div>
    );
}

export default Story