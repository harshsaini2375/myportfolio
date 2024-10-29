import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="righthome w-3/4 absolute left-[382px]">
      <h1 className="p-10 pb-0 text-5xl font-extrabold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-sky-300  to-sky-700 ">Welcome!</h1>
        <div className="ist bg-[#f3f7ff] w-[75vw] h-[60vh] mt-10 flex items-center justify-center gap-10 ">
          <div className="intro">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-sky-400">Hey, I'm Harsh!</span></h1>
            <p className="text-xl w-[30vw] h-fit montserrat ">I love to build Projects related to Web & Problem Solving. | Exploring the possibilities |</p>
          </div>
          <div className="istphoto w-[30vw] h-[45vh] border-black border-2 rounded-xl"></div>
        </div>

        <button type="button" className="resume ml-10 mt-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Download My Resume</button>

      </div>

    </>
  );
}
