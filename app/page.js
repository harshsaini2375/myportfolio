import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="righthome w-screen md:w-3/4 md:absolute left-[382px]">
        <h1 className="p-10 pb-0 mt-10 md:mt-0 text-5xl font-extrabold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-sky-300  to-sky-700  hidden md:block">Welcome!</h1>
        <div className="ist bg-[#f3f7ff] p-5 md:p-0 w-full md:w-[75vw] h-fit md:h-[60vh] mt-24 md:mt-10 flex-col md:flex-row flex items-center justify-center md:gap-10 ">
          <div className="intro ">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-sky-400">Hey, I'm Harsh!</span></h1>
            <p className="text-xl w-full md:w-[30vw] h-fit font-montserrat ">I love to build Projects related to Web & Problem Solving. | Exploring the possibilities |</p>
          </div>
          <div className="istphoto w-full md:m-0 m-10 md:w-[30vw] h-[36vh] md:h-[45vh] border-2 border-[#cedcf8] rounded-xl overflow-hidden"><img className="h-fit w-fit object-cover" src="jh" alt="randompic" /></div>
        </div>

        <button type="button" className="resume ml-10 mt-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Download My Resume</button>

      </div>

    </>
  );
}
