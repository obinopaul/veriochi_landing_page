'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'
import { StudiosSection } from '#components/marketing/studios-section'

export const meta: Metadata = {
  title: 'Saas UI Landingspage',
  description: 'Free SaaS landingspage starter kit',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />
    </Box>
  )
}

import { UnicornBackground } from '#components/hero/unicorn-background'

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <UnicornBackground />
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 20, lg: 30 }} pb="30" position="relative" zIndex={1}>
        <Stack direction="column" alignItems="center" spacing={10}>
          <Hero
            id="home"
            align="center"
            justifyContent="center"
            px="0"
            title={
              <FallInPlace>
                <Text as="span" fontSize={['2xl', '3xl', '4xl']} fontWeight="medium" color="gray.500" _dark={{ color: 'gray.400' }}>
                  Your AI. your studios.{' '}
                </Text>
                <Text
                  as="span"
                  fontFamily="'Dancing Script', cursive"
                  fontSize={['4xl', '5xl', '6xl']}
                  lineHeight="1"
                  color="white"
                  display="inline-block"
                >
                  One Workspace.
                </Text>
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium" px="4" fontSize="lg">
                Veriochi is a next-generation cloud workspace 
                <Br /> for design, web app building, note-taking, and more...
                {/* <Br /> Your tools, files, and AI in perfect sync. */}
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center" justifyContent="center" pt="12" w="full">

                <ButtonLink
                  size="md"
                  href="/"
                  bg="white"
                  color="black"
                  _hover={{ bg: 'gray.100' }}
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height={{ base: '300px', lg: '500px' }}
            width="100%"
            maxW="1200px"
            margin="0 auto"
            position="relative"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%" borderRadius="2xl" boxShadow="2xl">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>

        
        <Box mt={72}>
            <StudiosSection />
        </Box>
      </Container>
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Unified AI Workspace">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Experience a workspace where your context travels with you. Switch
            between Studios without losing your train of thought or your files.
            Veriochi unifies writing, design, coding, and prototyping in one
            seamless flow.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Persistent Memory">
        <Text color="muted" fontSize="lg">
          Veriochi remembers everything so you don&apos;t have to. Your project
          history, preferences, and context are always available across all
          Studios and sessions.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        ΓÇ£Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.ΓÇ¥
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Everything you need to build"
      >
        <Text color="muted" fontSize="lg">
          We&apos;ve integrated the best AI models and tools into a single
          platform, so you can focus on creating.
        </Text>
        <Wrap mt="8">
          {[
            'writing',
            'design',
            'coding',
            'prototyping',
            'context',
            'memory',
            'files',
            'teams',
            'AI models',
            'collaboration',
            'security',
            'analytics',
            'automation',
            'workflows',
            'integrations',
            'api keys',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Not just another
          <Br /> AI tool.
        </Heading>
      }
      description={
        <>
          Veriochi is a complete workspace designed for the future of work.
          <Br />
          It combines the power of multiple AI agents with a unified file system
          and persistent memory.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Context Aware.',
          icon: FiBox,
          description:
            'The AI understands your entire project context, not just the current file or conversation.',
          variant: 'inline',
        },
        {
          title: 'Multi-Model.',
          icon: FiLock,
          description:
            'Access the best models from OpenAI, Anthropic, Google, and more in one place.',
          variant: 'inline',
        },
        {
          title: 'Secure.',
          icon: FiSearch,
          description:
            'Enterprise-grade security for your data and intellectual property.',
          variant: 'inline',
          },
        {
          title: 'Team Ready.',
          icon: FiUserPlus,
          description:
            'Collaborate with your team in real-time with shared workspaces and context.',
          variant: 'inline',
        },
        {
          title: 'Customizable.',
          icon: FiFlag,
          description:
            "Bring your own API keys or use our managed service. Configure the workspace to fit your needs.",
          variant: 'inline',
        },
        {
          title: 'Seamless.',
          icon: FiTrendingUp,
          description:
            'Move fluidly between writing, designing, and coding without context switching.',
          variant: 'inline',
        },
        {
          title: 'Dark Mode.',
          icon: FiToggleLeft,
          description:
            'Beautifully designed dark mode that is easy on the eyes for late night coding sessions.',
          variant: 'inline',
        },
        {
          title: 'Automated.',
          icon: FiTerminal,
          description:
            'Automate repetitive tasks with custom workflows and AI agents.',
          variant: 'inline',
        },
        {
          title: 'Cloud Native.',
          icon: FiCode,
          description: (
            <>
              Access your workspace from anywhere, on any device. Your environment is always ready.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}



export default Home
