import React, { useEffect } from 'react';

interface LandingPagePianoEventProps {
  className?: string;
  title?: string;
}

const LandingPagePianoEvent: React.FC<LandingPagePianoEventProps> = ({
  className = "",
  title
}) => {
  const backgroundImage = './custom/landing-page-piano-event/musictime-logo-no-bg.png'
  const customImages = [
    './custom/landing-page-piano-event/map1.png',
    './custom/landing-page-piano-event/map2.png',
  ]
  document.title = title

  // Update favicon and meta tags when component mounts and restore when unmounts
  useEffect(() => {
    // Store original meta tags
    const originalTitle = document.title;
    const originalDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    const originalKeywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content') || '';

    // Store the original favicon
    const originalFavicon = document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');
    const originalHref = originalFavicon ? originalFavicon.getAttribute('href') : '/favicon.ico';

    // Update title for SEO
    document.title = 'Music Time Center - Autumn Rhythm Piano Show | Piano Performance Event';

    // Update or create meta description
    let descriptionMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.name = 'description';
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.content = 'Music Time Center presents Autumn Rhythm - Piano performance event for students. Join us for a special piano recital showcasing talented young musicians.';

    // Update or create meta keywords
    let keywordsMeta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.content = 'musictime center, music time center, musictimecenter, autumn rhythm, piano performance, piano recital, music school, piano lessons, student performance, music event';

    // Create Open Graph meta tags for social media
    const ogTags = [
      { property: 'og:title', content: 'Music Time Center - Autumn Rhythm Piano Show' },
      { property: 'og:description', content: 'Join us for a special piano performance event featuring talented young musicians at Music Time Center.' },
      { property: 'og:type', content: 'event' },
      { property: 'og:url', content: 'https://francisiz.me/?misc=piano-event' },
      { property: 'og:site_name', content: 'Music Time Center' },
      { property: 'og:locale', content: 'vi_VN' }
    ];

    const createdOgTags: HTMLMetaElement[] = [];
    ogTags.forEach(tag => {
      let ogMeta = document.querySelector(`meta[property="${tag.property}"]`) as HTMLMetaElement;
      if (!ogMeta) {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', tag.property);
        document.head.appendChild(ogMeta);
        createdOgTags.push(ogMeta);
      }
      ogMeta.content = tag.content;
    });

    // Create additional SEO meta tags
    const additionalTags = [
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Music Time Center' },
      { name: 'theme-color', content: '#1f2937' }
    ];

    const createdAdditionalTags: HTMLMetaElement[] = [];
    additionalTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = tag.name;
        document.head.appendChild(meta);
        createdAdditionalTags.push(meta);
      }
      meta.content = tag.content;
    });

    // Create or update favicon link
    let faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      document.head.appendChild(faviconLink);
    }

    // Set the music logo as favicon
    faviconLink.href = './custom/landing-page-piano-event/musictime-logo-no-bg.png';
    faviconLink.type = 'image/png';

    // Cleanup function to restore original meta tags and favicon
    return () => {
      // Restore original title
      document.title = originalTitle;

      // Restore original description
      if (descriptionMeta) {
        descriptionMeta.content = originalDescription;
      }

      // Restore original keywords
      if (keywordsMeta) {
        keywordsMeta.content = originalKeywords;
      }

      // Remove created Open Graph tags
      createdOgTags.forEach(tag => {
        if (tag.parentNode) {
          tag.parentNode.removeChild(tag);
        }
      });

      // Remove created additional tags
      createdAdditionalTags.forEach(tag => {
        if (tag.parentNode) {
          tag.parentNode.removeChild(tag);
        }
      });

      // Restore original favicon
      if (faviconLink) {
        faviconLink.href = originalHref;
        faviconLink.type = 'image/x-icon';
      }
    };
  }, []);

  return (
    <div 
      className={`min-h-screen bg-gray-900 ${className}`}
    >
      <div className="relative max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-8 mb-8 relative">
          {/* Background image with 0.15 opacity positioned under content with 100px margin top and bottom */}
          {backgroundImage && (
            <div 
              className="absolute left-0 right-0 rounded-lg"
              style={{
                top: '100px',
                bottom: '100px',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.1
              }}
            ></div>
          )}
          <div className="space-y-6 relative">
            {/* Main greeting */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Kính gửi quý phụ huynh
            </h1>

            {/* Announcement */}
            <p className="text-lg text-gray-700 mb-4 text-left">
              Lớp nhạc xin trân trọng thông báo:
            </p>

            {/* Main event info */}
            <div className="text-lg text-gray-800 leading-relaxed mb-6 text-left">
              <p className="font-bold mb-4">
                Vào Chủ Nhật ngày 12 tháng 10,
              </p>
              <p className="font-light mb-4">
                các bạn sẽ có buổi biểu diễn piano nhằm tạo cơ hội giao lưu và thể hiện những gì đã học trong thời gian qua.
              </p>
            </div>

            {/* Time and location */}
            <div className="bg-blue-50 bg-opacity-50 rounded-lg p-6 mb-6">
              <div className="space-y-3">
                <div className="flex items-center justify-start">
                  <span className="text-2xl mr-3">⏰</span>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">Thời gian:</p>
                    <p className="text-gray-700 ml-12">14:30 đón khách</p>
                    <p className="text-gray-700 ml-12">15:00 bắt đầu diễn</p>
                  </div>
                </div>

                <div className="flex items-center justify-start">
                  <span className="text-2xl mr-3">📍</span>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">Địa điểm:</p>
                    <p className="text-gray-700">Cat Anh Coffee - 454 chung cư Safira Khang Điền</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important note */}
            <div className="bg-yellow-50 bg-opacity-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex items-start">
                <span className="text-xl mr-3">👉</span>
                <p className="text-gray-800">
                  Do số lượng chỗ ngồi có hạn, em xin phép mời tối đa 1-2 người đi cùng bé đến tham dự và cổ vũ ạ 💐
                </p>
              </div>
            </div>

            {/* Closing message */}
            <p className="text-lg text-gray-800 mb-4 text-left">
              Rất mong quý phụ huynh sắp xếp thời gian đến tham dự và cổ vũ cho các bạn ạ
            </p>

            {/* Sign off */}
            <div className="text-left">
              <p className="text-lg font-semibold text-gray-800 mb-2">Trân trọng.</p>
              <p className="text-2xl">🎶</p>
            </div>
          </div>
        </div>

        {/* Custom images at the end */}
        {customImages && customImages.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-4 text-center">
              Bản đồ địa điểm
            </h2>
            {customImages.map((image, index) => (
              <div key={index} className="text-center">
                <img 
                  src={image} 
                  alt={`Custom content ${index + 1}`} 
                  className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPagePianoEvent;
