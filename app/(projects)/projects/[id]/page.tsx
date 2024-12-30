import ImageSlider from '@/app/components/ImageSlider';
import TopButton from '@/app/components/TopButton';
import {
  afterLoginSlides,
  beforeLoginSlides,
} from '@/constants/imageSliderDescription';
import Image from 'next/image';

export default function ProjectPage() {
  return (
    <>
      <div className="bg-whitesmoke max-w-7xl px-8 py-6">
        {/* プロジェクト概要 */}
        <section id="overview" className="mb-16">
          <h1 className="text-2xl sm:text-4xl font-bold mb-6">
            アプリ名：voice Chatzz
          </h1>

          {/* アプリ画像セクション - 2カラムグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-8 w-full mb-8">
            <ImageSlider slides={beforeLoginSlides} title="ログイン前の画面" />
            <ImageSlider slides={afterLoginSlides} title="ログイン後の画面" />
          </div>

          {/* ボタンセクション */}
          <div className="flex gap-4 mb-8">
            <a
              href="https://voice-chattz.com/"
              target="_blank"
              className="bg-black text-white px-2 py-3 rounded-lg hover:bg-black/90"
            >
              アプリを見る
            </a>
            <a
              href="https://github.com/hirorotaka/voice-chattz"
              target="_blank"
              className="border border-black px-6 py-3 rounded-lg hover:bg-gray-50"
            >
              ソースコード
            </a>
          </div>

          {/* 説明文 */}
          <div className="prose max-w-none">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">アプリ概要</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              ブラウザ上から音声を録音して、音声をリアルタイムにテキスト化し、AIが音声と文字を返答してやり取りが出来るアプリ。
              カスタマイズしたAIキャラクターを作成することが出来て、たくさんのシチュエーションでの学習体験をすることができます。
              例えば英会話の練習や相談相手、面接練習など、様々な目的に応用できます。
            </p>
          </div>
        </section>

        {/* 開発の背景 */}
        <section id="background" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">開発の背景</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              日々の生活の中で「アイディアがあるから誰かと話したい」「モヤモヤした気持ちを吐き出したい」という思いが突発的に生まれてくることがあり、その都度自分の頭の中で一旦完結させるという日々を生活で繰り返していました。
              <br />
              <br />
              人とのコミュニケーションで、LINEやSNSでのコミュニケーションは気軽である一方、相手の時間を考慮する必要があり、深夜や早朝など、突発的な話したい気持ちを満たせないことが多くありました。
              <br />
              <br />
              また、自分の考えや悩みを整理したいとき、独り言を言っても何か物足りない。かといって、カウンセリングサービスは敷居が高く、友人に相談するほどでもない...。そんな「ちょっとした誰か」の存在が欲しいと感じていました。
              <br />
              <br />
              そこで着目したのが、AIとの会話という選択肢です。時間を気にせず、気軽に話しかけられる相手。しかも、ただ話を聞くだけでなく、適切なアドバイスやフィードバックをくれる存在。これなら、誰かに迷惑をかけることなく、自分のペースで話せると考えました。
              <br />
              <br />
              さらに開発を進める中で、英会話の練習や面接の練習など、より実用的な用途にも活用できることに気がつきました。カスタマイズ可能なAIキャラクター機能を実装することで、ユーザーが求める「話し相手」を柔軟に設定できるようにしました。
              このアプリケーションが、私のような一人暮らしの人や、誰かと話したい人の心の拠り所になれば嬉しいと考えています。
            </p>
          </div>
        </section>

        {/* 使用技術 */}
        <section id="tech" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">使用技術</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">フロントエンド</h3>
              <ul className="space-y-2 text-gray-600">
                <li>React 18.2.0</li>
                <li>TypeScript</li>
                <li>TailwindCSS</li>
                <li>Flowbite React</li>
                <li>axios</li>
                <li>RecordRTC</li>
                <li>API連携 inertiajs/react</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">バックエンド</h3>
              <ul className="space-y-2 text-gray-600">
                <li>PHP 8.4</li>
                <li>Laravel Framework 11.35.1</li>
                <li>認証機能(Laravel Breeze)</li>
                <li>MySQL 8.0</li>
                <li>mailpit(開発環境でのメール確認)</li>
                <li>API連携 inertiajs/inertia-laravel</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">インフラ</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Heroku</li>
                <li>sendGrid</li>
                <li>s3 + cloudfront</li>
                <li>docker(Laravel Sail) 開発環境</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">その他</h3>
              <ul className="space-y-2 text-gray-600">
                <li>webAPI OpenAI_API</li>
                <li>作業環境：Mac M2 mini</li>
              </ul>
            </div>
            {/* 他の技術カテゴリー */}
          </div>
        </section>
        {/* ER図 */}
        <section id="er-drawio" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">ER図</h2>
          <div className="relative w-full">
            <Image
              src="/er-drawio.png" // または .png
              alt="ER Diagram"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* 開発期間 */}
        <section id="mvp-release" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            MVPリリースまで（2024年11月29日〜2024年12月18日）
          </h2>
          <div className="grid grid-cols-1  gap-8">
            <p className="text-gray-600">
              MVPリリース時点では、音声録音機能、AIによる解答機能・解答の翻訳、使用言語の選択、MyAIキャラクター作成・公開AIキャラクター使用機能のみを実装しました。
            </p>
          </div>
        </section>
        {/* 本リリースまで */}
        <section id="official-release" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            本リリースまで（2024年12月19日〜2024年12月29日）
          </h2>
          <div className="grid grid-cols-1  gap-8">
            <p className="text-gray-600">
              MVPリリースの際にいただいたフィードバックについて修正を行うとともに、画面デザインの修正UI/UXの向上を図りました。
              当初予定していた１ヶ月で本リリースまで出来て良かったです。
            </p>
          </div>
        </section>

        {/* 主な機能 */}
        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">主な機能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 機能カード */}
            {/* 音声録音機能 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">音声録音機能</h3>
              <p className="text-gray-600">
                RecordRTCライブラリを使用して、ブラウザ上でユーザーの音声をキャプチャ・録音します。MediaRecorderAPIと組み合わせることで、高品質な音声録音とリアルタイムの音声ストリーミングを実現。録音データはBlobとして一時保存され、APIエンドポイントに送信されます。
              </p>
            </div>

            {/* 使用言語選択機能 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">使用言語選択機能</h3>
              <p className="text-gray-600">
                OpenAI
                APIのwhisperモデルは、たくさんの言語に対応。言語選択に応じて、音声認識の言語モデルとAIの応答言語を切り替えます。
                設定した言語はデータベースで管理しています。
              </p>
            </div>

            {/* 音声文字起こし機能 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">音声文字起こし機能</h3>
              <p className="text-gray-600">
                OpenAI
                APIのWhisperモデルを使用して、録音された音声データをテキストに変換します。音声ファイルはバックエンドでS3に一時保存され、Whisper
                APIに送信。高精度な文字起こし結果をJSON形式でフロントエンドに返却し、非同期処理でUIに反映します。
              </p>
            </div>

            {/* AI音声返答機能 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">AI音声返答機能</h3>
              <p className="text-gray-600">
                OpenAI
                APIのGPT-4モデルを使用して、文字起こしされたテキストに対する応答を生成。生成されたテキストはTTS（Text-to-Speech）APIを通じて音声に変換され、WebAudio
                APIを使用してブラウザ上でスムーズに再生されます。
              </p>
            </div>

            {/* AI音声翻訳機能 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">AI音声翻訳機能</h3>
              <p className="text-gray-600">
                OpenAI
                APIのGPT-4モデルの高度な多言語処理能力を活用し、会話内容をリアルタイムで翻訳。原文と翻訳文を並列表示し、ユーザーの学習効果を高めます。翻訳精度の向上のため、コンテキストを考慮した翻訳プロンプトを実装しています。
              </p>
            </div>

            {/* カスタムAIキャラクター作成機能 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                カスタムAIキャラクター作成機能
              </h3>
              <p className="text-gray-600">
                ユーザー定義のプロンプトをLaravelのバックエンドで管理し、OpenAI
                APIのGPT-4モデルの応答を制御。キャラクター設定はMySQLデータベースで管理され、ユーザーごとのカスタマイズ設定を保存。設定に基づいて一貫した性格とトーンでの応答を実現します。
              </p>
            </div>

            {/* 公開AIキャラクター使用機能 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                公開AIキャラクター使用機能
              </h3>
              <p className="text-gray-600">
                共有されたAIキャラクター設定をMySQLデータベースで一元管理し、ユーザー間での共有を実現。キャラクター検索機能はEloquentのクエリビルダを使用して実装し、カテゴリやキーワードでの柔軟な検索を可能にしています。
              </p>
            </div>
          </div>
        </section>

        {/* 工夫した点 */}
        <section id="highlights" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">工夫した点</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">UI / UX</h3>
              <p className="text-gray-600">
                とにかくユーザーがストレスなく、サクサクと使えるUI/UXの実装を図りました。
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-600">
                <li>メニューなどはサイドバーにすべて配置</li>
                <li>得たい情報が視覚的にパッと目につくようなページ構成</li>
                <li>画面全体の読み込みやスクロールをできるだけ減らす</li>
                <li>モーダルを使用したコンテンツの表示・切り替え</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                パフォーマンス最適化
              </h3>
              <p className="text-gray-600">
                不要なレンダリング防止のため、memo化・useMemo・useCallbackを実装
              </p>
            </div>
            {/* 他の工夫点 */}
          </div>
        </section>

        {/* 苦労した点・解決方法 */}
        <section id="challenges" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">苦労した点と解決方法</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">音声認識について</h3>
              <p className="text-gray-600">
                まず、いままで音声認識の実装を取り扱ったことがなく、音声認識についての知識がない中でのスタートでした。
                まず簡単に音声認識の概要を把握しました。（音声入力の受付・音声データの保存・音声データの処理）
                その後、サンプルになるような記事を読み込んだり、ChatGPTと壁打ちしたりしていました。その中でWebSpeech
                APIやMediaRecorder
                APIを使って音声認識を実装しました。試行錯誤した結果、javaScriptライブラリのRecordRTCがクロスブラウザ対応が充実しており、複数の音声フォーマットに対応していて安定して使えそうだったので採用としました。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                音声の無音検知について
              </h3>
              <p className="text-gray-600">
                音声が無音のまま、APIエンドポイントに送られたとき無音の音声を元に文字起こしをしており、文字起こしがうまくいかない事象が発生していました。そのため無音を検知する機能が必要と考えました。今回はAPI側で検知するようにしました。
                OpenAI_APIのWhisperでno_speech_thresholdというAPI側の無音判定閾値を設定して、
                音声の無音検知を実装しました。自宅での実験のみで現在もどの閾値が適切か調整中ではありますが、期待通りに無音検知を実装できました。また音声を無音で送ったときにブラウザに無音を通知する機能までできたので良かったです。
              </p>
            </div>
          </div>
        </section>

        {/* 今後の展望 */}
        <section id="future" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">今後の展望</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-3">改善点</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>
                AIとの会話なので、もっとテンポよく会話できるようにする。入力トークン数の制限などでレイテンシーの改善
              </li>
              <li>
                音声認識が、えー、あー、とかの状態を感知したらAI側が省いて最適化するようになっているので原文のまま取得出来るようにする。
              </li>
              <li>音声認識のときに多少の訛りなども認識できるようにする。</li>
              <li>
                AIをアイコンだけではなく、ビジュアルキャラクターにしてそれとも会話できるようにする。
              </li>
              <li>
                コードの品質を高めるためリファクタリングを実施しやすくするため、テストコードを書いてアプリの動作を確認する。
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-3">追加機能</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>
                ブラウザ間で直接リアルタイムな通信を可能にするWeb標準技術(webRTC)を組み込むことが出来れば、リアルタイムでのやり取りができるようになりそうと考えている。現在技術的に知見がないので、現在は未実装となっている。今後勉強してみて実装したい。
              </li>
            </ul>
          </div>
        </section>
      </div>
      <TopButton />
    </>
  );
}
