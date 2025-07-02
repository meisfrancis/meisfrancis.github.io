
const KnowledgeTab = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">Education & Learning Journey</h1>
        <p className="text-lg text-gray-300">
          My continuous path of learning and professional development
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Formal Education</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-white">Master of Computer Science</h3>
                  <p className="text-cyan-400">Tech University • 2017 - 2019</p>
                </div>
                <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                  GPA: 3.8/4.0
                </span>
              </div>
              <p className="text-gray-300 mb-3">
                Specialized in Software Engineering and Data Structures. Completed thesis on 
                "Optimizing Database Performance in Large-Scale Web Applications."
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Algorithms</span>
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Database Systems</span>
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Software Architecture</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-white">Bachelor of Computer Engineering</h3>
                  <p className="text-cyan-400">State University • 2013 - 2017</p>
                </div>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  Magna Cum Laude
                </span>
              </div>
              <p className="text-gray-300 mb-3">
                Strong foundation in computer science fundamentals, mathematics, and engineering principles. 
                Active member of the Programming Club and participated in multiple hackathons.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Data Structures</span>
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Object-Oriented Programming</span>
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Computer Networks</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Professional Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
              <h3 className="text-lg font-medium text-white mb-2">AWS Solutions Architect</h3>
              <p className="text-orange-400 mb-3">Amazon Web Services • 2023</p>
              <p className="text-gray-300 text-sm">
                Professional-level certification demonstrating expertise in designing distributed applications on AWS.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
              <h3 className="text-lg font-medium text-white mb-2">Google Cloud Professional</h3>
              <p className="text-blue-400 mb-3">Google Cloud • 2022</p>
              <p className="text-gray-300 text-sm">
                Certified in designing, building, and managing cloud solutions on Google Cloud Platform.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
              <h3 className="text-lg font-medium text-white mb-2">React Developer Certification</h3>
              <p className="text-cyan-400 mb-3">Meta • 2021</p>
              <p className="text-gray-300 text-sm">
                Advanced certification covering React fundamentals, hooks, state management, and testing.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
              <h3 className="text-lg font-medium text-white mb-2">Kubernetes Administrator</h3>
              <p className="text-purple-400 mb-3">CNCF • 2022</p>
              <p className="text-gray-300 text-sm">
                Certified Kubernetes Administrator with expertise in cluster management and deployment.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Continuous Learning</h2>
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-6 border border-gray-600">
            <h3 className="text-lg font-medium text-white mb-4">Current Learning Goals</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Machine Learning & AI</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Blockchain Development</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-cyan-500 h-2 rounded-full w-1/2"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">System Design</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KnowledgeTab;
