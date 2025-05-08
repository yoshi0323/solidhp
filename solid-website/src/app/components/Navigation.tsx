'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // スクロールイベントのハンドラーをメモ化して最適化
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        if (!scrolled) setScrolled(true);
      } else {
        if (scrolled) setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { id: 'home', label: 'ホーム' },
    { id: 'about', label: '会社概要' },
    { id: 'services', label: 'サービス' },
    { id: 'contact', label: 'お問い合わせ' },
  ];

  // ナビゲーション項目のアニメーション
  const navItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1 + 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-solid-gray-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer group"
          >
            <div className="flex items-center">
              <div className="relative h-16 w-16 md:h-20 md:w-20 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110">
                <Image
                  src="/images/火_1_04_2025_23_32_46.png"
                  alt="SOLID ロゴ"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  className="drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                />
              </div>
            </div>
          </Link>

          {/* デスクトップ用ナビゲーション */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="relative px-3 py-2 text-solid-gray-300 hover:text-white transition-colors duration-200 cursor-pointer group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              custom={navItems.length}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 hover:from-blue-600 hover:to-blue-700"
              >
                お問い合わせ
              </Link>
            </motion.div>
          </div>

          {/* モバイル用メニューボタン */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-solid-gray-300 hover:text-solid-gray-100 focus:outline-none p-2"
              aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
            >
              {isOpen ? 
                <FaTimes size={24} className="text-white" /> : 
                <FaBars size={24} className="text-white" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* モバイル用メニュー - パフォーマンス最適化 */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-solid-gray-900/95 backdrop-blur-md overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="text-solid-gray-300 hover:text-white hover:bg-solid-gray-800 px-4 py-3 rounded-lg transition-colors duration-200 cursor-pointer block"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05, duration: 0.2 }}
                >
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="mt-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 text-center block"
                    onClick={toggleMenu}
                  >
                    お問い合わせ
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation; 