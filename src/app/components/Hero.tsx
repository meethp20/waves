import React from "react";
import Image from "next/image";
function HeroSection() {
  return (
    <div>
      <div className="flex items-center jutify-between gap-x-3">
        <Image src={"/boards4.jpg"} 
        width={300} 
        alt="board"
         height={300}
         />
        <Image
          src={"/phone.png"}
          width={300}
          alt="phone"
          height={300}
          className="rounded-xl"
        />
        <Image
         src={"/board1.jpg"}
          width={300} 
          alt="board"
           height={300} />
      </div>
    </div>
  );
}

export default HeroSection;
