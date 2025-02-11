'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface StudyHistoryCardProps {
  name?: string;
  period: string;
  platform: string;
  platformUrl: string;
  description: string;
  imageIndex: number;
}

interface OgpData {
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: { url: string }[] | string;
  ogUrl?: string;
  favicon?: string;
  ogSiteName?: string;
}

function StudyHistoryCard({
  name,
  period,
  platform,
  platformUrl,
  description,
  imageIndex,
}: StudyHistoryCardProps) {
  const [ogpData, setOgpData] = useState<OgpData | null>({
    ogTitle: name || '',
    ogDescription: '',
    ogImage: '/assets/noimage.jpg',
    ogUrl: '',
    favicon: '',
    ogSiteName: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchOgpData = async () => {
      if (!platformUrl) return;

      setIsLoading(true);
      const cacheKey = `ogp_cache_${platformUrl}`;

      try {
        // キャッシュチェック
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const data = JSON.parse(cached);
          if (Date.now() - data.timestamp < 24 * 60 * 60 * 1000) {
            // 24時間
            delete data.timestamp;
            setOgpData(data);
            setIsVisible(true);
            return;
          }
        }

        // 新規取得
        const response = await fetch(
          `/api/ogp?url=${encodeURIComponent(platformUrl)}`,
          { cache: 'no-store', signal: AbortSignal.timeout(10000) }
        );
        const data = await response.json();

        // キャッシュ保存
        localStorage.setItem(
          cacheKey,
          JSON.stringify({ ...data, timestamp: Date.now() })
        );
        setOgpData(data);
        setIsVisible(true);
      } catch (error) {
        console.error('OGP fetch error:', error);
        setOgpData({
          ogTitle: name || '',
          ogImage: '/assets/noimage.jpg',
        });
        setIsVisible(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOgpData();
  }, [platformUrl, name]);

  const getImageUrl = (ogImage: OgpData['ogImage']) => {
    if (!ogImage) return '/assets/noimage.jpg';
    if (Array.isArray(ogImage)) {
      return ogImage[imageIndex]?.url || '/assets/noimage.jpg';
    }
    return ogImage;
  };

  if (!isVisible) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white rounded-xl shadow-2xl p-4"
      >
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      layout
      className="bg-white rounded-xl shadow-xl hover:shadow-lg transition-shadow p-2"
    >
      <Link href={platformUrl} target="_blank" rel="noopener noreferrer">
        <div className="border border-gray-100 rounded-lg overflow-hidden ">
          <div className="grid grid-cols-3 p-2 gap-4">
            {/* テキストコンテンツ（2/3幅） */}
            <div className="col-span-2">
              <h3 className="text-base font-medium text-gray-900 mb-1">
                {name || ogpData?.ogTitle}
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="px-2 py-0.5 bg-gray-100 rounded text-gray-600">
                  学習期間:{period}
                </span>
                <span className="text-gray-600">{platform}</span>
              </div>
            </div>

            {/* 画像（1/3幅） */}
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              {isLoading ? (
                <div className="w-full h-full bg-gray-200 animate-pulse" />
              ) : (
                <Image
                  src={getImageUrl(ogpData?.ogImage)}
                  alt={ogpData?.ogTitle || name || ''}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              )}
            </div>
          </div>

          <div className="px-4 py-2 border-t border-gray-100 bg-gray-50">
            <span className="text-xs text-gray-500  block">{description}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default StudyHistoryCard;
