import Link from 'next/link'

export default function FourOhFour() {
  return <>
   <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}