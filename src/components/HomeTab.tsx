
const HomeTab = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
          JD
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">John Doe</h1>
        <p className="text-xl text-gray-300 mb-6">Full Stack Developer & Tech Enthusiast</p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I'm a passionate full-stack developer with over 5 years of experience creating 
            innovative web applications and digital solutions. My journey in technology began 
            with a curiosity for problem-solving and has evolved into a career dedicated to 
            building meaningful software that impacts people's lives.
          </p>
          <p className="text-gray-300 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, writing about 
            my experiences, or mentoring aspiring developers in the community.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Skills & Expertise</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">React & TypeScript</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div className="bg-cyan-500 h-2 rounded-full w-5/6"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Node.js & Python</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Cloud & DevOps</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-white mb-6">Career Highlights</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 pl-6">
            <h3 className="text-lg font-medium text-white">Senior Full Stack Developer</h3>
            <p className="text-cyan-400 mb-2">TechCorp Inc. • 2022 - Present</p>
            <p className="text-gray-300">
              Leading development of enterprise applications, mentoring junior developers, 
              and architecting scalable solutions for clients across various industries.
            </p>
          </div>
          
          <div className="border-l-4 border-green-400 pl-6">
            <h3 className="text-lg font-medium text-white">Full Stack Developer</h3>
            <p className="text-green-400 mb-2">StartupXYZ • 2020 - 2022</p>
            <p className="text-gray-300">
              Built the core platform from ground up, implemented CI/CD pipelines, 
              and contributed to the company's successful Series A funding round.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-lg font-medium text-white">Junior Developer</h3>
            <p className="text-purple-400 mb-2">WebSolutions Ltd. • 2019 - 2020</p>
            <p className="text-gray-300">
              Developed responsive web applications, collaborated with design teams, 
              and gained expertise in modern JavaScript frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
