import Image from "next/image";
import Appbar from "./components/Appbar";
import HeroSection from "./components/Hero";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen   sm:p-20">
     <Appbar />
      <HeroSection/>
    </div>
  );
}
