import Link from 'next/link'

export default function SamplePage() {
  return (
    <div>
      <h2>Home</h2>
      <Link href="/about">About</Link>
    </div>
  )
}
