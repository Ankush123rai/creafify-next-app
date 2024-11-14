// import { BriefcaseIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import image1 from '../assets/image/raju-b.jpg';
import image2 from '../assets/image/sahil.jpg';
import image3 from '../assets/image/ankush.png';

const teamMembers = [
  {
    name: 'Raju Bhautkar',
    designation: 'Co-founder',
    image: image1, 
    linkedin: 'https://www.linkedin.com/in/bhautkar/', 
    twitter: '#', 
  },
  {
    name: 'Sahil Shiekh',
    designation: 'Co-founder',
    // title:"full-stack developer",
    image: image2,
    linkedin: 'https://www.linkedin.com/in/sahilsheikh-iicc/',
    twitter: '#',
  },
  {
    name: 'Ankush Rai',
    designation: 'Co-founder',
    // title:"full-stack developer",
    image: image3,
    linkedin: 'https://www.linkedin.com/in/ankush-rai-7733871b5/',
    twitter: '#',
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex items-center justify-center p-10" id='about-us'>
      <div className="bg-white overflow-hidden max-w-7xl w-full">
        {/* About Section */}
        <section className="text-center p-8">
          <h1 className="text-4xl font-bold mb-4 text-black">About Us</h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
            Our company specializes in website and mobile application development, utilizing the latest technologies to build high-quality, efficient, and innovative applications. We have a dedicated team focused on delivering top-notch work to our clients, ensuring every project meets the highest standards of quality and functionality.
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            <div className="flex items-center space-x-2">
              {/* <BriefcaseIcon className="h-6 w-6 text-blue-500" /> */}
              <span>Web Development</span>
            </div>
            <div className="flex items-center space-x-2">
              {/* <DevicePhoneMobileIcon className="h-6 w-6 text-blue-500" /> */}
              <span>Mobile Applications</span>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 px-8 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-12 text-black">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden shadow-lg bg-white w-64 text-center cursor-pointer">
                <div className="relative h-64 w-full">
                  <img className="w-full h-full object-cover" src={member.image} alt={member.name} />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                    <a href={member.linkedin} target='blank' className="text-white p-2 bg-indigo-600 rounded-full hover:bg-indigo-800 mx-1">
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                    <a href={member.twitter} className="text-white p-2 bg-indigo-600 rounded-full hover:bg-indigo-800 mx-1">
                      <FaTwitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="px-6 py-4">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-blue-900">{member.designation}</p>
                  <p className="text-gray-600 text-sm">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
