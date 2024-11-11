import {
  Building2,
  CircleHelp,
  ClockArrowUp,
  CreditCard,
  FolderDown,
  Globe,
  Landmark,
  MessageCircleMore,
  MessageCircleQuestion,
  Sparkles,
  Users,
} from 'lucide-react';

export const NavbarItems = [
  {
    label: 'EB-5 Visa Program',
    children: [
      {
        label: 'EB-5 Program',
        desc: 'Find out if the EB-5 Program is right for you.',
        link: '/eb-5-program',
        icon: <Globe />,
      },
      {
        label: 'Regional Center Due Diligence',
        desc: 'Understand what to look for in a trusted EB-5 partner.',
        link: '/regional-center-due-diligence',
        icon: <Landmark />,
      },
      {
        label: 'EB-5 Cost & Process',
        desc: 'Get a step-by-step overview of the EB-5 program and requirements.',
        link: '/eb-5-cost-process',
        icon: <ClockArrowUp />,
      },
      {
        label: 'Frequently Asked Questions',
        desc: 'Find the answers you’re looking for, or get in touch with our team.',
        link: '/faq',
        icon: <MessageCircleQuestion />,
      },
    ],
  },
  {
    label: 'Investor Success',
    children: [
      {
        label: 'Investor Testimonials',
        desc: 'Hear directly from our clients and partners.',
        link: '/testimonials',
        icon: <MessageCircleMore />,
      },
      {
        label: 'Investor Support',
        desc: 'How Be Americans supports clients after they’ve invested.',
        link: '/investor-support',
        icon: <CircleHelp />,
      },
      {
        label: 'EB-5 ROI Equity vs. Debt',
        desc: 'Understand the differences between each investment model.',
        link: '/eb-5-equity-vs-debt',
        icon: <CreditCard />,
      },
    ],
  },
  {
    label: 'Investor Resources',
    children: [
      {
        label: 'News & Events',
        desc: 'The latest from Be Americans, the EB-5 program, and more.',
        link: '/blog',
        icon: <Sparkles />,
      },
      {
        label: 'Education & Downloads',
        desc: 'Deep dive into our resources to better understand the EB-5 program.',
        link: '/resources',
        icon: <FolderDown />,
      },
    ],
  },
  {
    label: 'About',
    children: [
      {
        label: 'About Be Americans',
        desc: 'The longest standing EB-5 program in the United States.',
        link: '/company',
        icon: <Building2 />,
      },
      {
        label: 'Our Team',
        desc: 'Get to know the people behind Be Americans.',
        link: '/team',
        icon: <Users />,
      },
    ],
  },
];
