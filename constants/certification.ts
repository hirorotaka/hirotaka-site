export type AWSCertificateType = {
  id: number;
  name: string;
  code: string;
  fullName: string;
  validDate?: string; // 有効期限を追加したい場合
};

// 業務関連資格も定数化
export type BusinessCertificateType = {
  id: number;
  name: string;
  category?: string; // カテゴリー分けしたい場合
};

export const awsCertificates: AWSCertificateType[] = [
  {
    id: 1,
    name: 'AWS SAA',
    code: 'Solutions Architect - Associate',
    fullName: 'AWS Certified Solutions Architect - Associate',
  },
  {
    id: 2,
    name: 'AWS DVA',
    code: 'Developer - Associate',
    fullName: 'AWS Certified Developer - Associate',
  },
  {
    id: 3,
    name: 'AWS SOA',
    code: 'SysOps Administrator - Associate',
    fullName: 'AWS Certified SysOps Administrator - Associate',
  },
];

export const businessCertificates: BusinessCertificateType[] = [
  {
    id: 1,
    name: '危険物取扱者　乙種4類',
  },
  {
    id: 2,
    name: '第一種電気工事士合格',
  },
  {
    id: 3,
    name: '労働安全衛生法による技能講習修了証　ガス溶接',
  },
  {
    id: 4,
    name: '労働安全衛生法による技能講習修了証　玉掛け',
  },
  {
    id: 5,
    name: '労働安全衛生法による特別教育修了証　アーク溶接',
  },
  {
    id: 6,
    name: '労働安全衛生法による特別教育修了証　低圧電気',
  },
  {
    id: 7,
    name: '労働安全衛生法による特別教育修了証　自由研削砥石',
  },
  {
    id: 8,
    name: '労働安全衛生法による特別教育修了証　高圧電気',
  },
  {
    id: 9,
    name: '安全衛生法による免許証　クレーンデリック運転士',
  },
  {
    id: 10,
    name: '酸素欠乏・硫化水素危険作業主任者技能講習修了証',
  },
  {
    id: 11,
    name: '特定化学物質及び四ｱﾙｷﾙ鉛等作業主任者技能講習修了証',
  },
  {
    id: 12,
    name: '有機溶剤作業主任者技能講習修了証',
  },
  {
    id: 13,
    name: '安全衛生法による免許証　二級ボイラー技士',
  },
  {
    id: 14,
    name: '職長教育修了証',
  },
  {
    id: 15,
    name: '第二種電気工事士',
  },
];
