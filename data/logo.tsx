import { chakra, HTMLChakraProps, useColorModeValue, HStack, Text, Box } from '@chakra-ui/react'
import Image from 'next/image'

export const Logo: React.FC<HTMLChakraProps<'div'>> = (props) => {
  const textColor = useColorModeValue('gray.900', 'white')

  return (
    <HStack {...props} alignItems="center" spacing={2} role="group">
      <Box 
        position="relative" 
        width="32px" 
        height="32px"
        transition="transform 0.5s ease-in-out"
        _groupHover={{ transform: 'rotate(360deg)' }}
      >
        <Image 
          src="/logos/logo.png" 
          alt="Veriochi Logo" 
          fill 
          sizes="32px"
          style={{ objectFit: 'contain' }} 
          priority
        />
      </Box>
      <Text fontSize="xl" fontWeight="bold" color={textColor} fontFamily="heading">
        Veriochi
      </Text>
    </HStack>
  )
}
