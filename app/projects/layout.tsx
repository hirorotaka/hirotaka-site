// app/projects/[id]/layout.tsx
'use client';
import { M_PLUS_1p } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { sideMenuLinks, SideMenuLinksType } from '@/constants/sideMenuLinks';
import { useMenuStore } from '@/store/useMenuStore';

const m_PLUS_1p = M_PLUS_1p({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, closeMobileMenu } = useMenuStore();
  const [activeLink, setActiveLink] = useState(sideMenuLinks[0]);

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
    <div className={m_PLUS_1p.className}>
      <main className="flex flex-row">
        {/* サイドメニュー */}
        <section
          className={`fixed left-0 top-0 z-50 flex h-screen max-w-[300px] flex-col justify-between py-10 px-[20px] lg:px-[80px] max-lg:max-w-[146px] bg-white border-r
          ${isOpen ? 'max-lg:block' : 'max-md:hidden'}`}
        >
          <div className="flex w-full flex-1 flex-col gap-10 justify-between items-center">
            {/* 上部ロゴ */}
            <div className="flex flex-col justify-center items-center gap-2">
              <Link href="/" onClick={() => closeMobileMenu()}>
                <Image
                  src="/assets/logo.jpeg"
                  width={200}
                  height={200}
                  alt="ORIGIN.Doc Image"
                  className="cursor-pointer"
                />
              </Link>
            </div>

            {/* サイトメニュー */}
            <div>
              {sideMenuLinks.map((link) => {
                const isActive = activeLink === link;
                return (
                  <Link
                    key={link.label}
                    href={link.route === '/' ? '/' : `/${link.route}`}
                    className={`relative flex justify-center rounded-lg p-3
                      ${isActive ? 'bg-cadetblue text-white' : ''}
                    `}
                    onClick={() => handleLinkClick(link)}
                  >
                    <p>{link.label}</p>
                  </Link>
                );
              })}
            </div>

            {/* 下部SNSリンクとコピーライト */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex flex-col lg:flex-row items-center gap-4 mb-3">
                <Link
                  href="https://x.com/hirotaka221231"
                  target="_blank"
                  className="bg-darkblue p-2 rounded-full cursor-pointer hover:bg-darkblue/75 text-white"
                >
                  <FaXTwitter />
                </Link>
              </div>
              <p className="max-lg:hidden">© 2024 takada hiroki portfolio</p>
            </div>
          </div>
        </section>

        {/* メインコンテンツ */}
        <section className="w-full min-h-screen overflow-hidden">
          {children}
        </section>
      </main>
    </div>
  );
}
