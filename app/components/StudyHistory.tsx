'use client';
import React, { useEffect, useState } from 'react';
import { AiFillBulb } from 'react-icons/ai';
import { AnimatePresence } from 'framer-motion';
import StudyHistoryFilter from './StudyHistoryFilter';
import StudyHistoryCard from './StudyHistoryCard';
import { StudyHistoryType } from '@/constants/studyHistories';

function StudyHistory() {
  //フィルタ用
  const [activeCategory, setActiveCategory] = useState('all');
  const [filtered, setFiltered] = useState<StudyHistoryType[]>([]);
  const [visibleProjects, setVisibleProjects] = useState(4);
  const loadMoreProjects = () => {
    setVisibleProjects((preVisibleProjects) => preVisibleProjects + 6);
  };

  const resetProjects = () => {
    setVisibleProjects(4); // 初期表示数に戻す
  };

  useEffect(() => {
    resetProjects();
  }, [activeCategory]);

  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="studyhistory"
    >
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="flex flex-col">
          <div className="inline-flex">
            <span className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2 mb-3">
              <AiFillBulb className="w-4 h-4" />
              学習履歴
            </span>
          </div>
          <p className="text-gray-600">
            退職後、体系的に学習している技術スタック。
            <br />
            こちらは学習を終えている教材で、実装に迷ったときや技術的に不足していたり、
            <br />
            ド忘れしたと感じたときに再度復習しているものです。
          </p>
        </div>

        {/* フィルター */}
        <StudyHistoryFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          setFiltered={setFiltered}
        />

        {/* カード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
          <AnimatePresence>
            {filtered.slice(0, visibleProjects).map((studyhistory, index) => (
              <StudyHistoryCard
                key={index}
                name={studyhistory.name}
                period={studyhistory.period}
                platform={studyhistory.platform}
                platformUrl={studyhistory.platformUrl}
                description={studyhistory.description}
                imageIndex={studyhistory.imageIndex}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* もっと見る/元に戻すボタン */}
        <div className="text-center mt-4 space-y-2">
          {visibleProjects < filtered.length ? (
            <button
              className="bg-darkblue text-white px-4 py-2 rounded-md hover:bg-darkblue/75 transition-colors"
              onClick={loadMoreProjects}
            >
              もっと見る
            </button>
          ) : (
            visibleProjects > 4 && (
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                onClick={resetProjects}
              >
                表示を戻す
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default StudyHistory;
