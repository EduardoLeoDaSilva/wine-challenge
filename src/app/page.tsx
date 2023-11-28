import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href={'login'}>Login</Link>
      <h1>Op Rib</h1>
    </main>
  )
}
