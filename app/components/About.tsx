'use client';
import {
  awsCertificates,
  businessCertificates,
} from '@/constants/certification';
import React, { useState } from 'react';
import { AiFillBulb } from 'react-icons/ai';

function About() {
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  // 表示する資格の制御（最初の3つまたは全て）
  const displayedCertificates = showAllCertificates
    ? businessCertificates
    : businessCertificates.slice(0, 3);
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-whitesmoke"
      id="about"
    >
      <div className=" max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
            <span className="">
              <AiFillBulb className="w-4 h-4" />
            </span>
            自己紹介
          </p>
        </div>
        {/* メイン文 */}
        <div className="mt-7">
          <p className="mt-6 text-gray-600 text-lg md:text-xl leading-9">
            はじめまして！長崎県出身で、現在は佐賀県で暮らしている
            <span className="font-bold">hirotaka</span>
            と申します。趣味でアプリやシステム開発を楽しんでいます。
            <br />
            社会人としての第一歩は、発電所でのプラントエンジニアとしてスタート。10年間にわたり、大規模な発電設備の保守管理に携わり、安定した電力供給を支える仕事に励んできました。
            <br />
            <br />
            その後、独学でWebツールを作ってみたことをきっかけに、プログラミングの魅力に惹かれ、IT業界への転身を決意しました。新たな職場では、ライブ配信システムの運用・保守を担当。リアルタイム配信特有のサーバー負荷管理や、視聴者データの分析システムの開発やライブ配信開始前の事前待機ページ構築や事前に登録した方に配信URLやID・PWを発行するシステムの保守・運用など、3年間充実した経験を積むことができました。
            <br />
            また、業務効率化にも力を入れ、社内で使用するChrome拡張機能やLINEチャットボットなど、様々な便利ツールを開発してきました。
            <br />
            <br />
            現在は、最新のWeb技術スタックの習得とスキル強化に注力するため、キャリアの次のステージへと踏み出す決断をし、退職してエンジニアとしての専門性を高めることに専念中。日々新しい技術への探究心を持って、より革新的なwebサービスの開発に取り組んでいます。
          </p>
        </div>

        {/* 保有資格セクション */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">保有資格</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 技術資格グループ */}
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-gray-600">技術資格</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2 pl-2">
                {awsCertificates.map((cert) => (
                  <li key={cert.id}>
                    {cert.name} ({cert.code})
                  </li>
                ))}
              </ul>
            </div>

            {/* 業務・その他資格グループ */}
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-gray-600">その他資格</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2 pl-2">
                {displayedCertificates.map((cert) => (
                  <li key={cert.id}>{cert.name}</li>
                ))}
              </ul>

              {/* もっと見るボタン */}
              {businessCertificates.length > 3 && (
                <button
                  onClick={() => setShowAllCertificates(!showAllCertificates)}
                  className="text-blue-600 hover:text-blue-800 text-sm mt-2 flex items-center gap-1"
                >
                  {showAllCertificates ? (
                    <>閉じる</>
                  ) : (
                    <>もっと見る ({businessCertificates.length - 3})</>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
