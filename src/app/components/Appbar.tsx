"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
function Appbar() {
  return (
    <div className="flex text-black w-[1000px] justify-between items-center">
      <div className="flex justify-center items-center">
        <div>
          <Image src={"/Wave.png"} alt="waves" width={26} height={26} />
        </div>
        <div className="opacity-0 lg:opacity-1000 text-blue-9 00">Waves</div>
      </div>
      <div className="sticky flex items-center justify-between w-[200px] bg-transperent">
        <Link href={"/shop"}>Shop</Link>
        <Link href={"/account"}>Account</Link>
        <Link href={"/wishlist"}>Wishlist</Link>
      </div>
      <div>
        <button className="shadow-lg rounded-[25px] p-3 py-2 text- bg-blue-800 text-blue-100 text-sm ">Learn more</button>
      </div>
    </div>
  );
}

export default Appbar;
