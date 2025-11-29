'use client'

import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { IconType } from 'react-icons'

interface StudioCardProps {
  id: string
  title: string
  description: string
  icon: IconType
  color: string
}

const MotionBox = motion(Box as any)

export const StudioCard = ({
  id,
  title,
  description,
  icon,
  color,
}: StudioCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Mouse tracking for 3D tilt
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const bgCard = useColorModeValue('whiteAlpha.100', 'blackAlpha.300')

  return (
    <Box
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      h="120px"
      w="260px"
      position="relative"
      style={{ perspective: '1000px' }}
    >
      <MotionBox
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        drag="x"
        dragMomentum={false}
        whileHover={{ scale: 1.02 }}
        whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
        h="full"
        w="full"
        cursor="grab"
      >
        <MotionBox
          h="full"
          w="full"
          borderRadius="xl"
          bg={bgCard}
          backdropFilter="blur(20px)"
          borderWidth="1px"
          borderColor="whiteAlpha.200"
          overflow="hidden"
          boxShadow="xl"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 50% 0%, ${color}30, transparent 70%)`,
            opacity: isHovered ? 1 : 0.5,
            transition: 'opacity 0.3s',
          }}
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            h="2px"
            bgGradient={`linear(to-r, transparent, ${color}, transparent)`}
          />

          <VStack h="full" justify="center" align="start" spacing={2} p={4} position="relative" zIndex={1}>
            <HStack spacing={2} align="center">
              <MotionBox
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? [0, -5, 5, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
                p={1.5}
                borderRadius="md"
                bg={`${color}20`}
                backdropFilter="blur(10px)"
                borderWidth="1px"
                borderColor={`${color}40`}
              >
                <Icon as={icon} boxSize={4} color={color} />
              </MotionBox>

              <Heading size="sm" color="white" fontWeight="semibold">
                {title}
              </Heading>
            </HStack>

            <Text fontSize="xs" color="whiteAlpha.700" lineHeight="short">
              {description}
            </Text>
          </VStack>

          {/* Animated corner accent */}
          <Box
            position="absolute"
            top={3}
            right={3}
            w="6px"
            h="6px"
            borderRadius="full"
            bg={color}
            opacity={0.6}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            // @ts-ignore
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            as={motion.div}
          />
        </MotionBox>
      </MotionBox>
    </Box>
  )
}

