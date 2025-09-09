
import { useState } from 'react';
import Navigation from '../components/Navigation';
import CVTab from '../components/CVTab.tsx';
import BlogsTab from '../components/BlogsTab';
import KnowledgeTab from '../components/KnowledgeTab';
import LinksTab from '../components/LinksTab';
import {useParams, useSearchParams} from 'react-router-dom';
import MiscPage from '@/components/MiscPage.tsx';
import LandingPagePianoEvent from '@/components/custom/landing-page-piano-event.tsx';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchParams, ] = useSearchParams()
  const misc = searchParams.get('misc')

  const renderContent = () => {
    switch (misc) {
      case 'cv':
        return <CVTab standalone={true} />
      case 'noi-quy-cau-long':
        return <MiscPage filename="noi-quy-cau-long" title="Nội Quy Cầu Lông" />
      case 'piano-event':
        return <LandingPagePianoEvent title="Music Time Center ~ Autumn Rhythm Show"/>
      // case 'blogs':
      //   return <BlogsTab />;
      // case 'knowledge':
      //   return <KnowledgeTab />;
      // case 'links':
      //   return <LinksTab />;
      default:
        return (
          <div className="text-amber-100">
            hello, my name is francis. you're seeing my own domain. everything here is still in development!
          </div>
        )
    }
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
