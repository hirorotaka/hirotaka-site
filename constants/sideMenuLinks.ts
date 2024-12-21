export type SideMenuLinksType = {
  route: string;
  label: string;
  sectionId: string;
};

export const sideMenuLinks: SideMenuLinksType[] = [
  {
    route: '/',
    label: 'ホーム',
    sectionId: 'home',
  },
  {
    route: '#about',
    label: '自己紹介',
    sectionId: 'about',
  },
  {
    route: '#skills',
    label: '使用言語',
    sectionId: 'skills',
  },
  {
    route: '#projects',
    label: 'プロジェクト',
    sectionId: 'projects',
  },
  {
    route: '#studyhistory',
    label: '学習履歴',
    sectionId: 'studyhistory',
  },
  {
    route: '#contact',
    label: 'コンタクト',
    sectionId: 'contact',
  },
];
