
import { useState, useEffect } from 'react';
import { loadYamlFile } from '../utils/yamlLoader';
import { LinksData } from '../types/yaml';

const LinksTab = () => {
  const [data, setData] = useState<LinksData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const linksData = await loadYamlFile<LinksData>('links');
        setData(linksData);
      } catch (err) {
        setError('Failed to load links data');
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

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-8">{data.sections.services.title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data.sections.services.items.map((service, index) => (
            <div key={index} className={data.styles.serviceCard}>
              <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className={data.styles.featureItem}>
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors duration-200">
                {data.sections.services.buttons.getStarted}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-8">{data.sections.socialLinks.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.sections.socialLinks.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} ${data.styles.socialLink}`}
            >
              <div className="font-medium">{link.name}</div>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-8">{data.sections.callToAction.title}</h2>
        <div className={data.styles.ctaCard}>
          <h3 className="text-xl font-semibold text-white mb-4">{data.sections.callToAction.subtitle}</h3>
          <p className="text-gray-300 mb-6">
            {data.sections.callToAction.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={data.styles.primaryButton}>
              {data.sections.callToAction.buttons.scheduleCall}
            </button>
            <button className={data.styles.secondaryButton}>
              {data.sections.callToAction.buttons.sendMessage}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinksTab;
