'use client';
import { sideMenuLinks } from '@/constants/sideMenuLinks';
import { useMenuStore } from '@/store/useMenuStore';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaXTwitter } from 'react-icons/fa6';

function ProjectSideMenu() {
  const { isOpen, closeMobileMenu } = useMenuStore();

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isOpen]);

  return (
    <section
      className={`fixed left-0 top-0 z-50 flex h-screen lg:w-[300px] flex-col justify-between py-10 px-[20px] lg:px-[80px] w-[160px] bg-white border-r
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
            return (
              <Link
                key={link.label}
                href={link.route === '/' ? '/' : `/${link.route}`}
                className={`relative flex justify-center rounded-lg p-3`}
                onClick={handleLinkClick}
              >
                <p className="text-xs sm:text-sm font-semibold">{link.label}</p>
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
          <p className="max-lg:hidden">© 2024 hirotaka portfolio</p>
        </div>
      </div>
    </section>
  );
}

export default ProjectSideMenu;
