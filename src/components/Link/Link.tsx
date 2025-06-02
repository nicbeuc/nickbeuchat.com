import NextLink from "next/link"
import Icon from "../Icon/Icon"
import { IconProps } from "../Icon/Icon"
import styles from './Link.module.css'

type LinkProps = {
  href: string,
  iconName?: IconProps["name"],
  external?: boolean,
  children: React.ReactNode
}

export default function Link({ href, iconName, external = false, children, ...delegated }: LinkProps) {
  return (
    <NextLink href={href} {...delegated} target={external ? "_blank" : undefined} className={styles.link}>
      <span>{children}</span>
      {iconName && (
        <Icon name={iconName} />
      )}
    </NextLink>
  )
}