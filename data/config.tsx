import { FaGithub, FaTwitter, FaLinkedin, FaYoutube, FaDiscord } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Veriochi',
    description: 'The AI Workspace - Your AI. Your Files. One Workspace.',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Login',
        href: '/login',
      },
      {
        label: 'Sign Up',
        href: '/signup',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        &copy; {new Date().getFullYear()} Veriochi, Inc. All rights reserved.
      </>
    ),
    columns: {
      product: {
        title: 'Product',
        links: [
          { label: 'Features', href: '#' },
          { label: 'Enterprise', href: '#' },
          // { label: 'Bugbot', href: '#' },
          // { label: 'CLI', href: '#' },
          { label: 'Pricing', href: '#' },
        ],
      },
      resources: {
        title: 'Resources',
        links: [
          // { label: 'Download', href: '#' },
          // { label: 'Web Agents', href: '#' },
          // { label: 'Changelog', href: '#' },
          { label: 'Docs', href: '#' },
          { label: 'Forum', href: '#' },
          { label: 'Status', href: '#' },
        ],
      },
      company: {
        title: 'Company',
        links: [
          { label: 'Careers', href: '#' },
          { label: 'Blog', href: '#' },
          { label: 'Community', href: '#' },
          { label: 'Students', href: '#' },
          { label: 'Brand', href: '#' },
          // { label: 'Veriochi', href: '#' },
        ],
      },
      legal: {
        title: 'Legal',
        links: [
          { label: 'Terms of Service', href: '#' },
          { label: 'Privacy Policy', href: '#' },
          { label: 'Data Use', href: '#' },
          { label: 'Security', href: '#' },
        ],
      },
      follow: {
        title: 'Follow Us',
        links: [
          { label: <FaTwitter size="20" />, href: 'https://twitter.com/' },
          { label: <FaLinkedin size="20" />, href: 'https://linkedin.com/company/' },
          { label: <FaYoutube size="20" />, href: 'https://youtube.com/' },
          { label: <FaGithub size="20" />, href: 'https://github.com/' },
          { label: <FaDiscord size="20" />, href: 'https://discord.gg/' },
        ],
      },
    },
  },
  signup: {
    title: 'Start building with Veriochi',
    features: [
      {
        icon: FiCheck,
        title: 'Scribe Studio',
        description: 'AI-powered writing and documentation assistant for all your content needs.',
      },
      {
        icon: FiCheck,
        title: 'Canvas Studio',
        description:
          'Visual design and creative workspace where ideas come to life.',
      },
      {
        icon: FiCheck,
        title: 'Forge Studio',
        description:
          'Product development and rapid prototyping with AI assistance.',
      },
      {
        icon: FiCheck,
        title: 'Code Studio',
        description:
          'AI-powered coding environment that accelerates development.',
      },
    ],
  },
}

export default siteConfig
