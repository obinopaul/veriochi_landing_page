'use client'

import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Avatar,
  Link as ChakraLink,
  Icon,
} from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'

interface TeamMemberCardProps {
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
}

export const TeamMemberCard = ({
  name,
  role,
  bio,
  image,
  linkedin,
}: TeamMemberCardProps) => {
  const bgCard = useColorModeValue('gray.50', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'white')
  const roleColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box
      h="full"
      borderRadius="lg"
      bg={bgCard}
      overflow="hidden"
      boxShadow="sm"
      borderWidth="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      transition="all 0.3s"
      _hover={{ boxShadow: 'md', transform: 'translateY(-2px)' }}
    >
      <VStack spacing={4} p={6} align="start">
        <HStack spacing={4} align="start">
          <Avatar
            size="xl"
            name={name}
            src={image}
            borderRadius="md"
          />
          <VStack align="start" spacing={1} flex={1}>
            <Heading size="md" color={textColor}>
              {name}
            </Heading>
            <Text
              fontSize="sm"
              color={roleColor}
              fontWeight="semibold"
            >
              {role}
            </Text>
          </VStack>
        </HStack>

        <Text
          fontSize="sm"
          color={textColor}
          lineHeight="tall"
        >
          {bio}
        </Text>

        {linkedin && (
          <ChakraLink
            href={linkedin}
            isExternal
            color="#a89885"
            fontWeight="semibold"
            fontSize="sm"
            display="flex"
            alignItems="center"
            gap={1}
            _hover={{ color: '#8a7a68' }}
          >
            Read More
            <Icon as={FiArrowRight} />
          </ChakraLink>
        )}
      </VStack>
    </Box>
  )
}
