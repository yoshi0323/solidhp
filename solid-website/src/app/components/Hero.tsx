'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Image from 'next/image';

const Hero = () => {
  // 共通のアニメーション設定 - パフォーマンス最適化版
  const fadeInAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const fadeInUpAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  // 装飾要素の数を最適化して、パフォーマンス向上
  const decorativeElements = useMemo(() => {
    // 星のような点滅要素 - 数を10個に削減
    const stars = Array.from({ length: 10 }).map((_, i) => ({
      key: `star-${i}`,
      left: `${(i * 10) % 100}%`,
      top: `${(i * 11) % 100}%`,
      size: 1 + (i % 3),
      delay: (i * 0.3) % 3
    }));

    // 流れる線 - 数を3個に削減
    const flowingLines = Array.from({ length: 3 }).map((_, i) => ({
      key: `flowing-line-${i}`,
      top: `${20 + (i * 25)}%`,
      width: 30 + (i % 3) * 20,
      height: 1 + (i % 2),
      delay: i * 0.5
    }));

    // グラデーションブロブ - 数を2個に削減
    const blobs = Array.from({ length: 2 }).map((_, i) => ({
      key: `blob-${i}`,
      left: `${(i * 60) + 20}%`,
      top: `${30 + (i * 30)}%`,
      size: 150 + (i * 70),
      delay: i * 0.2
    }));

    return { stars, flowingLines, blobs };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* 背景グラデーション - CSSアニメーションのみを使用 */}
      <div className="absolute inset-0 gradient-animation opacity-70" />
      
      {/* 背景パターン */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      </div>
      
      {/* 背景画像 */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/hero-bg.jpg"
          alt="ヒーロー背景"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      {/* 装飾的な要素 - パフォーマンス最適化 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 装飾的なブロブ - シンプル化 */}
        {decorativeElements.blobs.map((blob) => (
          <motion.div
            key={blob.key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ 
              duration: 1.5, 
              delay: blob.delay
            }}
            className="absolute rounded-full bg-gradient-to-tr from-blue-500/30 to-purple-500/10 animate-pulse-slow"
            style={{
              width: `${blob.size}px`,
              height: `${blob.size}px`,
              left: blob.left,
              top: blob.top,
              filter: "blur(50px)"
            }}
          />
        ))}
        
        {/* 流れる線 - CSSアニメーションを使用 */}
        {decorativeElements.flowingLines.map((line) => (
          <div
            key={line.key}
            className="absolute h-[1px] w-full"
            style={{
              top: line.top,
              height: `${line.height}px`,
              background: 'linear-gradient(90deg, transparent 0%, rgba(122, 178, 255, 0.5) 50%, transparent 100%)',
              opacity: 0.3
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                width: `${line.width}%`,
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
                animation: `flowingLine ${8 + line.delay}s ease-in-out infinite ${line.delay}s`
              }}
            />
          </div>
        ))}
        
        {/* 星のような点滅要素 - CSSアニメーションを使用 */}
        {decorativeElements.stars.map((star) => (
          <div
            key={star.key}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${2 + star.delay}s ease-in-out infinite ${star.delay}s`
            }}
          />
        ))}
      </div>
      
      {/* ナビゲーションバーとの連続性のためのぼかし */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-solid-gray-900/80 to-transparent z-0 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          {...fadeInUpAnimation}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6 inline-block"
          >
            <div className="relative w-48 h-48 mx-auto">
              <Image
                src="/images/火_1_04_2025_23_32_46.png"
                alt="SOLID ロゴ"
                fill
                style={{ objectFit: 'contain' }}
                priority
                className="drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
              />
              
              {/* ロゴの発光エフェクト - シンプル化 */}
              <div
                className="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse-slow"
                style={{ filter: 'blur(20px)' }}
              />
            </div>
          </motion.div>
          
          <motion.h1
            {...fadeInAnimation}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              あなたのビジネスを次のステージへ
            </span>
          </motion.h1>
          
          <motion.p
            {...fadeInAnimation}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="text-solid-gray-300 max-w-2xl mx-auto mb-8 sm:text-lg md:text-xl"
          >
            私たちは「やるときはやる」を大切にする企業。
            <span className="block mt-2">豊富な経験と明るいチームでお客様のビジネス課題を</span>
            <span className="block mt-2 text-white font-semibold">ポジティブに解決していきます。</span>
          </motion.p>
          
          <motion.div
            {...fadeInUpAnimation}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full font-medium smooth-transition"
            >
              {/* ボタン背景 */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></span>
              
              {/* ホバー時のエフェクト */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"></span>
                <span className="absolute inset-0 opacity-50">
                  <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="hero-btn-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.4)"></circle>
                      </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#hero-btn-pattern)"></rect>
                  </svg>
                </span>
              </span>
              
              {/* グロー効果 - グループホバー時のみ */}
              <span className="absolute -inset-2 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 blur-xl group-hover:blur-2xl transition-all duration-300"></span>
              
              {/* テキスト */}
              <span className="relative text-white z-10">
                お問い合わせ
                <FaArrowRight className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* スクロールインジケーター - シンプル化 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-70">
        <div className="w-8 h-12 border-2 border-solid-gray-400 rounded-full flex justify-center glass-effect">
          <div
            className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2"
            style={{
              animation: 'float 2s ease-in-out infinite'
            }}
          />
        </div>
        <p className="mt-2 text-xs text-center text-gray-400">
          スクロールして探索
        </p>
      </div>
    </section>
  );
};

export default Hero; 