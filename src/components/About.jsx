import React from "react";
import myimage from "../assets/images/myimage.png";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const skills = [
    { name: "HTML5/CSS3", percentage: 95 },
    { name: "JavaScript", percentage: 80 },
    { name: "React", percentage: 69 },
    { name: "Tailwind CSS", percentage: 80 },
    { name: "Next.js", percentage: 50 },
  ];

  const experiences = [
    {
      id: 1,
      position: " Frontend Developer",
      company: "Midknight studio.",
      period: "2024 jan - 2025 feb",
      description:
        "Leading frontend development for multiple client projects. Building responsive web applications using React and modern CSS frameworks.",
    },
  ];
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cvv.pdf";
    link.download = "cvv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const education = [
    {
      id: 1,
      degree: "MCA ( Master of Computer Applications)",
      institution:
        "PIRENS Institute of Business Management and Administration (IBMA),Loni",
      year: "2022 - 2024",
      description: "Focused on web technologies and software development.",
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-50 bg-gradient-to-r from-black via-gray-900 to-red-900 min-h-screen">
        {/* Hero Section */}
        <div className=" bg-gradient-to-r from-black via-gray-900 to-red-900 text-white">
          <div className="container mx-auto max-w-6xl px-4 py-16 flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-white/20 flex-shrink-0 mx-auto md:mx-0">
              {/* Replace with your profile image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-6xl text-gray-500">
                <img src={myimage} alt="shubham" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Shubham Dighe
              </h1>
              <h2 className="text-xl md:text-2xl mb-6">Frontend Developer</h2>
              <p className="text-lg max-w-xl">
                Passionate frontend developer with expertise in creating
                responsive, user-friendly web applications. Specialized in
                React, JavaScript, and modern CSS frameworks.
              </p>
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <button
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={handleDownload}
                >
                  Download CV
                </button>

                <a
                
                  href="/contact"
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="container mx-auto max-w-6xl px-4  py-16">
          <h2 className="text-2xl text-white md:text-3xl font-bold mb-6 text-center">
            About Me
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <p className="text-gray-700 mb-4">
              Hello! I'm a creative frontend developer with over 1 years of
              professional experience. I'm passionate about creating intuitive,
              beautiful, and responsive user interfaces that provide exceptional
              user experiences.
            </p>
            <p className="text-gray-700 mb-4">
              My approach to frontend development combines strong technical
              skills with an eye for design, ensuring that the websites and
              applications I build are not only functional but also visually
              appealing and user-friendly.
            </p>
            <p className="text-gray-700">
              I stay updated with the latest frontend technologies and best
              practices, constantly learning and improving my skills to deliver
              high-quality solutions to meet clients' needs.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="container mx-auto max-w-6xl px-4 outline-3 outline-orange-700  py-16">
          <h2 className="text-2xl md:text-3xl font-bold  text-white mb-6 text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="container mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold   text-white mb-6 text-center">
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white rounded-lg shadow-md p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-600">
                    {exp.position}
                  </h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  {exp.company}
                </h4>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="container mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold   text-white mb-6 text-center">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-white rounded-lg shadow-md p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-600">
                    {edu.degree}
                  </h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mt-2 md:mt-0">
                    {edu.year}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  {edu.institution}
                </h4>
                <p className="text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-red-900 text-white py-12 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Interested in working together? Feel free to reach out to discuss
              your project requirements.
            </p>
            <Link to="/contact">
              <button className="bg-white text-blue-600 hover: font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
