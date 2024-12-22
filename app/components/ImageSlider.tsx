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
    <div>
      <div className="w-full bg-gray-500 text-white p-2 text-center text-lg rounded-t-lg">
        {title}
      </div>
      <div className="relative group">
        {/* スライダー本体 */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative flex-[0_0_100%] min-w-[100%]"
              >
                <Image
                  src={slide.image}
                  alt={`${title} ${index + 1}`}
                  width={1300}
                  height={700}
                  className="object-contain w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* インジケーター */}
        {slides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
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

        {/* オーバーレイ */}
        {slides.length > 1 && showOverlay && (
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-none">
            <div className="bg-white/90 px-6 py-3 rounded-lg shadow-lg flex items-center gap-4">
              <span className="text-2xl">←</span>
              <span className="text-gray-800">横にスワイプしてください</span>
              <span className="text-2xl">→</span>
            </div>
          </div>
        )}
      </div>

      {/* 説明文 */}
      <div className="pt-1 bg-gray-50 rounded-lg h-16">
        <p className="text-gray-700">{slides[selectedIndex].description}</p>
      </div>
    </div>
  );
}

export default ImageSlider;
