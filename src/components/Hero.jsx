import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Link from "next/link";
import {Well} from "@/components/Well";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function Hero() {
  return (
    <div className="relative py-20 sm:py-32">
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-indigo-400 sm:text-7xl">
            <span className="sr-only">SKYTALKS - </span>
            <span className={"text-indigo-600 whitespace-nowrap"}>No recording.</span><br />
            <span className={"text-indigo-500 whitespace-nowrap"}>No photography.</span><br />
            <span className={"text-indigo-400 whitespace-nowrap"}>No bullshit.</span>
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-indigo-100">

            <p>
              At <strong>SKYTALKS</strong>, you&apos;ll learn about the latest dark-patterns and anti-practices that need exposed, especially the kind that runs the risk of offending a company.
            </p>

            <Well>
              <InformationCircleIcon className="size-8 text-indigo-600 shrink-0" />
              <span>SKYTALKS operates under the <Link className={'italic hover:underline whitespace-nowrap'} href={'https://en.wikipedia.org/wiki/Chatham_House_Rule'}>Chatham House Rule</Link></span>
            </Well>
            <p>
              We will be returning to <Link className={'hover:underline'} href={'https://en.wikipedia.org/wiki/Welcome_to_Fabulous_Las_Vegas_sign'}>Fabulous Las Vegas</Link> for <Link className={'hover:underline'} href={'http://hackersummercamp.guide/'}>Hacker Summer Camp</Link> in 2026 thanks to the generous, ongoing support from <Link className={'font-semibold hover:underline'} href={'https://bsideslv.org'}>BSides Las Vegas</Link>.
            </p>

          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Event', 'BSides Las Vegas'],
              ['Venue', 'The Platinum Hotel'],
              ['Location', 'Las Vegas, NV USA'],
              ['Founded', '2008'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-indigo-400">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-indigo-100">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
