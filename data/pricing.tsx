import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing',
  description: '',
  plans: [
    {
      id: 'free',
      title: 'Free',
      description: 'Perfect to get started with AI Studios.',
      priceMonthly: '0',
      priceYearly: '0',
      features: [
        {
          title: 'Free forever',
        },
        {
          title: 'Access to 4-5 AI Studios',
        },
        {
          title: 'Limited usage per month',
        },
        {
          title: 'Bring your own API keys',
        },
        {
          title: 'Basic file storage',
        },
        {
          title: 'Community support',
        },
      ],
      action: {
        href: '/signup',
        label: 'Get Started',
      },
    },
    {
      id: 'pro',
      title: 'Pro',
      description: 'For professionals and growing teams.',
      priceMonthly: '20',
      priceYearly: '200',
      isRecommended: true,
      features: [
        {
          title: 'Everything in Free, plus:',
        },
        {
          title: 'Unlimited access to all AI Studios',
        },
        {
          title: 'Dedicated compute with frontier models',
        },
        {
          title: 'Priority routing and support',
        },
        {
          title: 'Team collaboration (up to 50 members)',
        },
        {
          title: 'Advanced analytics and usage tracking',
        },
        {
          title: 'Enhanced file storage',
        },
      ],
      action: {
        href: '/signup',
        label: 'Sign Up',
      },
    },
    {
      id: 'plus',
      title: 'Plus',
      description: 'Maximum power for large teams and enterprises.',
      priceMonthly: '100',
      priceYearly: '1000',
      features: [
        {
          title: 'Everything in Pro, plus:',
        },
        {
          title: 'Expanded reserved capacity',
        },
        {
          title: 'Early access to new AI Studios',
        },
        {
          title: 'Premium support',
        },
        {
          title: 'Team collaboration (100+ seats)',
        },
        {
          title: 'Custom integrations',
        },
        {
          title: 'Dedicated account manager',
        },
      ],
      action: {
        href: '/signup',
        label: 'Sign Up',
      },
    },
  ],
}
