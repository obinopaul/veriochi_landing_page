import { forwardRef, Button, ButtonProps, useColorModeValue } from "@chakra-ui/react";

import Link from "next/link";

export interface NavLinkProps extends ButtonProps {
  isActive?: boolean;
  href?: string;
  id?: string;
  isScrolled?: boolean;
  useColorMode?: boolean;
}

export const NavLink = forwardRef<NavLinkProps, "a">((props, ref) => {
  const { href, type, isActive, isScrolled, useColorMode, ...rest } = props;
  
  // Determine color based on context
  const colorModeColor = useColorModeValue('gray.800', 'white')
  const colorModeHover = useColorModeValue('gray.600', 'whiteAlpha.800')
  
  const textColor = useColorMode 
    ? colorModeColor
    : (isScrolled ? 'gray.800' : 'white')
    
  const hoverColor = useColorMode
    ? colorModeHover
    : (isScrolled ? 'gray.600' : 'whiteAlpha.800')

  return (
    <Button
      as={Link}
      href={href}
      ref={ref}
      variant="nav-link"
      lineHeight="2rem"
      isActive={isActive}
      fontWeight="medium"
      color={textColor}
      _hover={{ color: hoverColor }}
      _dark={{ color: "white", _hover: { color: "whiteAlpha.800" } }}
      {...rest}
    />
  );
});

NavLink.displayName = "NavLink";
