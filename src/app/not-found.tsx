'use client'

import Link from "@/components/Link"
import './not-found.css'

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <h1 className="font-body">404</h1>
      <p>Couldn&apos;t find that page.</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}