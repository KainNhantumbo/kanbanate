import { Option } from '@/types';
import { IconType } from 'react-icons';
import Package from '../../package.json';
import { RiGithubLine, RiMailCheckLine, RiStackLine } from 'react-icons/ri';

export const metadata = {
  author: Package.author,
  appName: Package.metadata.name,
  version: Package.version,
  license: Package.license,
  repository: Package.repository,
  websiteName: Package.website_name,
  tags: Package.keywords.join(' '),
  websiteUrl: Package.url,
  description: 'A simple taking notes application to fit your daily needs.',
  copyright: `${new Date().getFullYear()} ${Package.metadata.name}`,
  contacts: [
    {
      name: 'Github',
      icon: RiGithubLine,
      url: Package.author.github
    },
    {
      name: 'Portfolio',
      icon: RiStackLine,
      url: Package.author.portfolio
    },
    {
      name: 'E-mail',
      icon: RiMailCheckLine,
      url: Package.author.email
    }
  ]
};

export const nav_anchors = [
  { name: 'Overview', url: '/', alias: 'overview' },
  { name: 'Features', url: '#features', alias: 'features' }
];

export const app_features: {
  icon: IconType;
  title: string;
  content: string;
}[] = [];

export const footerAnchors = [
  { name: 'Privacy Policy', anchor: '/docs/privacy-policy' },
  { name: 'Contact', anchor: '/docs/contact' },
  { name: 'FAQ', anchor: '/docs/faq' },
  { name: 'Donate', anchor: 'https://www.buymeacoffee.com/nhantumbokU' },
  { name: 'Github', anchor: metadata.repository },
  { name: 'Portfolio', anchor: 'https://portifolio-dev-mu.vercel.app' }
].sort((a, b) => (a.name > b.name ? 1 : -1));

export const sortOptions: Option[] = [
  { value: 'title', label: 'Title [A-Z]' },
  { value: '-title', label: 'Title [Z-A]' },
  { value: '-createdAt', label: 'Date Created' },
  { value: 'createdAt', label: 'Date Created [Inverted]' },
  { value: '-updatedAt', label: 'Date Updated' },
  { value: 'updatedAt', label: 'Date Updated [Inverted]' }
];

export const colorSchemeOptions = [
  { label: 'Light Theme', value: `{"mode":"manual", "scheme": "light"}` },
  { label: 'Dark Theme', value: `{"mode":"manual", "scheme": "dark"}` },
  { label: 'Automatic', value: `{"mode":"auto", "scheme": "dark"}` }
];

export const TaskBoardsMap = [
  { value: 'todo', data: { label: 'To Do', color: '#3D9A50' } },
  { value: 'in_progress', data: { label: 'In Progress', color: '#FBBD08' } },
  { value: 'done', data: { label: 'Done', color: '#C62A2F' } }
];
