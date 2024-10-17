"use client";

import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className=" flex flex-col justify-center items-center h-screen">
      <span className="text-white text-5xl font-thin hover:font-bold text-center">
      Hi, This is Milind&#39;s Devops Project <br/>
      WebApp running on Docker & Jenkins
      </span>
      <div className="flex flex-row justify-center items-center">
        <Image
        className="hover:scale-110 transition-transform"
        src="/docker.png"
        width={500}
        height={500}
        alt="Picture of Docker"
        />
        <Image
        className="hover:scale-110 transition-transform"
        src="/jenkins.png"
        width={500}
        height={500}
        alt="Picture of Jenkins"
        />
      </div>
      </div>
    </>
  );
}
