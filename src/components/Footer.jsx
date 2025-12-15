import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

const mainLinks = [
  { href: '/about', label: 'About' },
  { href: '/cfp', label: 'CFP' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/bucket', label: 'The Bucket' },
]

const policyLinks = [
  { href: '/code-of-conduct', label: 'Code of Conduct' },
  { href: '/press-policy', label: 'Press Policy' },
  { href: '/accessibility', label: 'Accessibility' },
]

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center gap-6">
        <Logo className="h-12 text-2xl uppercase font-black w-auto text-slate-100" />
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-100">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-indigo-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
          {policyLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-indigo-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-base text-indigo-600">
          Copyright &copy; {new Date().getFullYear()} SKYTALKS. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
