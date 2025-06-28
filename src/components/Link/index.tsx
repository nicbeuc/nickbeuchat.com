'use client'

import { AnchorHTMLAttributes } from "react"
import NextLink, { type LinkProps as NextLinkProps } from "next/link"
import Icon from "../Icon"
import { IconProps } from "../Icon"

interface LinkProps extends NextLinkProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> {
  iconName?: IconProps["name"],
  children: React.ReactNode,
}

export default function Link({ children, iconName, ...rest }: LinkProps) {
  return (
    <NextLink className="link" {...rest}>
      <span>{children}</span>
      {iconName && (
        <Icon name={iconName} />
      )}
    </NextLink>
  )
}