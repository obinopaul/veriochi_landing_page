import {
  Box,
  BoxProps,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Icon,
  Button,
} from '@chakra-ui/react'
import { Link, LinkProps } from '@saas-ui/react'
import { FiCheck } from 'react-icons/fi'

import siteConfig from '#data/config'

export interface FooterProps extends BoxProps {
  columns?: number
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { columns = 2, ...rest } = props
  return (
    <Box bg="white" _dark={{ bg: 'gray.900' }} {...rest}>
      <Container maxW="container.2xl" px="8" py="8">
        <Flex direction={{ base: 'column', lg: 'row' }} justify="space-between" mb="12" gap="8">
          {/* Left Side: Logo */}
          <Stack spacing="4" maxW="sm">
            <Box as={siteConfig.logo} height="32px" />
          </Stack>

          {/* Right Side: Links Grid */}
          <SimpleGrid columns={[2, 3, 5]} spacing={4} flex="1" justifyItems="flex-end">
            {Object.values(siteConfig.footer.columns || {}).map((column: any, i) => (
              <Stack key={i} spacing="4">
                <Text fontWeight="bold" fontSize="sm" color="gray.900" _dark={{ color: 'white' }}>
                  {column.title}
                </Text>
                {column.title === 'Follow Us' ? (
                  <HStack spacing="4">
                    {column.links.map((link: any, j: number) => (
                      <FooterLink key={j} href={link.href} aria-label={link.label}>
                        {link.label}
                      </FooterLink>
                    ))}
                  </HStack>
                ) : (
                  <Stack spacing="1">
                    {column.links.map((link: any, j: number) => (
                      <FooterLink key={j} href={link.href}>
                        {link.label}
                      </FooterLink>
                    ))}
                  </Stack>
                )}
              </Stack>
            ))}
          </SimpleGrid>
        </Flex>

        <Flex
          borderTopWidth="1px"
          borderColor="gray.200"
          _dark={{ borderColor: 'gray.700' }}
          pt="8"
          justify="space-between"
          align="center"
          direction={['column', 'row']}
          gap="4"
        >
          <HStack spacing="4" color="muted" fontSize="sm">
            <Text>{siteConfig.footer.copyright}</Text>
            <HStack spacing="1">
              <Icon as={FiCheck} color="green.500" />
              <Text>SOC 2 Certified</Text>
            </HStack>
          </HStack>
          
          <HStack spacing="4">
            {/* Theme toggle and language selector placeholders */}
            <Button variant="ghost" size="sm">English</Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export interface CopyrightProps {
  title?: React.ReactNode
  children: React.ReactNode
}

export const Copyright: React.FC<CopyrightProps> = ({
  title,
  children,
}: CopyrightProps) => {
  let content
  if (title && !children) {
    content = `&copy; ${new Date().getFullYear()} - ${title}`
  }
  return (
    <Text color="muted" fontSize="sm">
      {content || children}
    </Text>
  )
}

export const FooterLink: React.FC<LinkProps> = (props) => {
  const { children, ...rest } = props
  return (
    <Link
      color="muted"
      fontSize="sm"
      textDecoration="none"
      _hover={{
        color: 'white',
        transition: 'color .2s ease-in',
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}
