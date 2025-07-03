
import { useState, useEffect } from 'react';
import { loadYamlFile } from '../utils/yamlLoader';
import { KnowledgeData } from '../types/yaml';

const KnowledgeTab = () => {
  const [data, setData] = useState<KnowledgeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const knowledgeData = await loadYamlFile<KnowledgeData>('knowledge');
        setData(knowledgeData);
      } catch (err) {
        setError('Failed to load knowledge data');
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
        <h1 className="text-3xl font-bold text-white mb-4">{data.title}</h1>
        <p className="text-lg text-gray-300">
          {data.subtitle}
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">{data.sections.formalEducation.title}</h2>
          <div className="space-y-6">
            {data.sections.formalEducation.items.map((education, index) => (
              <div key={index} className={data.styles.educationCard}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-white">{education.degree}</h3>
                    <p className="text-cyan-400">{education.institution} • {education.period}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${education.badgeStyle}`}>
                    {education.badge}
                  </span>
                </div>
                <p className="text-gray-300 mb-3">
                  {education.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.skills.map((skill, idx) => (
                    <span key={idx} className={data.styles.skillTag}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">{data.sections.certifications.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.sections.certifications.items.map((cert, index) => (
              <div key={index} className={data.styles.certificationCard}>
                <h3 className="text-lg font-medium text-white mb-2">{cert.title}</h3>
                <p className={`${cert.color} mb-3`}>{cert.organization} • {cert.year}</p>
                <p className="text-gray-300 text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">{data.sections.continuousLearning.title}</h2>
          <div className={data.styles.learningCard}>
            <h3 className="text-lg font-medium text-white mb-4">Current Learning Goals</h3>
            <div className="space-y-3">
              {data.sections.continuousLearning.goals.map((goal, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-300">{goal.skill}</span>
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div 
                      className={`${goal.progressColor} h-2 rounded-full`} 
                      style={{ width: `${goal.progress}%` }}
                    ></div>
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
