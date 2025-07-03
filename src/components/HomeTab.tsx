
import { useState, useEffect } from 'react';
import { loadYamlFile } from '../utils/yamlLoader';
import { HomeData } from '../types/yaml';

const HomeTab = () => {
  const [data, setData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homeData = await loadYamlFile<HomeData>('home');
        setData(homeData);
      } catch (err) {
        setError('Failed to load home data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error || !data) {
    return <div className="text-center text-red-500">{error || 'Failed to load data'}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto font-mono">
      <div className="text-center mb-12">
        <div className={data.profile.style}>
          {data.profile.initials}
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">{data.title}</h1>
        <p className="text-xl text-gray-300 mb-6">{data.subtitle}</p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">{data.sections.aboutMe.title}</h2>
          {data.sections.aboutMe.paragraphs.map((paragraph, index) => (
            <p key={index} className={paragraph.style}>
              {paragraph.text}
            </p>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">{data.sections.skills.title}</h2>
          <div className="space-y-3">
            {data.sections.skills.items.map((skill, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-300">{skill.name}</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div 
                    className={`${skill.barColor} h-2 rounded-full`} 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-white mb-6">{data.sections.career.title}</h2>
        <div className="space-y-6">
          {data.sections.career.items.map((job, index) => (
            <div key={index} className={`border-l-4 ${job.borderColor} pl-6`}>
              <h3 className="text-lg font-medium text-white">{job.title}</h3>
              <p className={`${job.periodColor} mb-2`}>{job.company} • {job.period}</p>
              <p className="text-gray-300">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
