import React, { useState, useRef } from "react";
import "boxicons/css/boxicons.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const videoRefs = [useRef(null), useRef(null), useRef(null)];

  const handleHover = (index, play) => {
    const vid = videoRefs[index].current;
    if (vid) play ? vid.play() : vid.pause();
  };

  return (
    
    <div className="relative w-full min-h-screen flex flex-col items-center gap-24 bg-[#001f7c38] text-gray-200 pt-7 ">
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
            <a href="#Hero" ><span className="text-[#72a1dea2]">Prem</span>Gupta</a>
          </h1>
        </div>
        <ul className="hidden md:flex gap-20 px-4 py-2 w-auto rounded-full bg-[#00004552] backdrop-blur-md shadow">
          <li><a href="#about" className="font-bold hover:text-white">About</a></li>
          <li><a href="#skills" className="font-bold hover:text-white">Skills</a></li>
          <li><a href="#projects" className="font-bold hover:text-white">Projects</a></li>
          <li><a href="https://drive.google.com/drive/folders/14VO0lbFuayGKhARprwZERYf1rbY6s3rY?q=sharedwith:public%20parent:14VO0lbFuayGKhARprwZERYf1rbY6s3rY" className="font-bold hover:text-white">Certifications</a></li>
           <li><a href="#contact" className="font-bold hover:text-white">Connect</a></li>
        </ul>
        <div className="hidden md:flex gap-4">
          <a href="https://www.linkedin.com/in/prem-gupta-616489335/"><i className="bx bxl-linkedin-square border rounded-full p-1 cursor-pointer hover:bg-[#72a1de]"></i></a>
          <a href="https://github.com/PremGupta06"><i className="bx bxl-github border rounded-full p-1 cursor-pointer hover:bg-[#72a1de]"></i></a>
          <a href="mailto:premgupta062006@gmail.com"><i className="bx bxl-gmail border rounded-full p-1 cursor-pointer hover:bg-[#72a1de]"></i></a>
        </div>
        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setSidebarOpen(true)}>
          <i className="bx bx-menu"></i>
        </div>
      </header>

      {/* Sidebar menu */}
      {sidebarOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-black/80 backdrop-blur-md z-50 p-6 animate-slideIn">
          <div className="text-4xl cursor-pointer mb-6" onClick={() => setSidebarOpen(false)}>
            <i className="bx bx-x"></i>
          </div>
          <ul className="space-y-4 text-2xl font-bold">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
          <div className="mt-8 flex gap-4 text-3xl">
            <i className="bx bxl-youtube"></i>
            <i className="bx bxl-github"></i>
            <i className="bx bxl-linkedin-square"></i>
          </div>
        </div>
      )}

      {/* Hero / About */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full h-screen px-6 pl-16" id="Hero">
        <div className="max-w-xl space-y-6" data-aos="fade-right" data-aos-duration="2000">
          <div className="text-[#72a1de] border px-4 py-1 rounded-full shadow w-fit">
            <i className="bx bxl-sketch"></i> Aspiring Developer Portfolio
          </div>
          <h1 className="text-5xl font-bold">
            Providing <span className="gradient">the best</span> Project{" "}
            <span className="gradient">Experience</span>
          </h1>
          <p>
            I'm a Web-developer with experience in Website, Mobile and Software development and having a passion for cybersecurity
            to keep your websites secure.
          </p>
          <button className="px-6 py-3 rounded-lg border shadow bg-[#2200493d] hover:shadow-lg">
            <a href="#contact"><i className="bx bx-send"></i> Contact Me</a>
          </button>
        </div>
        <div className="hidden md:block">
          <video autoPlay loop muted className="h-[600px] mix-blend-lighten ">
            <source src="/videos/glob.mp4" type="video/mp4"/>
          </video>
        </div>
      </section>

      {/* Intro cards */}
      <section className="w-4/5 flex flex-col items-center gap-8" id="about">
        <h1 className="text-4xl font-bold">Hello,<span className="gradient"> There</span> 👋</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#110437b7] p-10 rounded-xl shadow-lg space-y-4">
            <h1 className="text-xl mb-2 font-bold">Hi there, I'm Prem</h1>
            <p>A Student with the skills of building websites with a security-first mindset,
               Having a passion and dream to make carrer in IT Sector, Apart from any position, just to fulfill hunger of my self to provide the best quality work to peoples.
               Things I do in my free time like explore new things, Travel, listing music and much more. </p>
            <img src="/images/grid4.png" alt="" className="mt-4" />
          </div>
          <div className="bg-[#110437b7] p-6 rounded-xl shadow-lg space-y-4">
            <h1 className="text-xl mb-2 font-bold">Academics</h1>
            <p>HSC passout with 76%, CHM College - Ulhasnager.</p>
            <p>FY-BCA 8.82CGPA, Somaiya VidyaVihar University.</p>
            <p>Currently In SY-BCA.</p>
            <img src="/images/grid2.png" alt="" className="mt-4" />
          </div>
          <div className="bg-[#110437b7] p-6 rounded-xl shadow-lg space-y-4">
            <h1 className="text-xl mb-2 font-bold">Experience</h1>
            <p>Currently searching for experience, Open for remote work or any project collaboration.</p>
            <button className="mt-4 px-6 py-2 border rounded-lg"><a href="#contact"><i className="bx bx-send"></i> Contact Me</a></button>
              <img src="/images/grid1.png" alt="" className="mt-10" />
          </div>
        </div>
      </section>

      {/* Projects */}
<section className="w-4/5 space-y-16 my-20" id="projects">
  <h1 className="text-4xl font-bold text-center">My
    <span className="gradient"> Projects</span> 👨‍💻
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
        3D <span className="gradient">Website</span>
      </h1>
      <p>3D Landing Page, showcase the combination of colors,patterns,alignment 
        with resposive design and modern look.
      </p>
      <a
        href="https://github.com/PremGupta06/3D-web-Frontend"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 inline-block rounded-lg border shadow bg-[#2200493d] hover:shadow-lg"
      >
        <i className="bx bx-link-external"></i> Website
      </a>
    </div>
  </div>

  {/* Duplicate this block for more projects */}
  <div className="flex flex-col md:flex-row items-center gap-10">
    <a href="https://vk-costumes.vercel.app/" target="_blank" rel="noopener noreferrer" className="relative w-full md:w-1/2">
      <img src="/images/pro10.png" className="rounded-xl shadow-lg w-full" alt="Project 2" />
    </a>
    <div className="md:w-1/2 space-y-4">
      <h1 className="text-2xl font-bold">VK costumes<span className="gradient">(Client Website)</span></h1>
      <p>VK Costumes, a business website made for marketing which displays the details of the costumes.</p>
      <a href="https://vk-costumes.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 inline-block rounded-lg border shadow bg-[#2200493d] hover:shadow-lg">
        <i className="bx bx-link-external"></i> Website
      </a>
    </div>
  </div>

  <div className="flex flex-col md:flex-row items-center gap-10">
    <a href="https://premgupta06.github.io/Flipkart-Clone/" target="_blank" rel="noopener noreferrer" className="relative w-full md:w-1/2">
      <img src="/images/pro3.png" className="rounded-xl shadow-lg w-full" alt="Project 3" />
    </a>
    <div className="md:w-1/2 space-y-4">
      <h1 className="text-2xl font-bold">Flipkart <span className="gradient"> Clone</span></h1>
      <p>Flipkart Clone which defines the frontend skills.</p>
      <a href="https://premgupta06.github.io/Flipkart-Clone/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 inline-block rounded-lg border shadow bg-[#2200493d] hover:shadow-lg">
        <i className="bx bx-link-external"></i> Website
      </a>
    </div>
  </div>
</section>

{/* Skills */}
<section className="w-4/5 mx-auto py-16 relative" id="skills">
  {/* Title */}
  <h1 className="text-4xl font-bold text-center mb-25">
    My <span className="gradient">Skills</span> 💪
  </h1>

  {/* Background Image */}
  <div className="relative w-full h-[500px]">
    <img
      src="/images/digitalbrain.png"
      alt="skills"
      className="opacity-20 rounded-3xl w-full h-full object-cover"
    />

    {/* Skills Cards */}
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {/* Designer */}
        <div className="w-full backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
          <h1 className="gradient text-2xl md:text-3xl mb-3 font-bold flex items-center gap-2">
            Designer <i className="bx bx-laptop"></i>
          </h1>
          <p className="text-gray-200 text-justify text-sm md:text-base">
            Designer with strong expertise in HTML, CSS, JavaScript, and modern
            design principles. Passionate about crafting clean, user-friendly,
            and scalable websites that deliver exceptional user experiences.
          </p>
        </div>

        {/* Coder */}
        <div className="w-full backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
          <h1 className="gradient text-2xl md:text-3xl mb-3 font-bold flex items-center gap-2">
            Coder <i className="bx bx-code-block"></i>
          </h1>
          <p className="text-gray-200 text-justify text-sm md:text-base">
            Skilled in React, Node.js, and MongoDB with a focus on building
            scalable, secure, and high-performance full-stack applications.
          </p>
        </div>

        {/* Security Explorer */}
        <div className="w-full backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
          <h1 className="gradient text-2xl md:text-3xl mb-3 font-bold flex items-center gap-2">
            Security Explorer <i className="bx bx-shield"></i>
          </h1>
          <p className="text-gray-200 text-justify text-sm md:text-base">
            I’m just starting my journey in cybersecurity, exploring Kali Linux,
            networking, and penetration testing. Although I don’t have much
            knowledge yet, I’m eager to learn and secure applications.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Contact */}
<section className="w-11/12 sm:w-4/5 mx-auto mt-32 mb-20 text-center relative z-10" id="contact">
  <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
    Connect <span className="gradient">with me</span> 😊
  </h1>

  <p className="text-gray-300 max-w-xl sm:max-w-2xl mx-auto mb-12 text-sm sm:text-base px-2">
    Want to discuss collaborations, or job opportunities?  
    Reach out to me via email or connect with me through the links below.
  </p>

  {/* Cards grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/prem-gupta-616489335/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 sm:p-6 rounded-xl border border-purple-500/30 bg-black/30 hover:bg-purple-500/10 transition shadow-lg hover:scale-105 duration-300"
    >
      <i className="bx bxl-linkedin text-purple-400 text-3xl sm:text-4xl mb-3"></i>
      <h2 className="text-base sm:text-lg font-bold text-white">LinkedIn</h2>
      <p className="text-gray-400 text-xs sm:text-sm">Connect professionally</p>
      <p className="text-purple-400 font-semibold mt-2 text-sm sm:text-base">Connect</p>
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/PremGupta06"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 sm:p-6 rounded-xl border border-purple-500/30 bg-black/30 hover:bg-purple-500/10 transition shadow-lg hover:scale-105 duration-300"
    >
      <i className="bx bxl-github text-purple-400 text-3xl sm:text-4xl mb-3"></i>
      <h2 className="text-base sm:text-lg font-bold text-white">GitHub</h2>
      <p className="text-gray-400 text-xs sm:text-sm">View my projects</p>
      <p className="text-purple-400 font-semibold mt-2 text-sm sm:text-base">Visit</p>
    </a>

    {/* Gmail */}
    <a
      href="mailto:premgupta062006@gmail.com"
      className="p-4 sm:p-6 rounded-xl border border-purple-500/30 bg-black/30 hover:bg-purple-500/10 transition shadow-lg hover:scale-105 duration-300"
    >
      <i className="bx bxl-gmail text-purple-400 text-3xl sm:text-4xl mb-3"></i>
      <h2 className="text-base sm:text-lg font-bold text-white">Email</h2>
      <p className="text-gray-400 text-xs sm:text-sm">Send me a message</p>
      <p className="text-purple-400 font-semibold mt-2 text-sm sm:text-base">Email Me</p>
    </a>

    {/* X (Twitter) */}
    <a
      href="https://x.com/PremGupta153362?t=fdcPmeAKBAnQRdFAOonEXA&s=08"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 sm:p-6 rounded-xl border border-purple-500/30 bg-black/30 hover:bg-purple-500/10 transition shadow-lg hover:scale-105 duration-300"
    >
      <i className="bx bxl-twitter text-purple-400 text-3xl sm:text-4xl mb-3"></i>
      <h2 className="text-base sm:text-lg font-bold text-white">X (Twitter)</h2>
      <p className="text-gray-400 text-xs sm:text-sm">Follow me</p>
      <p className="text-purple-400 font-semibold mt-2 text-sm sm:text-base">Follow</p>
    </a>
  </div>
</section>

{/* Footer */}
<footer className="w-full bg-white/10 backdrop-blur-md py-4 mt-10 flex flex-col sm:flex-row justify-between items-center px-6 text-sm text-white">
  <h1 className="mb-2 sm:mb-0">©️2025, Made with passion by Prem Gupta</h1>
  <div className="flex gap-4 text-lg">
    <a href="mailto:premgupta062006@gmail.com"><i className="bx bxl-gmail"></i></a>
    <a href="https://github.com/PremGupta06" target="_blank"><i className="bx bxl-github"></i></a>
    <a href="https://www.linkedin.com/in/prem-gupta-616489335/" target="_blank"><i className="bx bxl-linkedin-square"></i></a>
  </div>
</footer>
    </div>
  );
}
