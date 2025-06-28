'use client'

import NextLink from "next/link"
import Icon from "../Icon"
import { IconProps } from "../Icon"

type LinkProps = {
  handleClick?: React.MouseEventHandler,
  href: string,
  iconName?: IconProps["name"],
  external?: boolean,
  children: React.ReactNode
}

export default function Link({ handleClick, href, iconName, external = false, children, ...delegated }: LinkProps) {
  const linkInner = (<>
    <span>{children}</span>
    {iconName && (
      <Icon name={iconName} />
    )}
  </>)

  if (handleClick) {
    return (
      <button className="link" onClick={handleClick} {...delegated}>
        {linkInner}
      </button>
    )
  }
  return (
    <NextLink href={href} target={external ? "_blank" : undefined} className="link" {...delegated}>
      {linkInner}
    </NextLink>
  )
}