'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { BackgroundGradient } from '#components/gradients/background-gradient'

const MotionBox = motion(Box as any)

export default function ContactPage() {
  const bgColor = useColorModeValue('white', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'white')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const cardBg = useColorModeValue('gray.50', 'whiteAlpha.50')
  const inputBg = useColorModeValue('white', 'whiteAlpha.100')
  const inputBorder = useColorModeValue('gray.300', 'whiteAlpha.300')
  const buttonBg = useColorModeValue('#a89885', '#a89885')
  const buttonHover = useColorModeValue('#8a7a68', '#8a7a68')

  return (
    <Box position="relative" minH="100vh" overflow="hidden" bg={bgColor}>
      <BackgroundGradient height="100%" zIndex="-1" />
      
      <Container maxW="container.md" pt={32} pb={20} position="relative" zIndex={1}>
        <VStack spacing={12}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            textAlign="center"
          >
            <Heading
              size="2xl"
              mb={4}
              color={textColor}
            >
              Get In Touch
            </Heading>
            <Text fontSize="lg" color={mutedColor}>
              Have questions? We'd love to hear from you.
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            w="full"
            p={8}
            borderRadius="2xl"
            bg={cardBg}
            backdropFilter="blur(20px)"
            borderWidth="1px"
            borderColor={useColorModeValue('gray.200', 'whiteAlpha.200')}
            boxShadow={useColorModeValue('lg', 'none')}
          >
            <VStack spacing={6} as="form">
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                <FormControl>
                  <FormLabel color={textColor}>First Name</FormLabel>
                  <Input
                    placeholder="John"
                    bg={inputBg}
                    borderColor={inputBorder}
                    color={textColor}
                    _placeholder={{ color: mutedColor }}
                    _hover={{ borderColor: useColorModeValue('gray.400', 'whiteAlpha.400') }}
                    _focus={{ 
                      borderColor: buttonBg,
                      boxShadow: `0 0 0 1px ${buttonBg}`
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color={textColor}>Last Name</FormLabel>
                  <Input
                    placeholder="Doe"
                    bg={inputBg}
                    borderColor={inputBorder}
                    color={textColor}
                    _placeholder={{ color: mutedColor }}
                    _hover={{ borderColor: useColorModeValue('gray.400', 'whiteAlpha.400') }}
                    _focus={{ 
                      borderColor: buttonBg,
                      boxShadow: `0 0 0 1px ${buttonBg}`
                    }}
                  />
                </FormControl>
              </SimpleGrid>

              <FormControl>
                <FormLabel color={textColor}>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  bg={inputBg}
                  borderColor={inputBorder}
                  color={textColor}
                  _placeholder={{ color: mutedColor }}
                  _hover={{ borderColor: useColorModeValue('gray.400', 'whiteAlpha.400') }}
                  _focus={{ 
                    borderColor: buttonBg,
                    boxShadow: `0 0 0 1px ${buttonBg}`
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color={textColor}>Message</FormLabel>
                <Textarea
                  placeholder="Tell us how we can help..."
                  rows={6}
                  bg={inputBg}
                  borderColor={inputBorder}
                  color={textColor}
                  _placeholder={{ color: mutedColor }}
                  _hover={{ borderColor: useColorModeValue('gray.400', 'whiteAlpha.400') }}
                  _focus={{ 
                    borderColor: buttonBg,
                    boxShadow: `0 0 0 1px ${buttonBg}`
                  }}
                />
              </FormControl>

              <Button
                size="lg"
                w="full"
                bg={buttonBg}
                color="white"
                _hover={{ bg: buttonHover }}
                fontWeight="semibold"
              >
                Send Message
              </Button>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}
