import {
  Box,
  BoxProps,
  Container,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import { useScroll } from 'framer-motion'
import { usePathname } from 'next/navigation'

import * as React from 'react'

import { Logo } from './logo'
import Navigation from './navigation'

export interface HeaderProps extends Omit<BoxProps, 'children'> {}

export const Header = (props: HeaderProps) => {
  const ref = React.useRef<HTMLHeadingElement>(null)
  const [y, setY] = React.useState(0)
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}
  const pathname = usePathname()

  const { scrollY } = useScroll()
  React.useEffect(() => {
    return scrollY.on('change', () => setY(scrollY.get()))
  }, [scrollY])

  const bg = useColorModeValue('whiteAlpha.700', 'rgba(29, 32, 37, 0.7)')
  
  // Only apply scroll-based color on home page
  const isHomePage = pathname === '/'
  const isScrolled = isHomePage ? y > 100 : false
  
  // On non-home pages, use simple color mode values
  const textColor = isHomePage 
    ? (isScrolled ? 'gray.800' : 'white')
    : useColorModeValue('gray.800', 'white')

  return (
    <Box
      ref={ref}
      as="header"
      top="0"
      w="full"
      position="fixed"
      backdropFilter="blur(5px)"
      zIndex="sticky"
      borderColor="whiteAlpha.100"
      transitionProperty="common"
      transitionDuration="normal"
      bg={y > height ? bg : ''}
      boxShadow={y > height ? 'md' : ''}
      borderBottomWidth={y > height ? '1px' : ''}
      {...props}
    >
      <Container maxW="container.2xl" px="8" py="4">
        <Flex width="full" align="center" justify="space-between">
          <Logo
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault()

                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
            }}
            sx={{
              color: textColor,
              _dark: { color: 'white' },
            }}
          />
          <Navigation isScrolled={isHomePage ? isScrolled : false} useColorMode={!isHomePage} />
        </Flex>
      </Container>
    </Box>
  )
}
