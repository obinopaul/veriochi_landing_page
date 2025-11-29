'use client'

import { useState } from 'react'
import {
  Box,
  SimpleGrid,
  Container,
} from '@chakra-ui/react'
import { StudioCard } from './studio-card'
import { FiMessageSquare, FiFileText, FiCpu, FiPenTool } from 'react-icons/fi'
import { motion, Reorder } from 'framer-motion'

const MotionBox = motion(Box as any)

const initialStudios = [
  {
    id: 'chat',
    title: 'Chat Studio',
    description: 'Unlock fast, AI-powered research and instant answers, with autonomous agent-driven workflows and artifact generation.',
    icon: FiMessageSquare,
    color: '#c9b8a3', // warm tan
  },
  {
    id: 'docs',
    title: 'Docs Studio',
    description: 'Create, analyze, and present with a unified ecosystem of docs, sheets, and slides, enhanced by AI for advanced data analysis and focus.',
    icon: FiFileText,
    color: '#d4c4b0', // light beige
  },
  {
    id: 'build',
    title: 'Build Studio',
    description: 'Build and deploy custom applications with natural language prompts, live previews, and secure sandboxed environments.',
    icon: FiCpu,
    color: '#b8a894', // medium tan
  },
  {
    id: 'design',
    title: 'Design Studio',
    description: 'Turn your ideas into polished designs with bi-directional visual coding, infinite ideation canvas, and AI-powered diagram generation.',
    icon: FiPenTool,
    color: '#a89885', // darker tan
  },
]

export const StudiosSection = () => {
  const [studios, setStudios] = useState(initialStudios)

  return (
    <Box w="full" mt={16}>
      <Container maxW="container.xl">
        <Reorder.Group
          axis="x"
          values={studios}
          onReorder={setStudios}
          as="div"
          style={{
            display: 'flex',
            gap: '1.5rem',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {studios.map((studio) => (
            <Reorder.Item
              key={studio.id}
              value={studio}
              as="div"
              style={{ cursor: 'grab', width: '260px' }}
              whileDrag={{ scale: 1.05, zIndex: 10 }}
            >
              <StudioCard {...studio} />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </Container>
    </Box>
  )
}
