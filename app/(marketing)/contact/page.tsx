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
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { BackgroundGradient } from '#components/gradients/background-gradient'

const MotionBox = motion(Box as any)

export default function ContactPage() {
  return (
    <Box position="relative" minH="100vh" overflow="hidden">
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
              bgGradient="linear(to-r, purple.400, pink.400, blue.400)"
              bgClip="text"
            >
              Get In Touch
            </Heading>
            <Text fontSize="lg" color="whiteAlpha.700">
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
            bg="whiteAlpha.50"
            backdropFilter="blur(20px)"
            borderWidth="1px"
            borderColor="whiteAlpha.200"
          >
            <VStack spacing={6} as="form">
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                <FormControl>
                  <FormLabel color="white">First Name</FormLabel>
                  <Input
                    placeholder="John"
                    bg="whiteAlpha.100"
                    borderColor="whiteAlpha.300"
                    color="white"
                    _placeholder={{ color: 'whiteAlpha.500' }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color="white">Last Name</FormLabel>
                  <Input
                    placeholder="Doe"
                    bg="whiteAlpha.100"
                    borderColor="whiteAlpha.300"
                    color="white"
                    _placeholder={{ color: 'whiteAlpha.500' }}
                  />
                </FormControl>
              </SimpleGrid>

              <FormControl>
                <FormLabel color="white">Email</FormLabel>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  bg="whiteAlpha.100"
                  borderColor="whiteAlpha.300"
                  color="white"
                  _placeholder={{ color: 'whiteAlpha.500' }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color="white">Message</FormLabel>
                <Textarea
                  placeholder="Tell us how we can help..."
                  rows={6}
                  bg="whiteAlpha.100"
                  borderColor="whiteAlpha.300"
                  color="white"
                  _placeholder={{ color: 'whiteAlpha.500' }}
                />
              </FormControl>

              <Button
                size="lg"
                w="full"
                bg="purple.500"
                color="white"
                _hover={{ bg: 'purple.600' }}
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
