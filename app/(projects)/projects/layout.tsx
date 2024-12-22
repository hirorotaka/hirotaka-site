'use client';
import React, { useState } from 'react';
import ProjectSideMenu from '@/app/components/ProjectSideMenu';
import TopMenu from '@/app/components/TopMenu';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

  const handleClickOpenSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <main className="flex flex-row">
      {/* サイドメニュー */}

      {isSideMenuOpen && <ProjectSideMenu />}

      {/* メインコンテンツ */}
      <section
        className={`w-full min-h-screen overflow-hidden ${
          isSideMenuOpen ? 'pl-[300px] max-lg:pl-[160px] max-md:pl-0' : 'pl-0'
        }`}
      >
        <div className="flex w-full">
          <button
            className="p-2 bg-white rounded-r shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out hidden md:block
              "
            onClick={handleClickOpenSideMenu}
          >
            {isSideMenuOpen ? (
              <BiChevronLeft className="w-6 h-6" />
            ) : (
              <BiChevronRight className="w-6 h-6" />
            )}
          </button>
          <TopMenu />
        </div>
        {children}
      </section>
    </main>
  );
}
