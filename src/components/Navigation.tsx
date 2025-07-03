
import { useState, useEffect } from 'react';
import { Home, BookOpen, GraduationCap, Link } from 'lucide-react';
import { loadYamlFile } from '../utils/yamlLoader';
import { NavigationData } from '../types/yaml';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const [data, setData] = useState<NavigationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Map of icon names to icon components
  const iconMap: { [key: string]: React.ComponentType } = {
    Home,
    BookOpen,
    GraduationCap,
    Link
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const navData = await loadYamlFile<NavigationData>('navigation');
        setData(navData);
      } catch (err) {
        setError('Failed to load navigation data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !data) {
    // Return a minimal navigation during loading to prevent layout shifts
    return (
      <nav className="border-b border-gray-700 bg-gray-800/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8"></div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="border-b border-gray-700 bg-gray-800/80 backdrop-blur-sm sticky top-0 z-50 font-mono">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex space-x-8">
          {data.tabs.map((tab) => {
            const Icon = iconMap[tab.icon];
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`${data.styles.base} ${
                  activeTab === tab.id
                    ? data.styles.active
                    : data.styles.inactive
                }`}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
