'use client';

import Link from 'next/link';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu3Fill } from 'react-icons/ri';
import { useMenuStore } from '@/store/useMenuStore';

function TopMenu() {
  const { isOpen, openMobileMenu } = useMenuStore();

  return (
    <section
      className="px-[40px] bg-whitesmoke py-4 z-10 max-xs:px-5"
      id="home"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-between items-center gap-5">
        {/* 上 */}
        <div className="flex justify-between items-center w-full">
          <Link href={'/'}>
            <h1 className="font-bold text-3xl text-cadetblue">
              {`hirotaka's　ポートフォリオサイト`}
            </h1>
          </Link>
          {/* トグル */}
          <div className="text-2xl z-50  md:hidden" onClick={openMobileMenu}>
            {isOpen ? <AiOutlineClose /> : <RiMenu3Fill />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopMenu;
