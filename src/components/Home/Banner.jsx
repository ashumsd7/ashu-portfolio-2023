import React from "react";
import Typewriter from "typewriter-effect";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineDownload,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaQuora } from "react-icons/fa";
import { SiWakatime } from "react-icons/si";
import Navbar from "../base/Navbar";
// import avatar from "../../../assets/avatar1.jpg";
import { FiDownload } from "react-icons/ai";

function Banner() {
  return (
    <div className="max-w-7xl mx-auto  ">
      {/* navbar */}
      <Navbar />

      <div className="flex gap-6 flex-wrap mx-5 px-10 lg:mx-0  h-[90vh]  ">
        {/* action+lines */}

        <div className="flex justify-center flex-col lg:gap-3 gap-1 ">
          <div className="flex flex-col lg:gap-4 gap-2 mb-8">
            <h2 className="lg:text-6xl text-2xl font-thin  ">
              Hi! I'm Ashu{" "}
              {/* <span className="animate-pulse lg:flex  hidden ">👋</span> */}
            </h2>
            <h1 className="lg:text-7xl text-xl font-extrabold">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Engineer",
                    "I 💛 Cycling 🚴...",
                    "I 💛 Running 🏃‍♂️... ",
                    "I 💛 Traveling 🌊...",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>

          <div className="flex flex-col   mb-10">
            <p>Let's connect to know more</p>
            <p>Construction is going on this site...</p>
          </div>

          <div className="flex gap-4 lg:flex-row flex-col justify-start lg:items-center">
            <button class="bg-blue-500 border cursor-not-allowed  hover:bg-blue-700  font-bold py-2 px-4 rounded">
              Hire me !
            </button>
            <p className="text-thin-text-xs italic text-center lg:text-left">
              or
            </p>

            <div className="flex justify-center gap-2 items-center border-0 cursor-pointer border-b-2  border-dotted">
              <AiOutlineDownload />{" "}
              <p
                onClick={() => {
                  window.open(
                    "https://smallpdf.com/file#s=f5996e9d-dd37-4299-a17c-71bcadca97ea",
                    "_blank"
                  );
                }}
              >
                download resume
              </p>
            </div>
          </div>
        </div>

        {/* photo */}

        <div className="">
          {/* <img src="../../../assets/avatar1.jpg"></img> */}
        </div>

        <div className="lg:hidden  flex gap-4 justify-center">
          <AiFillGithub
            onClick={() => {
              window.open("https://github.com/ashumsd7", "_blank");
            }}
            className="text-xl cursor-pointer"
          />
          <AiOutlineTwitter
            onClick={() => {
              window.open("https://twitter.com/YourVueJS", "_blank");
            }}
            className="text-xl cursor-pointer"
          />
          <FaQuora
            onClick={() => {
              window.open(
                "https://www.quora.com/profile/%E0%A4%86%E0%A4%B6%E0%A5%81%E0%A4%A4%E0%A5%8B%E0%A4%B7-%E0%A4%86%E0%A4%A8%E0%A4%A8%E0%A5%8D%E0%A4%A6-%E0%A4%A4%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%80-Ashutosh-Anand-Tiwari",
                "_blank"
              );
            }}
            className="text-xl cursor-pointer"
          />
          <AiFillLinkedin
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/ashutoshanandtiwari/",
                "_blank"
              );
            }}
            className="text-xl cursor-pointer"
          />
          <SiWakatime
            onClick={() => {
              window.open("https://wakatime.com/@aat", "_blank");
            }}
            className="text-xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
