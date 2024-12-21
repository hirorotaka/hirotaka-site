'use client';

import { studyHistories, StudyHistoryType } from '@/constants/studyHistories';
import React, { useCallback, useEffect, useMemo } from 'react';

type StudyHistoryFilterProps = {
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  setFiltered: React.Dispatch<React.SetStateAction<StudyHistoryType[]>>;
};

function StudyHistoryFilter({
  activeCategory,
  setActiveCategory,
  setFiltered,
}: StudyHistoryFilterProps) {
  // フィルターカテゴリーの定義
  const categories = useMemo(
    () => [
      { id: 'all', label: '全て' },
      { id: 'react', label: 'React' },
      { id: 'nextjs', label: 'Next.js' },
      { id: 'javascript', label: 'javaScript' },
      { id: 'typescript', label: 'TypeScript' },
      { id: 'nodejs', label: 'Node.js' },
      { id: 'laravel', label: 'Laravel' },
      { id: 'php', label: 'PHP' },
      { id: 'python', label: 'Python' },
      { id: 'docker', label: 'Docker' },
      { id: 'git', label: 'Git' },
      { id: 'linux・linuc', label: 'Linux/LinuC' },
      { id: 'fullstack', label: 'FullStack' },
    ],
    []
  );

  // フィルター処理をメモ化
  const handleFilter = useCallback(
    (category: string) => {
      setActiveCategory(category);
      const filtered =
        category === 'all'
          ? studyHistories
          : studyHistories.filter((project) =>
              project.category.includes(category)
            );
      setFiltered(filtered);
    },
    [setActiveCategory, setFiltered]
  );

  useEffect(() => {
    if (activeCategory === 'all') {
      setFiltered(studyHistories);
      return;
    }
    const filterd = studyHistories.filter((project: StudyHistoryType) =>
      project.category.includes(activeCategory)
    );
    setFiltered(filterd);
  }, [activeCategory, setFiltered]);

  // ボタンのベーススタイル
  const baseButtonStyle = 'py-1 px-3 rounded-lg transition-colors duration-200';
  const activeButtonStyle = 'bg-darkblue text-white';
  const inactiveButtonStyle = 'hover:bg-gray-100';

  return (
    <div className="flex flex-wrap gap-3 my-10">
      {categories.map(({ id, label }) => (
        <button
          key={id}
          className={`${baseButtonStyle} ${
            activeCategory === id ? activeButtonStyle : inactiveButtonStyle
          }`}
          onClick={() => handleFilter(id)}
          aria-pressed={activeCategory === id}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default StudyHistoryFilter;
