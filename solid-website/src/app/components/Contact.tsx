'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import Footer from './Footer';

const Contact = () => {
  // 共通のアニメーション設定
  const fadeInUpAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: '電話',
      info: '03-1234-5678',
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'メール',
      info: 'info@solid-company.com',
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: '所在地',
      info: '東京都千代田区丸の内1-1-1',
    },
  ];

  // パーティクルの位置と透明度を固定値で生成
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      key: i,
      left: `${(i * 2) % 100}%`,
      top: `${(i * 3) % 100}%`,
      opacity: 0.3 + (i % 7) / 10,
      animationDuration: `${3 + (i % 5)}s`
    }));
  }, []);

  return (
    <section id="contact" className="py-20 bg-solid-gray-900 relative">
      {/* 背景パーティクル */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.key}
            className="absolute w-1 h-1 bg-solid-gray-400 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              opacity: particle.opacity,
              animationDuration: particle.animationDuration
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* お問い合わせヘッダー */}
        <motion.div
          {...fadeInUpAnimation}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-solid-gray-300 max-w-2xl mx-auto">
            あなたのビジネスについてぜひお聞かせください。私たちがどのようにサポートできるか一緒に考えていきましょう。
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* 連絡先情報 */}
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-solid-gray-800 p-6 rounded-lg text-center"
            >
              <div className="w-12 h-12 bg-solid-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-solid-gray-300">{item.info}</p>
            </motion.div>
          ))}
        </div>
        
        {/* お問い合わせフォーム */}
        <motion.div
          {...fadeInUpAnimation}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-solid-gray-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-6">メッセージを送る</h3>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-solid-gray-300 mb-2">お名前</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-solid-gray-700 border border-solid-gray-600 rounded-lg text-solid-gray-100 focus:outline-none focus:border-solid-gray-400"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-solid-gray-300 mb-2">メールアドレス</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-solid-gray-700 border border-solid-gray-600 rounded-lg text-solid-gray-100 focus:outline-none focus:border-solid-gray-400"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-solid-gray-300 mb-2">メッセージ</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="お気軽にご相談ください。"
                  className="w-full p-3 bg-solid-gray-700 border border-solid-gray-600 rounded-lg text-solid-gray-100 focus:outline-none focus:border-solid-gray-400"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-solid-gray-100 text-solid-gray-900 rounded-lg font-medium hover:bg-solid-gray-200 transition-colors duration-200"
              >
                送信する
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </section>
  );
};

export default Contact; 