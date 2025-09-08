
import { useState } from 'react';
import Navigation from '../components/Navigation';
import CVTab from '../components/CVTab.tsx';
import BlogsTab from '../components/BlogsTab';
import KnowledgeTab from '../components/KnowledgeTab';
import LinksTab from '../components/LinksTab';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    // switch (activeTab) {
    //   case 'home':
    //     return <HomeTab />;
    //   case 'blogs':
    //     return <BlogsTab />;
    //   case 'knowledge':
    //     return <KnowledgeTab />;
    //   case 'links':
    //     return <LinksTab />;
    //   default:
    //     return <HomeTab />;
    // }
    return (
      <div className="text-amber-100">
        hello, my name is francis. you're seeing my own domain. everything here is still in development!
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/*<Navigation activeTab={activeTab} onTabChange={setActiveTab} />*/}
      <main className="py-12 px-4">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
