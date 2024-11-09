import { ReactTyped } from "react-typed";
import video from "../assets/videos/newVideo.mp4";
import iphone from "../assets/image/iphones.png";
import Button from "./Button";

function HeroSection() {
  return (
    <div className=" relative w-full mt-[-4rem] mb-[-8rem]">
      <header className="relative grid min-h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={video}
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />

        {/* Hero Content */}
        <div className="container relative z-10 mx-auto mt-20 lg:mt-14 grid h-full w-full grid-cols-1 place-items-center lg:grid-cols-2">
          <div className="col-span-1">
            <h1 className="text-white mb-6 text-2xl font-extrabold sm:text-4xl lg:text-4xl leading-tight">
            {`Let's build the future together`} <br />
              starting with your vision.
            </h1>
            <p className="mb-6 text-white text-sm sm:text-xl md:pr-8 xl:pr-20 leading-relaxed">
              At <strong className="text-red-500">Creatify Technologies</strong>
              , we are passionate about transforming ideas into cutting-edge
              software solutions.
              <br /> We specialize in{" "}
              <ReactTyped
                className="text-red-500 font-bold"
                strings={[
                  "Modern Websites",
                  "CRM Development",
                  "Mobile Applications",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </p>
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center lg:justify-start">
              <a href="#contact-us">
                <Button>{`Let's Connect`}</Button>
              </a>
            </div>
          </div>

          {/* iPhone Image */}
          <div className="col-span-1 flex justify-center mt-10 lg:mt-0 lg:justify-end">
            <img
              src={iphone}
              alt="Creatify Technologies work showcase"
              className="max-h-[20rem] sm:max-h-[30rem] lg:max-h-[40rem]"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeroSection;
