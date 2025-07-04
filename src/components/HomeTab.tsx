
import { loadHomeData } from '../utils/dataLoader';

const HomeTab = () => {
  const data = loadHomeData();
  
  const getSkillColor = (color: string) => {
    const colors: { [key: string]: string } = {
      cyan: "bg-cyan-500",
      green: "bg-green-400",
      purple: "bg-purple-500"
    };
    return colors[color] || "bg-gray-500";
  };

  const getBorderColor = (color: string) => {
    const colors: { [key: string]: string } = {
      cyan: "border-cyan-500",
      green: "border-green-400",
      purple: "border-purple-500"
    };
    return colors[color] || "border-gray-500";
  };

  const getTextColor = (color: string) => {
    const colors: { [key: string]: string } = {
      cyan: "text-cyan-400",
      green: "text-green-400",
      purple: "text-purple-400"
    };
    return colors[color] || "text-gray-400";
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${data.styles.gradient.primary} mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold`}>
          {data.profile.initials}
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">{data.profile.name}</h1>
        <p className="text-xl text-gray-300 mb-6">{data.profile.title}</p>
        <div className={`w-24 h-1 bg-gradient-to-r ${data.styles.gradient.divider} mx-auto`}></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {data.profile.description}
          </p>
          <p className="text-gray-300 leading-relaxed">
            {data.profile.bio}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Skills & Expertise</h2>
          <div className="space-y-3">
            {data.skills.map((skill, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-300">{skill.name}</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div className={`${getSkillColor(skill.color)} h-2 rounded-full`} style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-white mb-6">Career Journey</h2>
        <div className="space-y-6">
          {data.experience.map((exp, index) => (
            <div key={index} className={`border-l-4 ${getBorderColor(exp.color)} pl-6`}>
              <h3 className="text-lg font-medium text-white">{exp.title}</h3>
              <p className={`${getTextColor(exp.color)} mb-2`}>{exp.company} • {exp.period}</p>
              <p className="text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
