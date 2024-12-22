import ImageSlider from '@/app/components/ImageSlider';
import Link from 'next/link';

export default function ProjectPage() {
  const beforeLoginSlides = [
    {
      image: '/portfolio/voiceChatzz.png',
      description:
        'ログイン前のホーム画面です。アプリの主な機能や特徴を紹介しています。',
    },
    {
      image: '/portfolio/voiceChatzz.png',
      description:
        '新規登録画面では、簡単な操作で学習を始められます。新規登録画面では、簡単な操作で学習を始められます。新規登録画面では、簡単な操作で学習を始められます。新規登録画面では、新規登録画面では、簡単な操作で学習を始められます。新規登録画面では、簡単な操作で学習を始められます。新規登録画面では、簡単な操作で学習を始められます。',
    },
  ];

  const afterLoginSlides = [
    {
      image: '/portfolio/voiceChatzz.png',
      description:
        'ログイン後のメイン画面です。AIとの会話練習がすぐに始められます。',
    },
    {
      image: '/portfolio/voiceChatzz.png',
      description: '学習履歴や進捗状況を確認できるダッシュボード画面です。',
    },
  ];

  return (
    <div className="max-w-7xl px-8 py-16">
      {/* プロジェクト概要 */}
      <section id="overview" className="mb-16">
        <h1 className="text-5xl font-bold mb-6">アプリ名：voice Chatzz</h1>

        {/* アプリ画像セクション - 2カラムグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full mb-8">
          <ImageSlider slides={beforeLoginSlides} title="ログイン前の画面" />
          <ImageSlider slides={afterLoginSlides} title="ログイン後の画面" />
        </div>

        {/* ボタンセクション */}
        <div className="flex gap-4 mb-8">
          <Link
            href="https://voice-chatzz.vercel.app/"
            target="_blank"
            className="bg-black text-white px-2 py-3 rounded-lg hover:bg-black/90"
          >
            サイトを見る
          </Link>
          <Link
            href="https://github.com/yourusername/voice-chatzz"
            target="_blank"
            className="border border-black px-6 py-3 rounded-lg hover:bg-gray-50"
          >
            ソースコード
          </Link>
        </div>

        {/* 説明文 */}
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            AIと音声認識を組み合わせた新しい言語学習プラットフォーム。
            ブラウザ上で音声をリアルタイムにテキスト化し、AIとの自然な会話を通じて語学学習ができます。
          </p>
        </div>
      </section>

      {/* 開発の背景 */}
      <section id="background" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">開発の背景</h2>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            既存の語学学習アプリの課題点や、開発に至った経緯について説明...
          </p>
        </div>
      </section>

      {/* 使用技術 */}
      <section id="tech" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">使用技術</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">フロントエンド</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Next.js 14 (App Router)</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">バックエンド</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
          {/* 他の技術カテゴリー */}
        </div>
      </section>

      {/* 主な機能 */}
      <section id="features" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">主な機能</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 機能カード */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">音声認識機能</h3>
            <p className="text-gray-600">
              Web Speech APIを使用したリアルタイム音声認識の実装詳細...
            </p>
          </div>
          {/* 他の機能カード */}
        </div>
      </section>

      {/* 工夫した点 */}
      <section id="highlights" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">工夫した点</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">パフォーマンス最適化</h3>
            <p className="text-gray-600">実装した最適化手法の詳細説明...</p>
          </div>
          {/* 他の工夫点 */}
        </div>
      </section>

      {/* 苦労した点・解決方法 */}
      <section id="challenges" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">苦労した点と解決方法</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">音声認識の精度向上</h3>
            <p className="text-gray-600">直面した課題と解決方法の詳細...</p>
          </div>
        </div>
      </section>

      {/* 今後の展望 */}
      <section id="future" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">今後の展望</h2>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            追加予定の機能や改善点について...
          </p>
        </div>
      </section>
    </div>
  );
}
