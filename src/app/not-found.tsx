import Link from "@/components/Link/Link"
import "./not-found.css"

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <p>Couldn&apos;t find that page.</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}