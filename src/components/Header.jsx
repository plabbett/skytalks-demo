'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

const splitAfter = [3];

const menuLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },

  { href: '/cfp', label: 'CFP' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/bucket', label: 'The Bucket' },

]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0 flex items-center gap-4">
          <Link href="/" className="shrink-0"><Logo className="h-12 text-2xl uppercase font-black w-auto text-indigo-200 hover:text-white transform transition ease-in-out duration-700" /></Link>
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full border-b border-indigo-600/10 py-4 font-mono text-sm text-indigo-400 sm:-mx-6 sm:overflow-x-auto sm:whitespace-nowrap lg:order-0 lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex flex-col items-center gap-1 px-4 sm:flex-row sm:gap-4">
            <p>
              <time dateTime="2026-08-03">August 3</time>-
              <time dateTime="2026-08-05">5, 2026</time>
            </p>
            <span className="hidden sm:inline">&middot;</span>
            <p>Las Vegas, NV USA</p>
            <span className="hidden sm:inline">&middot;</span>
            <p>
              <Link className={'hover:text-white transform transition ease-in-out duration-700'} href={"https://infosec.exchange/@skytalks"}>
                @skytalks@infosec.exchange
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-10 flex basis-full justify-center sm:basis-auto lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Popover className="relative">
            <PopoverButton className="inline-flex cursor-pointer items-center gap-1 rounded-3xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none transform transition ease-in-out duration-700">
              Menu
              <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
            </PopoverButton>
            <PopoverPanel
              anchor="bottom"
              className="z-50 mt-2 w-[calc(100vw-2rem)] sm:w-56 rounded-lg bg-slate-900 border border-indigo-500/30 shadow-lg ring-1 ring-black/5 focus:outline-none"
            >
              <div className="p-2">
                {menuLinks.map((link, index) => (
                  <div key={link.href}>
                    {splitAfter.includes(index) && (
                      <div className="my-2 border-t border-indigo-500/30" />
                    )}
                    <Link
                      href={link.href}
                      className={`block rounded-md px-3 py-2 text-sm transition ease-in-out duration-200 ${
                        pathname === link.href
                          ? 'bg-indigo-600 text-white'
                          : 'text-indigo-200 hover:bg-indigo-950 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </div>
      </Container>
    </header>
  )
}
