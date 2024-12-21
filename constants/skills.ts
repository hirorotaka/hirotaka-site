type SkillType = {
  name: string;
  image: string;
  years: string;
  framework: string;
  relatedServices?: string;
  description: string;
};

type StudySkillType = {
  name: string;
  image: string;
  years: string;
  framework: string;
  relatedServices?: string;
  description: string;
};

export const skills: SkillType[] = [
  {
    name: 'HTML',
    image: '/assets/skills/html.png',
    years: '経験:3年',
    framework: 'Haml',
    description:
      '業務ではHamlやhtmlを用いた開発を行っています。多くのサイトをコーディングした経験の経験があります。',
  },
  {
    name: 'CSS',
    image: '/assets/skills/css.png',
    years: '経験:3年',
    framework: 'Bootstrap・Semantic UI',
    description:
      '多くのサイトでスタイリングを行った経験があります。レシポンシブデザインやアニメーションを使ったスタイリングの経験があります。',
  },
  {
    name: 'Javascript',
    image: '/assets/skills/js.png',
    years: '経験:3年',
    framework: 'library Vue(0.5年)／jQuery(3年)',
    description:
      'フロント側でのバリデーションや動的なコンポーネントを作成しました。業務改善ツールとしてのchrome拡張機能やブックマークレットを作成の経験があります',
  },
  {
    name: 'PHP',
    image: '/assets/skills/php.png',
    years: '経験:3年',
    framework: '',
    description:
      'PHPフルスクラッチでのWEBアンケートの作成・認証・データ連携などの経験があります。',
  },
  {
    name: 'Ruby',
    image: '/assets/skills/ruby.png',
    years: '経験:3年',
    framework: 'Ruby on Rails',
    description:
      'リアルタイムライブ配信サービスの運用・保守に従事。追加機能やメンテナンスの経験があります。',
  },
  {
    name: 'MySQL',
    image: '/assets/skills/mysql.png',
    years: '経験:3年',
    framework: '',
    description: 'RubyやPHPでのDB接続SQLの発行などの経験があります。',
  },
  {
    name: 'GitLab',
    image: '/assets/skills/gitlab.png',
    years: '経験:3年',
    framework: '',
    description:
      '開発用のブランチ（development）から機能追加用のブランチを作成し、チーム内でコードレビューとプルリクエストによる承認フローを実施の経験があります。',
  },
  {
    name: 'AWS',
    image: '/assets/skills/aws.png',
    years: '経験:3年',
    framework: '',
    relatedServices: 'EC2, Auto Scaling, VPC, Route 53 RDSなど',
    description:
      'サーバーの監視であったり,cloudFront+S3でのアップロードファイルの活用。不具合があったときのログの調査などの経験があります。AWSでのメイン業務は監視とログ調査の経験があります。',
  },
];

export const studySkills: StudySkillType[] = [
  {
    name: 'React',
    image: '/assets/skills/react.png',
    years: '学習:1年',
    framework: 'React Router, Redux Toolkit',
    description:
      'SPAの開発に適しており、再利用可能なコンポーネント設計が魅力的でした。Udemyや技術書での学習、ポートフォリオサイトの作成を通じて理解を深めています。',
  },
  {
    name: 'Next.js',
    image: '/assets/skills/nextjs.png',
    years: '学習:1年',
    framework: 'App Router',
    description:
      'SSR/SSGによるSEO対策やパフォーマンス向上が可能な点を評価。公式ドキュメントとチュートリアルを通じて、フルスタックフレームワークとしての理解を深めています。本サイトはNext.jsを使用しています。',
  },
  {
    name: 'TypeScript',
    image: '/assets/skills/typeScript.png',
    years: '学習:1年',
    framework: '',
    description:
      '型安全性による開発効率の向上と保守性の高さから採用。技術書とリファレンスを活用し、段階的に既存のJavaScriptコードを移行しながら学習しています。',
  },
  {
    name: 'Laravel',
    image: '/assets/skills/laravel.png',
    years: '学習:0.5年',
    framework: 'Laravel Breeze',
    description:
      '堅牢なバックエンド開発のため選択。Ruby on Railsの知識を活用出来ると考え、キャッチアップには時間は掛からないと判断。豊富な資料や公式ドキュメントとUdemyを併用し、認証機能やRESTful APIの実装を通じて基礎を学んでいます。',
  },
  {
    name: 'Docker',
    image: '/assets/skills/docker.png',
    years: '学習:1年',
    framework: 'Docker Compose',
    description:
      '開発環境の統一と再現性の確保のため導入。今まではvirtualboxを使って開発環境を構築していたため、実務を想定した複数コンテナの構成管理やCI/CDパイプラインの構築にチャレンジしています。',
  },
];
