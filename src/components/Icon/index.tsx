import styles from './styles.module.css'

export type IconProps = {
  name: "download" | "copy" | "arrow-top-right" | "mail"
}

export default function Icon({ name }: IconProps) {
  let svgPaths;

  switch (name) {
    case "download":
      svgPaths = <path d="M3 14V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V14M12 2V16M12 16L7 10.5555M12 16L17 10.5556"></path>;
      break;
    case "copy":
      svgPaths = <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5M11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22Z"></path>;
      break;
    case "arrow-top-right":
      svgPaths = <path d="M18.5 5.5L5.5 18.5M18.5 5.5H8.5M18.5 5.5V15.5"></path>;
      break;
    case "mail":
      svgPaths = <path d="M20.5 5.5L12 13L3.5 5.5M4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19Z"></path>;
      break;
  }

  return (
    <svg aria-hidden="true" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.icon}>
      {svgPaths}
    </svg>
  )
}
