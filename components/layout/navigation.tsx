import { HStack, Menu, MenuButton, MenuList, MenuItem, Button, Icon } from '@chakra-ui/react'
import { useDisclosure, useUpdateEffect } from '@chakra-ui/react'
import { useScrollSpy } from 'hooks/use-scrollspy'
import { usePathname, useRouter } from 'next/navigation'

import * as React from 'react'

import { MobileNavButton } from '#components/mobile-nav'
import { MobileNavContent } from '#components/mobile-nav'
import { NavLink } from '#components/nav-link'
import siteConfig from '#data/config'
import Link from 'next/link'

import ThemeToggle from './theme-toggle'

// Custom chevron down icon
const ChevronDownIcon = (props: any) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
    />
  </Icon>
)

interface NavigationProps {
  isScrolled?: boolean
}

const Navigation: React.FC<NavigationProps> = ({ isScrolled = false }) => {
  const mobileNav = useDisclosure()
  const router = useRouter()
  const path = usePathname()
  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    },
  )

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>()

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus()
  }, [mobileNav.isOpen])

  return (
    <HStack spacing="2" flexShrink={0}>
      {siteConfig.header.links.map(({ href, id, submenu, ...props }, i) => {
        // If item has submenu, render dropdown
        if (submenu) {
          return (
            <Menu key={i}>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="nav-link"
                fontWeight="medium"
                color={isScrolled ? "gray.800" : "white"}
                _hover={{ color: isScrolled ? "gray.600" : "whiteAlpha.800" }}
                _dark={{ color: "white", _hover: { color: "whiteAlpha.800" } }}
                display={['none', null, 'block']}
              >
                {props.label}
              </MenuButton>
              <MenuList bg="gray.800" borderColor="whiteAlpha.200">
                {submenu.map((item, idx) => (
                  <MenuItem
                    key={idx}
                    as={Link}
                    href={item.href}
                    bg="gray.800"
                    color="white"
                    _hover={{ bg: "whiteAlpha.200" }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          )
        }

        // Regular nav link
        return (
          <NavLink
            display={['none', null, 'block']}
            href={href || `/#${id}`}
            key={i}
            isActive={
              !!(
                (id && activeId === id) ||
                (href && !!path?.match(new RegExp(href)))
              )
            }
            isScrolled={isScrolled}
            {...props}
          >
            {props.label}
          </NavLink>
        )
      })}

      <ThemeToggle />

      <MobileNavButton
        ref={mobileNavBtnRef}
        aria-label="Open Menu"
        onClick={mobileNav.onOpen}
      />

      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </HStack>
  )
}

export default Navigation
