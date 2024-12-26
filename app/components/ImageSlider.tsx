'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type SlideContent = {
  image: string;
  description: string;
};

function ImageSlider({
  slides,
  title,
}: {
  slides: SlideContent[];
  title: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setShowOverlay(false);
      });
    }
  }, [emblaApi]);

  return (
    <div className="shadow-lg max-w-5xl">
      <div className="w-full bg-gray-500 text-white p-2 text-center text-lg rounded-t-lg">
        {title}
      </div>
      <div className="relative">
        {/* スライダー本体 */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative flex-[0_0_100%] flex items-center justify-center"
              >
                <Image
                  src={slide.image}
                  alt={`${title} ${index + 1}`}
                  width={1300}
                  height={750}
                  className="object-contain w-auto h-auto max-h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* インジケーター */}
        {slides.length > 1 && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  selectedIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* オーバーレイ（アニメーション付き） */}
        {slides.length > 1 && showOverlay && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10 pointer-events-none">
            <div className="bg-white/90 px-6 py-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <div className="flex items-center gap-2">
                  <div className="relative overflow-hidden w-6">
                    <div className="animate-swipe">
                      <svg
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="text-gray-600">
                    横にスワイプしてください
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 説明文 */}
      <div className="p-2 bg-gray-50 rounded-b-lg h-24 overflow-y-auto">
        <p className="text-gray-700 text-sm sm:text-base">
          {slides[selectedIndex].description}
        </p>
      </div>
    </div>
  );
}

export default ImageSlider;
