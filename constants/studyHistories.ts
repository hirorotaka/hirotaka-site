export type StudyHistoryType = {
  id: number;
  name?: string;
  category: string[];
  imageIndex: number;
  period: string; // 学習期間
  platform: string; // 学習プラットフォーム
  platformUrl: string;
  description: string; // 学習内容
};

export const studyHistories: StudyHistoryType[] = [
  {
    id: 1,
    category: ['javascript'],
    period: '10時間',
    platform: 'Udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/javascript-essence/',
    description: 'javaScriptのメカニズムについて学習',
  },
  {
    id: 2,
    category: ['nextjs'],
    period: '6時間',
    platform: 'kindle',
    imageIndex: 8,
    platformUrl:
      'https://www.amazon.co.jp/Next-js-Server-Actions%E3%81%A7%E3%81%A4%E3%81%8F%E3%82%8B%E3%83%95%E3%83%AB%E3%82%B9%E3%82%BF%E3%83%83%E3%82%AF%E3%82%A2%E3%83%97%E3%83%AA-%E6%99%82%E7%9F%AD%E3%81%A7%E6%9C%AC%E6%A0%BC%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E9%96%8B%E7%99%BA%E3%81%A7%E3%81%8D%E3%82%8B%E6%9C%AC-Next-js%E3%83%95%E3%83%AB%E3%82%B9%E3%82%BF%E3%83%83%E3%82%AF-ebook/dp/B0DMQLP8Z9',
    description:
      'Server Actionsを主に学習。Next.jsの基本的な構成要素を理解し、実際にアプリケーションを作成してみる。',
  },
  {
    id: 3,
    category: ['react'],
    period: '3時間',
    platform: 'note',
    imageIndex: 0,
    platformUrl: 'https://note.com/terry10/n/nf0674af97617',
    description:
      'Reactの関数コンポーネントとTypeScriptの基礎理解。Reactでの外部APIとの連携方法などを学習。',
  },
  {
    id: 4,
    category: ['nextjs'],
    period: '3時間',
    platform: 'zenn',
    imageIndex: 0,
    platformUrl: 'https://zenn.dev/hathle/books/next-microcms-blog-book',
    description:
      'Next.jsとmicroCMSで技術ブログを作る過程で、NextjsとmicroCMSの使い方を学習。',
  },
  {
    id: 5,
    category: ['nextjs'],
    period: '3時間',
    platform: 'kindle',
    imageIndex: 8,
    platformUrl:
      'https://www.amazon.co.jp/Next-js%E3%81%A7%E3%81%A4%E3%81%8F%E3%82%8B%E3%83%95%E3%83%AB%E3%82%B9%E3%82%BF%E3%83%83%E3%82%AF%E3%82%A2%E3%83%97%E3%83%AA-%E5%89%8D%E7%B7%A8%EF%BC%88%E3%83%90%E3%83%83%E3%82%AF%E3%82%A8%E3%83%B3%E3%83%89%E9%96%8B%E7%99%BA%EF%BC%89-%E8%87%AA%E5%88%86%E3%81%B2%E3%81%A8%E3%82%8A%E3%81%A0%E3%81%91%E3%81%A7%E6%9C%AC%E6%A0%BC%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E9%96%8B%E7%99%BA%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%82%8B%E6%9C%AC-Next-js%E3%83%95%E3%83%AB%E3%82%B9%E3%82%BF%E3%83%83%E3%82%AF-%E4%B8%89%E5%A5%BD%E3%82%A2%E3%82%AD-ebook/dp/B0CNXPW7K2/ref=sr_1_6?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=5S4TUHZ0091R&dib=eyJ2IjoiMSJ9.22KXEBCRP_4BC4FMfMlXcnQIdpsDH9oqjPB1jo114V1w3xpVc9pkP9qwW7vfNQSSC3xrZ9yPpnola1Xuc_Gwo38hoO0digLU0XV1eQ11wjI9ntAGhWCPbiKejVfzWY5PE_-ZHTKGU98LDdzsaQ2J7FvNZWYijEgLMYa3pwGPZ-MyapRusTypEgXP5JlKz4ekB9cwtrq06Efs8895kGJAV1W9omhoX8lBXn_Jtgbhq1Y.VAeK1IVR9OM-1ACpvd3EmxpSMg4aGpfXoocYu3dBT5k&dib_tag=se&keywords=Nextjs&qid=1734748198&s=digital-text&sprefix=nextjs%2Ckindle-unlimited%2C174&sr=1-6',
    description:
      'Appフォルダ、middleware、データベース操作（mongoDB）、画像のアップロード(CloudInary)などを学習。',
  },
  {
    id: 6,
    category: ['nextjs'],
    period: '3時間',
    platform: 'kindle',
    imageIndex: 8,
    platformUrl:
      'https://www.amazon.co.jp/gp/product/B0CNZ6SXK8?ref_=dbs_p_nmg_rwt_cpsb_cl_1&storeType=ebooks',
    description:
      'Appフォルダ、middleware、データベース操作（mongoDB）、画像のアップロード(CloudInary)などを学習。',
  },
  {
    id: 6,
    category: ['react'],
    period: '4時間',
    platform: 'kindle',
    imageIndex: 8,
    platformUrl:
      'https://www.amazon.co.jp/gp/product/B0BJN4H1NF?ref_=dbs_m_nmg_rwt_calw_tkin_0&storeType=ebooks',
    description: 'MERNフルスタックでアプリ作成',
  },
  {
    id: 7,
    category: ['react'],
    period: '4時間',
    platform: 'kindle',
    imageIndex: 8,
    platformUrl:
      'https://www.amazon.co.jp/gp/product/B0BJMM1ZBP?ref_=dbs_m_nmg_rwt_calw_tkin_1&storeType=ebooks',
    description:
      'MERNフルスタックでアプリ作成 Nodejs + Express + MongoDB + React + TypeScriptの構成で学べた',
  },
  {
    id: 8,
    category: ['react'],
    period: '3時間',
    platform: 'kindle',
    imageIndex: 8,
    platformUrl:
      'https://www.amazon.co.jp/gp/product/B094Z1R281?ref_=dbs_m_nmg_rwt_calw_tkin_0&storeType=ebooks',
    description: 'React + TypeScriptを初見での概要を知るために学習',
  },
  {
    id: 9,
    category: ['react'],
    period: '3時間',
    platform: 'kindle',
    imageIndex: 8,
    platformUrl:
      'https://www.amazon.co.jp/gp/product/B09Q57Q9T1?ref_=dbs_m_nmg_rwt_calw_tkin_1&storeType=ebooks',
    description: 'React + TypeScriptを初見での概要を知るために学習',
  },
  {
    id: 10,
    category: ['react'],
    period: '20時間',
    platform: 'base',
    imageIndex: 0,
    platformUrl: 'https://monotein.base.shop/p/00001',
    description: 'Reactを深く学ぶために学習',
  },
  {
    id: 11,
    category: ['typescript'],
    period: '20時間',
    platform: 'base',
    imageIndex: 0,
    platformUrl: 'https://monotein.base.shop/p/00002',
    description: 'Reactで使うTypeScriptを深く学ぶために学習',
  },
  {
    id: 12,
    category: ['laravel'],
    period: '8時間',
    platform: 'kindle',
    imageIndex: 7,
    platformUrl:
      'https://www.amazon.co.jp/%EF%BC%91%E9%80%B1%E9%96%93%E3%81%A7%E5%9F%BA%E7%A4%8E%E3%81%8B%E3%82%89%E5%AD%A6%E3%81%B6Laravel%E5%85%A5%E9%96%80-minatomi-ebook/dp/B08WRP5G6C/?_encoding=UTF8&pd_rd_w=N0xdl&content-id=amzn1.sym.bb272e13-1a68-41b0-a370-44a252d487ac&pf_rd_p=bb272e13-1a68-41b0-a370-44a252d487ac&pf_rd_r=356-6434298-5910212&pd_rd_wg=ciy3i&pd_rd_r=99677798-0f0d-4d19-9ed9-8c7e4109570f&ref_=aufs_ap_sc_dsk',
    description: 'laravelの基礎入門としての学習',
  },
  {
    id: 13,
    category: ['laravel'],
    period: '8時間',
    platform: 'kindle',
    imageIndex: 7,
    platformUrl:
      'https://www.amazon.co.jp/Laravel-9-%E5%AE%9F%E8%B7%B5%E5%85%A5%E9%96%80-Mac-%EF%BD%9E%E9%96%8B%E7%99%BA%E7%92%B0%E5%A2%83%E3%83%BB%E5%AE%9F%E8%A3%85%E3%83%BB%E3%82%A2%E3%83%97%E3%83%AA%E5%85%AC%E9%96%8B%E3%81%BE%E3%81%A7%E3%81%AE%E6%B5%81%E3%82%8C%E3%82%92%E5%AE%8C%E5%85%A8%E7%B6%B2%E7%BE%85%EF%BD%9E-ebook/dp/B09Z8L15RV?ref_=ast_author_mpb',
    description: 'laravelの開発環境・CRUD処理の学習',
  },
  {
    id: 14,
    category: ['typescript'],
    period: '15時間',
    platform: '図書館本',
    imageIndex: 6,
    platformUrl:
      'https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%99%E4%BA%BA%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AETypeScript%E5%85%A5%E9%96%80-%E5%AE%89%E5%85%A8%E3%81%AA%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9%E3%81%8B%E3%82%89%E9%AB%98%E5%BA%A6%E3%81%AA%E5%9E%8B%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9%E3%81%BE%E3%81%A7-Software-Design-plus-%E9%88%B4%E6%9C%A8-ebook/dp/B09Y527YPV?ref_=ast_author_mpb',
    description:
      '気分転換に図書館で借りて本での学習。基礎知識を深く学ぶうえで良かった。また何回も読み直して知識を深めたい。',
  },
  {
    id: 15,
    category: ['laravel'],
    period: '6時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/laravel9/',
    description: 'laravelの仕組みを学ぶために学習',
  },
  {
    id: 16,
    category: ['laravel'],
    period: '12時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/laravel-11/',
    description: 'Laravel11を体系的に学ぶために学習',
  },
  {
    id: 17,
    category: ['laravel'],
    period: '12時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/laravel_quiz_app/',
    description:
      '実践に近そうな講座を探していて、見つけたため学習。要件定義から実装まで学習。',
  },
  {
    id: 18,
    category: ['laravel'],
    period: '5時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/vuejslaravel11/',
    description:
      'ReactをLaravelで使ったものがないか？探しているところで見つけたため学習。React+LaravelでのCRUD処理を学習。',
  },
  {
    id: 19,
    category: ['typescript'],
    period: '13時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/typescript-complete/',
    description:
      'TypeScriptを体系的に学ぶために学習。ジェネリクスとデコレータの理解が浅いので、復習で改めて学習したい。',
  },
  {
    id: 20,
    category: ['react'],
    period: '13時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/reacttypescrip-reacttypescript/',
    description:
      '難易度が高めで、React Hook FormとZodを利用したフォーム管理方法を学ぶために学習。FireBaseのFireStoreを導入してフルスタックで開発できるので、学習',
  },
  {
    id: 21,
    category: ['react'],
    period: '5時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/react-product-development/',
    description:
      'Reactの基礎(JSX記法、state管理、コンポーネントの使い方、再レンダリングと副作用「useEffect」、データ取得)をある程度理解した後に、自作アプリを作ってみようと思いイメージをつけるために学習',
  },
  {
    id: 22,
    category: ['react'],
    period: '5時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/react-3project-app-udemy/',
    description:
      '初級者〜中級者向けのものを探していて見つけたため学習。ポケモン図鑑・ブログ・ノートアプリなどを作成するなかでAPIフェッチを学習。',
  },
  {
    id: 23,
    category: ['react'],
    period: '25時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/react-complete-guide/',
    description:
      'reactを体系的に学んでみたいと思い学習・ReduxとRedux toolkitを使ってみたいと思い学習',
  },
  {
    id: 24,
    category: ['react'],
    period: '7時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl:
      'https://www.udemy.com/course/modern_javascipt_react_beginner/',
    description: 'React教材で評価が高く、わかりやすそうだったので学習。',
  },
  {
    id: 25,
    category: ['react'],
    period: '8時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/react_stepup/',
    description:
      'コンポーネントの分割方法(Atomic Design)を学べそうだったので学習。',
  },
  {
    id: 26,
    category: ['react'],
    period: '4時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/react_v18//',
    description: 'TransitionやSuspenseの使い方を学べそうだったので学習.',
  },
  {
    id: 27,
    category: ['nextjs'],
    period: '6時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/nextjs-fullstack/',
    description: 'App Routerを学べそうだったので学習.',
  },
  {
    id: 28,
    category: ['nodejs'],
    period: '18時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/nodejs-comp-guide/',
    description: 'Node.jsを体系的に学べそうだったので学習.',
  },
  {
    id: 29,
    category: ['react'],
    period: '4時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/discord-clone-udemy/',
    description: 'Reactで実務で使えそうな教材で学べそうだったので学習.',
  },
  {
    id: 30,
    category: ['react'],
    period: '4時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/react-chart-app/',
    description: 'Reactでミニアプリを作成しつつ学べそうだったので学習.',
  },
  {
    id: 31,
    category: ['javascript'],
    period: '46時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/javascript-complete/',
    description:
      'JavaScriptで実務で使っていたものの、改めて体系的に学べそうだったので学習.',
  },
  {
    id: 32,
    category: ['typescript'],
    period: '15時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl:
      'https://www.udemy.com/course/learning-application-architecture-with-reversi/?kw=%E3%83%AA%E3%83%90%E3%83%BC%E3%82%B7%E3%81%A7&src=sac',
    description:
      'TypeScriptを学びつつ、アプリケーションアーキテクチャを学べそうだったので学習.理解度が浅かったので改めて復習したい。',
  },
  {
    id: 33,
    category: ['git'],
    period: '10時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/aigitgithub/',
    description: '実務で使っていたものの、改めてGitを学べそうだったので学習.',
  },
  {
    id: 34,
    category: ['docker'],
    period: '10時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/aidocker/',
    description:
      '今後Dockerでの開発が主流になり、わかりやすく学べそうだったので学習.',
  },
  {
    id: 35,
    category: ['php'],
    period: '33時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/backend-tutorial/',
    description: 'PHPをガチで学んでみたくなったので学習.網羅的に学べた。',
  },
  {
    id: 36,
    category: ['php'],
    period: '15時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/code-php/',
    description: 'PHPの基礎を徹底的に学べそうだったので学習.',
  },
  {
    id: 37,
    category: ['php'],
    period: '23時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/code-php-db/',
    description: 'PHPで中級者向けの教材で学びつつ、改めて学ぶために学習.',
  },
  {
    id: 38,
    category: ['php'],
    period: '23時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/webphpmysqldocker/',
    description: 'PHPで中級者向けの教材で学びつつ、改めて学ぶために学習.',
  },
  {
    id: 39,
    category: ['python'],
    period: '23時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/python-ai/',
    description:
      'Pythonで初級者向けの教材で学びつつ、簡単ではない教材で学ぶために学習.',
  },
  {
    id: 40,
    category: ['linux・linuc'],
    period: '23時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/linuc-lv1/',
    description: '実務で使っていたものの、改めてLinuxを学べそうだったので学習.',
  },
  {
    id: 41,
    category: ['nextjs'],
    period: '23時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/ainextjsopenai-api5aichatgpt/',
    description: 'nextjsで中級者向けやAIを活用した教材で学ふために学習.',
  },
  {
    id: 42,
    category: ['nodejs'],
    period: '11時間',
    platform: 'udemy',
    imageIndex: 0,
    platformUrl: 'https://www.udemy.com/course/clean-code-tutorial/',
    description: '良いコードを書くための教材で学ふために学習.',
  },
  {
    id: 43,
    category: ['fullstack'],
    period: '11時間',
    platform: 'ShinCode_Camp',
    imageIndex: 0,
    platformUrl:
      'https://code-s-school-5bc2.thinkific.com/courses/next-js-x-shadcn-ui-web-contentlayer',
    description: 'NextjsとShadcnUIを使ってみたく、学習.',
  },
  {
    id: 44,
    category: ['react'],
    period: '6時間',
    platform: 'ShinCode_Camp',
    imageIndex: 0,
    platformUrl:
      'https://code-s-school-5bc2.thinkific.com/courses/react-19-react-hooks-hooks',
    description:
      'レンダリングのタイミング/キャッシュ/状態管理/メモ化/パフォーマンスチューニングを学んでみたく、学習.',
  },
  {
    id: 45,
    category: ['react'],
    period: '6時間',
    platform: 'ShinCode_Camp',
    imageIndex: 0,
    platformUrl: 'https://code-s-school-5bc2.thinkific.com/courses/react',
    description:
      'TanStack QueryやuseSWRを使ったキャッシュ化戦略を学んでみたく、学習.',
  },
  {
    id: 46,
    category: ['fullstack'],
    period: '7時間',
    platform: 'ShinCode_Camp',
    imageIndex: 0,
    platformUrl:
      'https://code-s-school-5bc2.thinkific.com/courses/notion-mern-web',
    description:
      'Reactの中級者向けの教材で学ふために学習。React/Redux/Node.js/Express/MongoDB。ユーザー認証(JWT)APIやメモ作成API構築など',
  },
  {
    id: 47,
    name: '【完全保存版】MERNフルスタック開発で本格的なSNSアプリを１から自分の手で構築してみよう',
    category: ['fullstack'],
    period: '10時間',
    platform: 'ShinCode_Camp',
    imageIndex: 0,
    platformUrl: 'https://code-s-school-5bc2.thinkific.com/courses/mern-sns',
    description: 'MERNフルスタック開発で面白そうだったため学習.',
  },
  {
    id: 48,
    category: ['fullstack'],
    period: '5時間',
    platform: 'ShinCode_Camp',
    imageIndex: 0,
    platformUrl:
      'https://code-s-school-5bc2.thinkific.com/courses/next-jsxnode-jsxprismaxsupabase-sns',
    description: 'Prisma・Supabaseを使ってみたく、学習.',
  },
  {
    id: 49,
    category: ['nextjs'],
    period: '1時間',
    platform: 'ShinCode_Camp',
    imageIndex: 0,
    platformUrl:
      'https://code-s-school-5bc2.thinkific.com/courses/rendering-patterns-for-webdev',
    description: 'CSR/SSG/SSR/ISRを学んでみたく、学習.',
  },
  {
    id: 50,
    name: '【Redux完全入門】絶対に理解させるReduxアルゴリズム徹底解説入門パック',
    category: ['react'],
    period: '3時間',
    platform: 'ShinCode_Camp',
    imageIndex: 0,
    platformUrl: 'https://code-s-school-5bc2.thinkific.com/courses/redux-redux',
    description: 'Reduxの理解が浅いと感じたため、しっかり学ふために学習.',
  },
  {
    id: 51,
    name: '【フォーム開発実践】認証やお問い合わせフォームをNext.js/RHF/zod等のモダン技術を使って開発する実践講座',
    category: ['Nextjs'],
    period: '4時間',
    platform: 'ShinCode_Camp',
    imageIndex: 0,
    platformUrl: 'https://code-s-school-5bc2.thinkific.com/courses/redux-redux',
    description:
      '「Next.js」「react-hook-form」「zod」「shadcn/ui」を使ったフォームコンポーネント作成を学んでみたく、学習.',
  },
  {
    id: 52,
    category: ['react'],
    period: '4時間',
    platform: 'ShinCode_Camp',
    imageIndex: 0,
    platformUrl:
      'https://code-s-school-5bc2.thinkific.com/courses/react-trello-react',
    description: 'Reactでドラッグアンドドロップを学んでみたく、学習.',
  },
];
