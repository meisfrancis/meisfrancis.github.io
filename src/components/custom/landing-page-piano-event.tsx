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

  // Update favicon when component mounts and restore when unmounts
  useEffect(() => {
    // Store the original favicon
    const originalFavicon = document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');
    const originalHref = originalFavicon ? originalFavicon.getAttribute('href') : '/favicon.ico';

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

    // Cleanup function to restore original favicon
    return () => {
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
