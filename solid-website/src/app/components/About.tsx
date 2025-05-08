'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaRocket, FaLock } from 'react-icons/fa';
import Image from 'next/image';

const About = () => {
  // 共通のアニメーション設定
  const fadeInUpAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const fadeInLeftAnimation = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const fadeInRightAnimation = {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const features = [
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: '自己成長',
      description: '常に新しいことに挑戦し、自分自身の可能性を広げていくことを大切にしています。',
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: 'ポジティブな姿勢',
      description: '明るく前向きな社風で、どんな困難も乗り越える力を育みます。',
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: '実践的な経験',
      description: '営業からIT部門まで、幅広い経験を活かした実践的なアプローチ。',
    },
    {
      icon: <FaLock className="w-6 h-6" />,
      title: 'オンオフの切り替え',
      description: 'やるときはやる、休むときは休む。メリハリのある働き方を推進します。',
    },
  ];

  return (
    <section id="about" className="py-20 bg-solid-gray-900 relative">
      {/* 背景画像 */}
      <div className="absolute inset-0 opacity-10 z-0">
        <Image
          src="/images/about-bg.jpg"
          alt="About背景"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 会社情報ヘッダー */}
        <motion.div
          {...fadeInUpAnimation}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">会社情報</h2>
          <p className="text-solid-gray-300 max-w-2xl mx-auto">
            私たちはクライアントの未来を支えるパートナーとして、
            技術とアイデアで新しい価値を創造します。
          </p>
        </motion.div>

        {/* SOLIDの意味 */}
        <motion.div
          {...fadeInUpAnimation}
          className="text-center mb-20"
        >
          <h3 className="text-2xl font-bold mb-6">SOLIDの意味</h3>
          <div className="bg-solid-gray-800 p-8 rounded-lg shadow-xl">
            <p className="text-solid-gray-300 mb-4">
              Solidの意味は沢山あります。人も同じでそれぞれ個性があるように。
            </p>
            <p className="text-solid-gray-300 mb-4">
              スラングでは「めちゃくちゃいい」「最高にかっこいい」といった意味があります。
              ビジネスでは「確かな」「信頼できる」「頼りになる」といった意味を持ちます。
            </p>
            <p className="text-solid-gray-300 mb-4">
              私たちSOLIDは、それぞれの個性を活かし、最高にかっこいい人生を実現するためのパートナーになります。
            </p>
          </div>
        </motion.div>

        {/* 代表紹介セクション */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* 代表画像 */}
          <motion.div
            {...fadeInLeftAnimation}
            className="relative"
          >
            <div className="relative h-[600px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/名称未設定.png"
                alt="代表取締役 水谷 好裕"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
              />
            </div>
          </motion.div>

          {/* 代表紹介文 */}
          <motion.div
            {...fadeInRightAnimation}
            className="flex flex-col justify-center space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">代表取締役 水谷 好裕</h3>
            
            <p className="text-solid-gray-300">
              普通のサラリーマンからフリーランスを経て、自己成長の末に独立。
            </p>
            
            <p className="text-solid-gray-300">
              多くのことにチャレンジし、営業からIT部門まで幅広い経験を積み、責任者として様々なプロジェクトを成功に導いてきました。
            </p>
            
            <p className="text-solid-gray-300">
              「このままでいいのか」という内なる声に従い、変化を恐れず一歩を踏み出した経験から、
              人生は自ら切り拓くものだと確信しています。
            </p>
            
            <p className="text-solid-gray-300">
              安定より挑戦を。平凡より情熱を。そして何より、人生を思い切り楽しむことを大切にしています。
            </p>
            
            <p className="text-solid-gray-300">
              あなたも同じように、自分らしい人生を生きませんか？
              その一歩を踏み出す勇気を、私たちが全力でサポートします。
            </p>
            
            <p className="text-solid-gray-300 font-semibold mt-4">
              「人生は一度きり。後悔のない選択を。」
            </p>
            
            <h4 className="text-xl font-bold mt-8 mb-3">若い世代へのメッセージ</h4>
            
            <p className="text-solid-gray-300">
              自分の可能性を決めつけないでください。
            </p>
            
            <p className="text-solid-gray-300">
              私も普通のサラリーマンからスタートし、多くの挑戦を経て今があります。
            </p>
            
            <p className="text-solid-gray-300">
              不安や迷いは誰にでもありますが、それを超えた先に本当の充実があります。
            </p>
            
            <p className="text-solid-gray-300">
              明るく前向きに、そしてやるときは全力で。
            </p>
            
            <p className="text-solid-gray-300">
              私たちと一緒に、あなたの人生の主役になりましょう。
            </p>
          </motion.div>
        </div>

        {/* 強みセクション */}
        <h3 className="text-2xl font-bold mb-12 text-center">わたしたちの強み</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-solid-gray-800 p-6 rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-solid-gray-700 rounded-full flex items-center justify-center mb-4 text-solid-gray-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-solid-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 