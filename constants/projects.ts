export type ProjectType = {
  name: string;
  githubUrl: string;
  image: string;
  category: string[];
  projectUrl?: string;
  deployed?: boolean;
};

export const projects: ProjectType[] = [
  {
    name: 'タスク管理アプリ',
    githubUrl: '',
    image: '/assets/projects/1.png',
    category: ['react', 'typescript', 'firebase'],
  },
  {
    name: 'ECサイト',
    githubUrl: '',
    image: '/assets/projects/2.png',
    category: ['nextjs', 'aws', 'stripe'],
    deployed: true,
  },
  {
    name: '天気予報アプリ',
    githubUrl: '',
    image: '/assets/projects/3.png',
    category: ['react', 'typescript', 'openweatherapi'],
    deployed: true,
  },
  {
    name: 'ブログプラットフォーム',
    githubUrl: '',
    image: '/assets/projects/4.png',
    category: ['nextjs', 'mongodb', 'tailwind'],
  },
  {
    name: 'チャットアプリ',
    githubUrl: '',
    image: '/assets/projects/5.png',
    category: ['react', 'firebase', 'material-ui'],
  },
  {
    name: 'ポートフォリオサイト',
    githubUrl: '',
    image: '/assets/projects/6.png',
    category: ['nextjs', 'typescript', 'tailwind'],
    deployed: true,
    projectUrl: 'https://portfolio.example.com',
  },
  {
    name: '画像共有アプリ',
    githubUrl: '',
    image: '/assets/projects/7.png',
    category: ['react', 'cloudinary', 'supabase'],
    deployed: true,
    projectUrl: 'https://imageshare.example.com',
  },
  {
    name: 'メモアプリ',
    githubUrl: '',
    image: '/assets/projects/8.png',
    category: ['vue', 'firebase', 'vuetify'],
    deployed: false,
  },
  {
    name: 'レシピ検索アプリ',
    githubUrl: '',
    image: '/assets/projects/9.png',
    category: ['react', 'redux', 'styled-components'],
    deployed: true,
    projectUrl: 'https://recipe-search.example.com',
  },
  {
    name: '家計簿アプリ',
    githubUrl: '',
    image: '/assets/projects/10.png',
    category: ['nextjs', 'prisma', 'postgresql'],
    deployed: false,
  },
];
