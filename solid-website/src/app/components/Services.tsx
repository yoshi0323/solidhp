'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaChartLine, FaLaptopCode, FaBullhorn, FaUsers, FaRocket, FaGraduationCap, FaHandshake } from 'react-icons/fa';
import Image from 'next/image';

const Services = () => {
  // シンプル化したアニメーション設定
  const headerAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-5%" },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  // カードごとのアニメーション設定 - 単純化
  const getCardAnimation = (index) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-5%" },
    transition: { 
      duration: 0.5, 
      delay: index * 0.1,
      ease: "easeOut"
    }
  });

  const services = [
    {
      icon: <FaChartLine className="w-6 h-6" />,
      image: '/images/service1.jpg',
      title: 'セールスプロモーション',
      description: '「期待を超える」をモットーに、お客様のビジネスを加速させる戦略的なプロモーションを展開。データ分析に基づく効果測定と、クリエイティブな企画力で、売上とブランド価値の両方を最大化します。',
      features: ['戦略的プロモーション設計', 'クリエイティブ制作', 'データドリブンな効果測定', 'ブランドストーリー構築'],
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      image: '/images/service2.jpg',
      title: 'セールスエージェンシー',
      description: '最新のテクノロジーと人間力を組み合わせた独自のセールス手法で、お客様のビジネス成長を加速。豊富な経験を持つ専門チームが、効率的な営業プロセスを構築し、継続的な成果を創出します。',
      features: ['ハイブリッドセールス支援', '営業プロセス最適化', '商談品質向上支援', '売上最大化コンサルティング'],
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      image: '/images/service3.jpg',
      title: '人材育成・研修',
      description: 'デジタル時代に求められる「人間力」と「技術力」の両面から、次世代のビジネスリーダーを育成。実践的なプログラムと、きめ細やかなフォローアップで、個人と組織の持続的な成長を支援します。',
      features: ['次世代リーダー育成', 'ハイブリッドスキル開発', 'メンタリング制度', '組織活性化支援'],
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      image: '/images/service4.jpg',
      title: 'スタートアップサポート',
      description: 'アイデアを形にし、ビジョンを実現するための包括的なサポートを提供。ビジネスモデルの構築から資金調達、組織づくりまで、起業家の夢の実現をワンストップでサポートします。',
      features: ['ビジョン実現支援', 'スタートアップ戦略立案', '資金調達アドバイス', '組織基盤構築'],
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      image: '/images/service5.jpg',
      title: 'システム開発',
      description: '最新技術と自社開発のノウハウを活かし、お客様のビジネスに最適なシステムを設計・開発。スピーディーな開発プロセスと品質の両立で、確実な課題解決を実現します。',
      features: ['要件定義・設計支援', 'フルスタック開発', 'クラウドインテグレーション', 'システム保守・運用'],
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      image: '/images/service6.jpg',
      title: 'マーケティング支援',
      description: 'データ分析と実践知を組み合わせた戦略的マーケティングで、集客からコンバージョンまでを最適化。お客様のビジネス成長を加速する効果的な施策を提案・実行します。',
      features: ['マーケティング戦略立案', 'デジタル広告運用', 'コンテンツ制作支援', 'データ分析・改善提案'],
    },
    {
      icon: <FaLaptopCode className="w-6 h-6" />,
      image: '/images/service7.jpg',
      title: 'IT戦略コンサルティング',
      description: '豊富なIT実務経験を活かし、企業のデジタル変革を包括的に支援。現状分析から戦略立案、実行支援まで、成果にこだわったコンサルティングを提供します。',
      features: ['IT戦略策定', 'システム選定・導入', 'セキュリティ対策', '業務改革支援'],
    },
    {
      icon: <FaBullhorn className="w-6 h-6" />,
      image: '/images/service8.jpg',
      title: '研修プログラム',
      description: '実践的な知見と体系的なカリキュラムで、次世代のビジネスリーダーを育成。個人のスキルアップと組織全体の成長を、バランスよく支援します。',
      features: ['リーダーシップ開発', 'テクニカルスキル研修', 'キャリア開発支援', 'チームビルディング'],
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* 背景デザイン - シンプル化 */}
      <div className="absolute inset-0 bg-gradient-to-b from-solid-gray-900 via-solid-gray-800 to-solid-gray-900 overflow-hidden">
        {/* 背景のグラデーションアニメーション */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 gradient-animation"></div>
        </div>
        
        {/* 背景パターン */}
        <div className="absolute inset-0 opacity-7">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>
        
        {/* 背景装飾 - 数を減らして最適化 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* 流れるようなライン - 3本に削減 */}
          <div className="absolute w-full h-full">
            {[...Array(3)].map((_, index) => (
              <div 
                key={`line-${index}`}
                className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                style={{
                  width: `${Math.min(100, 50 + index * 10)}%`,
                  top: `${20 + index * 25}%`,
                  left: '0',
                  transform: `rotate(${index % 2 ? 1 : -1}deg)`,
                  animation: `flowingLine ${10 + index * 2}s ease infinite`,
                  opacity: 0.2
                }}
              />
            ))}
          </div>
          
          {/* グラデーションブロブ - 2つに削減 */}
          <div className="absolute top-[20%] left-[10%] w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/5 to-indigo-500/5 filter blur-[80px] animate-pulse-slow"></div>
          <div className="absolute bottom-[30%] right-[15%] w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 filter blur-[100px] animate-pulse-slower"></div>
        </div>
        
        {/* キラキラ効果 - 6個に削減 */}
        <div className="absolute inset-0 overflow-hidden mix-blend-soft-light opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${(i * 16) % 100}%`,
                left: `${(i * 18) % 100}%`,
                opacity: 0.3 + ((i % 3) * 0.1),
                animation: `twinkle ${1 + (i % 3)}s ease infinite ${(i * 0.3) % 2}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* ヘッダーとの連続性のためのぼかし */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-solid-gray-900/80 via-solid-gray-900/40 to-transparent backdrop-blur-sm z-10"></div>
      
      {/* 下部グラデーション */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-solid-gray-900 to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* サービスヘッダー */}
        <motion.div
          {...headerAnimation}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 inline-block text-gradient">サービス</h2>
            <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
          <p className="text-solid-gray-300 max-w-2xl mx-auto mt-6">
            私たちは様々な経験から培ったノウハウを活かし、
            クライアントの課題解決と成長をサポートします。
          </p>
        </motion.div>

        {/* サービスリスト */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              {...getCardAnimation(index)}
              className="bg-solid-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl relative group hover:shadow-2xl hover:shadow-blue-500/10 hover:translate-y-[-4px] transition-all duration-300 border border-solid-gray-800/50"
            >
              <div className="relative h-60 sm:h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index < 3}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-solid-gray-900 via-solid-gray-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center z-10 transition-transform duration-300 group-hover:translate-x-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3 text-white shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 bg-solid-gray-900/50 backdrop-blur-sm">
                <p className="text-solid-gray-300 mb-4 text-sm sm:text-base">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-solid-gray-300 text-sm sm:text-base">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 社風セクション */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-24"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gradient">メリハリを大切にする社風</h3>
          <div className="flex flex-col gap-8">
            <div className="bg-solid-gray-900/70 backdrop-blur-md p-8 sm:p-10 rounded-xl shadow-xl text-center glass-effect border border-solid-gray-800/50">
              <p className="text-solid-gray-300 mb-4">
                私たちは「やるときはやる、休むときは休む」という明確なオンオフの切り替えを大切にしています。
              </p>
              <p className="text-solid-gray-300 mb-4">
                プロジェクトに全力で取り組む一方で、十分な休息と心身の健康も重視。
              </p>
              <p className="text-solid-gray-300">
                明るくポジティブな環境で、チームメンバー一人ひとりがパフォーマンスを最大限に発揮できる職場づくりを心がけています。
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative h-[600px] sm:h-[700px] md:h-[800px] w-full rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 group"
            >
              <Image
                src="/images/名称未設定っc.png"
                alt="SOLIDチームメンバー"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                quality={90}
                sizes="100vw"
                className="transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solid-gray-900 via-solid-gray-900/50 to-transparent"></div>
              
              {/* オーバーレイテキスト */}
              <div className="absolute bottom-8 left-0 right-0 text-center px-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                <p className="text-white text-lg sm:text-xl md:text-2xl font-bold drop-shadow-lg">
                  チームの力でビジネスを成功に導きます
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 