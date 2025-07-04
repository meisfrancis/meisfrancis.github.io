
import { loadLinksData } from '../utils/dataLoader';

const LinksTab = () => {
  const data = loadLinksData();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">{data.header.title}</h1>
        <p className="text-lg text-gray-300">
          {data.header.subtitle}
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-8">Services I Offer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data.services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6 hover:shadow-md hover:border-gray-600 transition-all duration-200">
              <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors duration-200">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-8">Connect With Me</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.social_links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} text-white p-4 rounded-lg text-center hover:opacity-90 transition-opacity duration-200`}
            >
              <div className="font-medium">{link.name}</div>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-8">{data.cta.title}</h2>
        <div className={`bg-gradient-to-br ${data.styles.gradient} rounded-lg p-8 text-center border border-gray-600`}>
          <h3 className="text-xl font-semibold text-white mb-4">{data.cta.subtitle}</h3>
          <p className="text-gray-300 mb-6">
            {data.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`${data.styles.button_colors.primary} text-white px-6 py-3 rounded-lg transition-colors duration-200`}>
              {data.cta.buttons.primary}
            </button>
            <button className={`border ${data.styles.button_colors.secondary} px-6 py-3 rounded-lg transition-colors duration-200`}>
              {data.cta.buttons.secondary}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinksTab;
