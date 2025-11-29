import { forwardRef, Button, ButtonProps } from "@chakra-ui/react";

import Link from "next/link";

export interface NavLinkProps extends ButtonProps {
  isActive?: boolean;
  href?: string;
  id?: string;
  isScrolled?: boolean;
}

export const NavLink = forwardRef<NavLinkProps, "a">((props, ref) => {
  const { href, type, isActive, isScrolled, ...rest } = props;

  return (
    <Button
      as={Link}
      href={href}
      ref={ref}
      variant="nav-link"
      lineHeight="2rem"
      isActive={isActive}
      fontWeight="medium"
      color={isScrolled ? "gray.800" : "white"}
      _hover={{ color: isScrolled ? "gray.600" : "whiteAlpha.800" }}
      _dark={{ color: "white", _hover: { color: "whiteAlpha.800" } }}
      {...rest}
    />
  );
});

NavLink.displayName = "NavLink";
