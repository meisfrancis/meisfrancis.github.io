
import { loadKnowledgeData } from '../utils/dataLoader';

const KnowledgeTab = () => {
  const data = loadKnowledgeData();

  const getColorClass = (colorKey: string) => {
    return data.styles.colors[colorKey] || "bg-gray-800 text-gray-300";
  };

  const getTextColor = (color: string) => {
    const colors: { [key: string]: string } = {
      orange: "text-orange-400",
      blue: "text-blue-400",
      cyan: "text-cyan-400",
      purple: "text-purple-400"
    };
    return colors[color] || "text-gray-400";
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">{data.styles.header.title}</h1>
        <p className="text-lg text-gray-300">
          {data.styles.header.subtitle}
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Formal Education</h2>
          <div className="space-y-6">
            {data.education.formal.map((edu, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-white">{edu.degree}</h3>
                    <p className="text-cyan-400">{edu.institution} • {edu.period}</p>
                  </div>
                  <span className={`${getColorClass(edu.badge_color)} px-3 py-1 rounded-full text-sm font-medium`}>
                    {edu.gpa}
                  </span>
                </div>
                <p className="text-gray-300 mb-3">
                  {edu.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.subjects.map((subject, idx) => (
                    <span key={idx} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Professional Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
                <h3 className="text-lg font-medium text-white mb-2">{cert.title}</h3>
                <p className={`${getTextColor(cert.color)} mb-3`}>{cert.issuer} • {cert.year}</p>
                <p className="text-gray-300 text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Continuous Learning</h2>
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-6 border border-gray-600">
            <h3 className="text-lg font-medium text-white mb-4">Current Learning Goals</h3>
            <div className="space-y-3">
              {data.learning_goals.map((goal, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-300">{goal.skill}</span>
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div className={`bg-gradient-to-r ${goal.gradient} h-2 rounded-full`} style={{ width: `${goal.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KnowledgeTab;
