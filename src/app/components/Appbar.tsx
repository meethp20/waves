"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
function Appbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center">
        <div>
          <Image src={"/Wave.png"} alt="waves" />
        </div>
        <div className="opacity-0 lg:opacity-1000">Waves</div>
      </div>
      <div className="sticky blur-sm bg-transperent">
        <Link href={"/shop"}>Shop</Link>
        <Link href={"/account"}>Account</Link>
        <Link href={"/wishlist"}>WishList</Link>
      </div>
      <div>
        <button className="border rounded-sm ">Learn more</button>
      </div>
    </div>
  );
}

export default Appbar;
