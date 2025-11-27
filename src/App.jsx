import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center gap-24 bg-[#001f7c38] text-gray-200 pt-7">
      {/* Background video */}
      <video
        className="fixed right-0 bottom-0 -z-10 mix-blend-overlay w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="videos/galaxy.mp4" type="video/mp4" />
      </video>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 h-16 bg-white/10 backdrop-blur-md shadow-md z-50">
        <div className="flex items-center gap-3">
          <img src="/images/image.png" alt="logo" className="w-10" />
          <h1 className="text-2xl font-bold">
            <a href="#Hero">
              <span className="text-[#72a1dea2]">Prem</span>Gupta
            </a>
          </h1>
        </div>
        <ul className="hidden md:flex gap-10 px-4 py-2 w-auto rounded-full bg-[#00004552] backdrop-blur-md shadow">
          <li>
            <a href="#about" className="font-bold hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="font-bold hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#skills" className="font-bold hover:text-white">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="font-bold hover:text-white">
              Projects
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/drive/folders/14VO0lbFuayGKhARprwZERYf1rbY6s3rY?q=sharedwith:public%20parent:14VO0lbFuayGKhARprwZERYf1rbY6s3rY"
              className="font-bold hover:text-white"
            >
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" className="font-bold hover:text-white">
              Connect
            </a>
          </li>
        </ul>
        <div className="hidden md:flex gap-4">
          <a href="https://www.linkedin.com/in/prem-gupta-616489335/">
            <i className="bx bxl-linkedin-square border rounded-full p-1 cursor-pointer hover:bg-[#72a1de]"></i>
          </a>
          <a href="https://github.com/PremGupta06">
            <i className="bx bxl-github border rounded-full p-1 cursor-pointer hover:bg-[#72a1de]"></i>
          </a>
          <a href="mailto:premgupta062006@gmail.com">
            <i className="bx bxl-gmail border rounded-full p-1 cursor-pointer hover:bg-[#72a1de]"></i>
          </a>
        </div>
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        >
          <i className="bx bx-menu"></i>
        </div>
      </header>

      {/* Sidebar menu */}
      {sidebarOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-black/80 backdrop-blur-md z-50 p-6 animate-slideIn">
          <div
            className="text-4xl cursor-pointer mb-6"
            onClick={() => setSidebarOpen(false)}
          >
            <i className="bx bx-x"></i>
          </div>
          <ul className="space-y-4 text-2xl font-bold">
            <li>
              <a href="#Hero" onClick={() => setSidebarOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setSidebarOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setSidebarOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setSidebarOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setSidebarOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setSidebarOpen(false)}>
                Connect
              </a>
            </li>
          </ul>
          <div className="mt-8 flex gap-4 text-3xl">
            <a href="https://www.youtube.com">
              <i className="bx bxl-youtube"></i>
            </a>
            <a href="https://github.com/PremGupta06">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/prem-gupta-616489335/">
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section
        className="flex flex-col md:flex-row items-center justify-between w-full h-screen px-6 pl-16"
        id="Hero"
      >
        <div
          className="max-w-xl space-y-6"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="text-[#72a1de] border px-4 py-1 rounded-full shadow w-fit">
            <i className="bx bxl-sketch"></i> Web Developer & Video Editor
          </div>
          <h1 className="text-5xl font-bold">
            I build{" "}
            <span className="gradient">modern websites</span> &{" "}
            <span className="gradient">cinematic videos</span> that help brands
            grow.
          </h1>
          <p>
            I’m Prem, a developer & editor focused on creating{" "}
            <span className="font-semibold">
              clean websites and scroll-stopping reels
            </span>{" "}
            for creators and small businesses. From landing pages to cinematic
            visuals, I help you look professional online.
          </p>
          <p className="text-sm text-gray-300">
            Currently offering{" "}
            <span className="font-semibold text-[#72a1de]">
              special starter packages
            </span>{" "}
            for my first few clients.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="px-6 py-3 rounded-lg border shadow bg-[#2200493d] hover:shadow-lg">
              <a href="#contact">
                <i className="bx bx-send"></i> Let&apos;s Work Together
              </a>
            </button>
            <button className="px-6 py-3 rounded-lg border border-[#72a1de7d] bg-transparent hover:bg-[#2200493d] shadow">
              <a href="#projects">
                <i className="bx bx-show"></i> View My Work
              </a>
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <video
            autoPlay
            loop
            muted
            className="h-[600px] mix-blend-lighten"
          >
            <source src="/videos/glob.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Intro / About */}
      <section className="w-4/5 flex flex-col items-center gap-8" id="about">
        <h1 className="text-4xl font-bold">
          Hello,<span className="gradient"> There</span> 👋
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#110437b7] p-10 rounded-xl shadow-lg space-y-4">
            <h1 className="text-xl mb-2 font-bold">Who I Am</h1>
            <p>
              I&apos;m Prem, a student and self-taught creator who loves
              building{" "}
              <span className="font-semibold">
                websites with a security-first mindset
              </span>{" "}
              and{" "}
              <span className="font-semibold">
                cinematic visuals for social media
              </span>
              . My goal is simple:{" "}
              <span className="font-semibold">
                help people and businesses look premium online
              </span>
              .
            </p>
            <p>
              When I&apos;m not coding or editing, I explore new tools, travel,
              listen to music, and learn more about technology & cybersecurity.
            </p>
            <img src="/images/grid4.png" alt="" className="mt-4" />
          </div>
          <div className="bg-[#110437b7] p-6 rounded-xl shadow-lg space-y-4">
            <h1 className="text-xl mb-2 font-bold">Academics</h1>
            <p>HSC pass-out with 76%, CHM College - Ulhasnagar.</p>
            <p>FY-BCA 8.82 CGPA, Somaiya Vidyavihar University.</p>
            <p>Currently in SY-BCA, exploring web dev, editing & security.</p>
            <img src="/images/grid2.png" alt="" className="mt-4" />
          </div>
          <div className="bg-[#110437b7] p-6 rounded-xl shadow-lg space-y-4">
            <h1 className="text-xl mb-2 font-bold">What I&apos;m Looking For</h1>
            <p>
              I&apos;m open for{" "}
              <span className="font-semibold">
                freelance projects, remote work, and collaborations
              </span>{" "}
              in web development and video editing. If you&apos;re a creator,
              student, or business owner and want a{" "}
              <span className="font-semibold">
                modern website or cinematic content
              </span>
              , let&apos;s build something.
            </p>
            <button className="mt-4 px-6 py-2 border rounded-lg">
              <a href="#contact">
                <i className="bx bx-send"></i> Contact Me
              </a>
            </button>
            <img src="/images/grid1.png" alt="" className="mt-6" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="w-4/5 space-y-10 mt-10"
        id="services"
        data-aos="fade-up"
        data-aos-duration="1800"
      >
        <h1 className="text-4xl font-bold text-center">
          My <span className="gradient">Services</span> 💼
        </h1>
        <p className="text-center max-w-2xl mx-auto text-sm md:text-base text-gray-200">
          I combine <span className="font-semibold">web development</span> and{" "}
          <span className="font-semibold">video editing</span> to help you build
          a strong online presence. Whether you&apos;re a{" "}
          <span className="font-semibold">small business, creator, or student</span>,
          I can create something tailored for you.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-6">
          {/* Web Dev */}
          <div className="bg-[#110437e5] p-6 rounded-2xl shadow-xl border border-white/10 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
              <span className="gradient">Web Development</span>{" "}
              <i className="bx bx-code-block"></i>
            </h2>
            <p className="text-sm text-gray-200 mb-4">
              Clean, responsive websites that look good on all devices.
            </p>
            <ul className="text-sm space-y-2 list-disc list-inside text-gray-200">
              <li>Portfolio & personal websites</li>
              <li>Business landing pages</li>
              <li>Simple multi-page sites</li>
              <li>UI redesign & improvements</li>
            </ul>
          </div>

          {/* Video Editing */}
          <div className="bg-[#110437e5] p-6 rounded-2xl shadow-xl border border-white/10 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
              <span className="gradient">Video Editing</span>{" "}
              <i className="bx bx-movie-play"></i>
            </h2>
            <p className="text-sm text-gray-200 mb-4">
              Cinematic & aesthetic edits for social media and branding.
            </p>
            <ul className="text-sm space-y-2 list-disc list-inside text-gray-200">
              <li>Instagram Reels & YouTube Shorts</li>
              <li>Quote-based & sky edits</li>
              <li>Promo edits for gyms, cafés, etc.</li>
              <li>Basic YouTube edits</li>
            </ul>
          </div>

          {/* Packages */}
          <div className="bg-[#110437e5] p-6 rounded-2xl shadow-xl border border-white/10 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
              <span className="gradient">Starter Packages</span>{" "}
              <i className="bx bx-package"></i>
            </h2>
            <p className="text-sm text-gray-200 mb-4">
              Special pricing while I&apos;m building my client base.
            </p>
            <ul className="text-sm space-y-3 text-gray-200">
              <li>
                <span className="font-semibold">🎬 Reel Starter – ₹699</span>
                <br />
                2 cinematic reels (up to 30s each) with smooth transitions.
              </li>
              <li>
                <span className="font-semibold">🖥 Website Starter – ₹1,499</span>
                <br />
                1-page landing site, mobile-friendly & deployed.
              </li>
              <li>
                <span className="font-semibold">
                  🚀 Business Combo – ₹2,499
                </span>
                <br />
                1 landing page + 2 reels – perfect for small businesses.
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-xs md:text-sm text-gray-300 mt-4">
          Prices are flexible for my early clients. If you have an idea,{" "}
          <span className="font-semibold text-[#72a1de]">
            feel free to reach out and we&apos;ll figure it out together.
          </span>
        </p>
      </section>

      {/* Projects */}
      <section className="w-4/5 space-y-16 my-20" id="projects">
        <h1 className="text-4xl font-bold text-center">
          Featured <span className="gradient">Projects</span> 👨‍💻
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <a
            href="https://github.com/PremGupta06/3D-web-Frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full md:w-1/2"
          >
            <img
              src="/images/pro1.png"
              className="rounded-xl shadow-lg w-full"
              alt="Project 1"
            />
          </a>
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-2xl font-bold">
              3D <span className="gradient">Landing Page</span>
            </h1>
            <p>
              A modern 3D landing page that showcases a blend of colors,
              patterns, and animations with a fully responsive design. Built to
              demonstrate my front-end creativity and layout skills.
            </p>
            <a
              href="https://3-d-web-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 inline-block rounded-lg border shadow bg-[#2200493d] hover:shadow-lg"
            >
              <i className="bx bx-link-external"></i> Website
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <a
            href="https://vk-costumes.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full md:w-1/2"
          >
            <img
              src="/images/pro10.png"
              className="rounded-xl shadow-lg w-full"
              alt="Project 2"
            />
          </a>
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-2xl font-bold">
              VK Costumes{" "}
              <span className="gradient">(Client Website)</span>
            </h1>
            <p>
              Business website built for a local costume rental brand to display
              their offerings, contact details, and presence online. Focused on
              clarity, responsiveness, and a clean user experience.
            </p>
            <a
              href="https://vk-costumes.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 inline-block rounded-lg border shadow bg-[#2200493d] hover:shadow-lg"
            >
              <i className="bx bx-link-external"></i> Website
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <a
            href="https://premgupta06.github.io/Flipkart-Clone/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full md:w-1/2"
          >
            <img
              src="/images/pro3.png"
              className="rounded-xl shadow-lg w-full"
              alt="Project 3"
            />
          </a>
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-2xl font-bold">
              Flipkart <span className="gradient">Frontend Clone</span>
            </h1>
            <p>
              A frontend clone of Flipkart created to practice layout structure,
              components, and responsive design, reflecting my understanding of
              modern e-commerce UIs.
            </p>
            <a
              href="https://premgupta06.github.io/Flipkart-Clone/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 inline-block rounded-lg border shadow bg-[#2200493d] hover:shadow-lg"
            >
              <i className="bx bx-link-external"></i> Website
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="w-4/5 mx-auto py-16 relative" id="skills">
        <h1 className="text-4xl font-bold text-center mb-10">
          My <span className="gradient">Skills</span> 💪
        </h1>

        <div className="relative w-full h-[500px]">
          <img
            src="/images/digitalbrain.png"
            alt="skills"
            className="opacity-20 rounded-3xl w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {/* Designer */}
              <div className="w-full backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                <h1 className="gradient text-2xl md:text-3xl mb-3 font-bold flex items-center gap-2">
                  Designer <i className="bx bx-laptop"></i>
                </h1>
                <p className="text-gray-200 text-justify text-sm md:text-base">
                  I design clean, modern, and responsive interfaces using HTML,
                  CSS, JavaScript, and Tailwind. I care about alignment, color
                  balance, and readability so that websites and visuals feel
                  premium and easy to use.
                </p>
              </div>

              {/* Coder */}
              <div className="w-full backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                <h1 className="gradient text-2xl md:text-3xl mb-3 font-bold flex items-center gap-2">
                  Coder <i className="bx bx-code-block"></i>
                </h1>
                <p className="text-gray-200 text-justify text-sm md:text-base">
                  Skilled in React, basic Node.js, and MongoDB with a focus on
                  building structured and maintainable projects. I enjoy
                  turning ideas into working, accessible, and efficient web
                  experiences.
                </p>
              </div>

              {/* Security Explorer */}
              <div className="w-full backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                <h1 className="gradient text-2xl md:text-3xl mb-3 font-bold flex items-center gap-2">
                  Security Explorer <i className="bx bx-shield"></i>
                </h1>
                <p className="text-gray-200 text-justify text-sm md:text-base">
                  I&apos;m exploring cybersecurity basics like Kali Linux,
                  networking, and penetration testing. My aim is to write code
                  and design systems with{" "}
                  <span className="font-semibold">security in mind</span>, not
                  just features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        className="w-11/12 sm:w-4/5 mx-auto mt-32 mb-20 text-center relative z-10"
        id="contact"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Let&apos;s{" "}
          <span className="gradient">Work Together</span> 😊
        </h1>

        <p className="text-gray-300 max-w-xl sm:max-w-2xl mx-auto mb-12 text-sm sm:text-base px-2">
          Want a{" "}
          <span className="font-semibold">
            website, cinematic reel, or both
          </span>
          ? Whether you&apos;re a small business, creator, or student, I&apos;d
          love to collaborate and build something that fits your style and
          goals. Reach out through any platform below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/prem-gupta-616489335/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-6 rounded-xl border border-purple-500/30 bg-black/30 hover:bg-purple-500/10 transition shadow-lg hover:scale-105 duration-300"
          >
            <i className="bx bxl-linkedin text-purple-400 text-3xl sm:text-4xl mb-3"></i>
            <h2 className="text-base sm:text-lg font-bold text-white">
              LinkedIn
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              Connect professionally
            </p>
            <p className="text-purple-400 font-semibold mt-2 text-sm sm:text-base">
              Connect
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/PremGupta06"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-6 rounded-xl border border-purple-500/30 bg-black/30 hover:bg-purple-500/10 transition shadow-lg hover:scale-105 duration-300"
          >
            <i className="bx bxl-github text-purple-400 text-3xl sm:text-4xl mb-3"></i>
            <h2 className="text-base sm:text-lg font-bold text-white">
              GitHub
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              View my projects
            </p>
            <p className="text-purple-400 font-semibold mt-2 text-sm sm:text-base">
              Visit
            </p>
          </a>

          {/* Gmail */}
          <a
            href="mailto:premgupta062006@gmail.com"
            className="p-4 sm:p-6 rounded-xl border border-purple-500/30 bg-black/30 hover:bg-purple-500/10 transition shadow-lg hover:scale-105 duration-300"
          >
            <i className="bx bxl-gmail text-purple-400 text-3xl sm:text-4xl mb-3"></i>
            <h2 className="text-base sm:text-lg font-bold text-white">
              Email
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              Send me a message
            </p>
            <p className="text-purple-400 font-semibold mt-2 text-sm sm:text-base">
              Email Me
            </p>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/PremGupta153362?t=fdcPmeAKBAnQRdFAOonEXA&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-6 rounded-xl border border-purple-500/30 bg-black/30 hover:bg-purple-500/10 transition shadow-lg hover:scale-105 duration-300"
          >
            <i className="bx bxl-twitter text-purple-400 text-3xl sm:text-4xl mb-3"></i>
            <h2 className="text-base sm:text-lg font-bold text-white">
              X (Twitter)
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">Follow me</p>
            <p className="text-purple-400 font-semibold mt-2 text-sm sm:text-base">
              Follow
            </p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white/10 backdrop-blur-md py-4 mt-10 flex flex-col sm:flex-row justify-between items-center px-6 text-sm text-white">
        <h1 className="mb-2 sm:mb-0">
          ©️2025, Made with passion by Prem Gupta
        </h1>
        <div className="flex gap-4 text-lg">
          <a href="mailto:premgupta062006@gmail.com">
            <i className="bx bxl-gmail"></i>
          </a>
          <a href="https://github.com/PremGupta06" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/prem-gupta-616489335/"
            target="_blank"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
