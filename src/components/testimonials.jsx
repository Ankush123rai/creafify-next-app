import TestimonialCard from "./testimonial-card";
import video2 from "../assets/videos/bg-video2.mp4"
import avatar2 from "../assets/image/avatar2.jpg";

const TESTIMONIALS = [
  {
    feedback:
      "It understood my unique needs and delivered a tailored solution promptly. Their customer support is top-notch, and I appreciate their commitment.",
    client: "Mary Joshiash",
    title: "MARKETING @ MedX Solutions.",
    img: avatar2,
  },
  {
    feedback:
      "They not only met but exceeded our expectations. Their innovative approach and technical proficiency have been instrumental in our success.",
    client: "Jacob Jones",
    title: "CFO @ MedX Solutions",
    img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
  },
  {
    feedback:
      "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
    client: "Emily Johnson",
    title: "Graphic Designer",
    img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-12 bg-gray-50 sm:py-16 lg:py-20 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600 font-pj">
              150+ people have said how good Rareblocks
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Our happy clients say about us
            </h2>
          </div>

          <div className="mt-8 text-center md:mt-16 md:order-3">
            <a
              href=""
              title=""
              className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
            >
              Check all 150+ reviews
            </a>
          </div>

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {TESTIMONIALS.map((item, i) => (
                <TestimonialCard
                  key={i}
                  feedback={item.feedback}
                  client={item.client}
                  title={item.title}
                  img={item.img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
