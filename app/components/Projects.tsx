'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'voice Chatzz',
    description:
      'AIと音声認識を組み合わせた新しい言語学習プラットフォーム。ブラウザ上で音声をリアルタイムにテキスト化し、AIとの自然な会話を通じて語学学習ができます。カスタムAIキャラクターの作成や、複数言語対応など、革新的な学習体験を提供します。',
    image: '/portfolio/voiceChatzz.png',
    link: '/projects/voice-chatzz',
  },
  {
    id: 2,
    title: 'ポートフォリオサイト',
    description:
      'Next.jsのApp Routerを活用して開発した個人ポートフォリオサイトです。API Routesを実装してOGPデータを動的に取得し、学習履歴をリッチなカード形式で表示。シンプルながら現代的なWeb技術を取り入れた、使いやすいポートフォリオを目指しました。',
    image: '/portfolio/voiceChatzz.png',
    link: '/projects/portfolio',
  },
];

function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-2 py-8 bg-gray-50" id="projects">
      <h1 className="text-5xl font-bold text-center mb-16">
        プロジェクト（個人開発アプリ）
      </h1>

      <div className="space-y-40">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* 画像部分 */}
            <div className="relative h-[400px] md:h-[500px] bg-white rounded-3xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
                className="object-contain p-4"
              />
            </div>

            {/* テキスト部分 */}
            <div className="space-y-6 p-2">
              <h2 className="text-3xl font-bold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.description}
              </p>
              <div className="pt-4">
                <Link
                  href={project.link}
                  className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-black/90 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  詳しく見る
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
