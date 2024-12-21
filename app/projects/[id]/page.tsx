export default function ProjectPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* 概要セクション */}
        <section id="overview" className="mb-16">
          <h1 className="text-5xl font-bold mb-6">voice Chatzz</h1>
          {/* 概要コンテンツ */}
        </section>

        {/* 使用技術セクション */}
        <section id="tech" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">使用技術</h2>
          {/* 使用技術コンテンツ */}
        </section>

        {/* 機能セクション */}
        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">主な機能</h2>
          {/* 機能コンテンツ */}
        </section>

        {/* 開発プロセスセクション */}
        <section id="process" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">開発プロセス</h2>
          {/* 開発プロセスコンテンツ */}
        </section>
      </div>
    </>
  );
}
