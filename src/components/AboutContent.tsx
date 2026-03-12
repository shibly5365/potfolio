import React from "react";

interface AboutContentProps {
  isDark: boolean;
}

const AboutContent: React.FC<AboutContentProps> = ({ isDark }) => {
  const handleEmailNavigation = () => {
    window.location.assign(
      "https://mail.google.com/mail/?view=cm&fs=1&to=nuhmanushibly@gmail.com&su=Portfolio%20Contact&body=Hello%20Nuhman,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-24 px-6 md:px-24 w-full md:w-11/12 lg:w-10/12">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/shilby.png"
          alt="Profile"
          className="w-80 h-80 md:w-[430px] md:h-[430px] object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>

      {/* Right Side: Text */}
      <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
        <h3
          className={`text-3xl md:text-5xl font-extrabold mb-4 leading-tight ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          I&apos;m <span className="text-indigo-700">Nuhman Shibly</span>
        </h3>

        <p className="text-2xl font-semibold text-indigo-700 mb-6">
          Full Stack Developer
        </p>

        <p
          className={`text-lg md:text-xl leading-relaxed mb-8 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          I'm working in{" "}
          <span className="font-semibold text-indigo-700">web development</span>{" "}
          and <span className="font-semibold text-indigo-700">design</span>. I
          enjoy creating beautiful, intuitive, and responsive web interfaces
          using
          <span className="font-semibold"> HTML, CSS, and JavaScript</span>. My
          passion is bringing ideas to life through smooth, interactive user
          experiences.
        </p>

        <div className="text-lg space-y-3 mb-10">
          <p>
            <span
              className={`font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Email :
            </span>{" "}
            <button
              type="button"
              onClick={handleEmailNavigation}
              className="text-indigo-600 hover:underline"
            >
              nuhmanushibly@gmail.com
            </button>
          </p>
          <p>
            <span
              className={`font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Place :
            </span>{" "}
            <span className="text-indigo-600">India</span>
          </p>
        </div>

        {/* Resume Button */}
        <a
          href="/Nuhman-Shibly-Mern-Stack-Developer.pdf"
          className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
        >
          Resume
          <span className="ml-4 text-4xl transition-all duration-300 group-hover:ml-6">
            &gt;
          </span>
        </a>
      </div>
    </div>
  );
};

export default AboutContent;

