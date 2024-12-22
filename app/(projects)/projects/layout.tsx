// app/projects/[id]/layout.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { sideMenuLinks, SideMenuLinksType } from '@/constants/sideMenuLinks';
import { useMenuStore } from '@/store/useMenuStore';
import ProjectSideMenu from '@/app/components/ProjectSideMenu';
import TopMenu from '@/app/components/TopMenu';

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, closeMobileMenu } = useMenuStore();
  const [activeLink, setActiveLink] = useState<SideMenuLinksType>(
    sideMenuLinks[0]
  );

  const handleLinkClick = (link: SideMenuLinksType) => {
    closeMobileMenu();
    setActiveLink(link);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isOpen]);

  return (
    <main className="flex flex-row">
      {/* サイドメニュー */}
      <ProjectSideMenu
        isOpen={isOpen}
        closeMobileMenu={closeMobileMenu}
        handleLinkClick={handleLinkClick}
        activeLink={activeLink}
      />

      {/* メインコンテンツ */}
      <section className="pl-[300px] max-lg:pl-[146px] max-md:pl-0 w-full min-h-screen overflow-hidden">
        <TopMenu />
        {children}
      </section>
    </main>
  );
}
