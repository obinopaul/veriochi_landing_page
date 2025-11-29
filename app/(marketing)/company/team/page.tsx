'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { TeamMemberCard } from '#components/team/team-member-card'
import { BackgroundGradient } from '#components/gradients/background-gradient'

const teamMembers = [
  {
    name: 'Paul Okafor',
    role: 'CEO & Co-Founder',
    bio: 'Visionary leader with 5+ years in AI and enterprise software. Previously led product at major tech companies, passionate about democratizing AI for creative professionals.',
    image: '/team/ceo.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Oluwafemi Adeniran',
    role: 'CTO & Co-Founder',
    bio: 'Former ML researcher at top AI labs. Expert in agentic AI systems and distributed computing. Committed to building scalable, intelligent infrastructure.',
    image: '/team/cto.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Reece Park',
    role: 'Head of Engineering',
    bio: 'Full-stack architect with expertise in real-time collaboration systems. Led engineering teams at fast-growing startups, focused on developer experience.',
    image: '/team/engineering.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Emma Thompson',
    role: 'Head of Design',
    bio: 'Award-winning product designer specializing in AI-powered tools. Believes in creating intuitive, beautiful interfaces that empower users.',
    image: '/team/design.jpg',
    linkedin: 'https://linkedin.com',
  },
]

export default function TeamPage() {
  const bgColor = useColorModeValue('white', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'white')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box position="relative" minH="100vh" bg={bgColor}>
      <BackgroundGradient height="100%" zIndex="-1" />
      
      <Container maxW="container.xl" pt={32} pb={20} position="relative" zIndex={1}>
        <VStack spacing={16}>
          {/* Hero Section with Teal Gradient Bar */}
          <VStack spacing={6} align="start" w="full">
            <Box>
              <Heading
                size="2xl"
                fontWeight="bold"
                color={textColor}
                mb={4}
              >
                Meet The Team
              </Heading>
              <Box
                h="4px"
                w="120px"
                bgGradient="linear(to-r, #c9b8a3, #d4c4b0)"
              />
            </Box>
            <Text fontSize="lg" color={mutedColor} maxW="3xl">
              We're a passionate group of innovators, engineers, and designers
              dedicated to transforming how people work with AI. Our diverse
              backgrounds and shared vision drive us to build the future of
              creative productivity.
            </Text>
          </VStack>

          {/* Mission Statement */}
          <Box
            w="full"
            p={8}
            borderRadius="lg"
            bg={useColorModeValue('gray.50', 'gray.800')}
            borderWidth="1px"
            borderColor={useColorModeValue('gray.200', 'gray.700')}
          >
            <Heading size="lg" mb={4} color={textColor}>
              Operating at the Intersection of AI and Creativity
            </Heading>
            <Text fontSize="md" color={mutedColor} lineHeight="tall">
              At Veriochi, we believe that AI should amplify human creativity,
              not replace it. Our team brings decades of combined experience in
              artificial intelligence, product design, and enterprise software
              to deliver best-in-class tools that empower professionals to do
              their best work. We're building the AI workspace of the future—one
              that's intuitive, powerful, and truly collaborative.
            </Text>
          </Box>

          {/* Leadership Section */}
          <VStack spacing={8} w="full" align="start">
            <Heading size="xl" color={textColor}>
              Leadership
            </Heading>
            
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 4 }}
              spacing={6}
              w="full"
            >
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
              ))}
            </SimpleGrid>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}
