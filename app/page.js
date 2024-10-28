import Image from "next/image";

export default function Home() {
  return (
    <>
        <div className="righthome w-3/4 absolute left-[382px]">
          <div className="ist bg-[#f3f7ff] w-[75vw] h-[60vh] mt-20 flex items-center justify-center gap-10 ">
            <div className="intro">
              <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-sky-400">Hey, I'm Harsh!</span></h1>
              <p className="text-xl w-[30vw] h-fit  ">I have skills in web development and programming. | Exploring the possibilities |</p>
            </div>
            <div className="istphoto w-[30vw] h-[45vh] border-black border-2 rounded-xl"></div>
          </div>
        </div>
      
    </>
  );
}
