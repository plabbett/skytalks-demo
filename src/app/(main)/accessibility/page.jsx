import { Container } from '@/components/Container'
import Link from 'next/link'

export const metadata = {
  title: 'Accessibility',
  description: 'SKYTALKS accessibility information and accommodations.',
}

export default function Accessibility() {
  return (
    <div className="relative py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="font-display text-4xl font-bold tracking-tighter text-indigo-400 sm:text-5xl">
            Event Accessibility
          </h1>

          <div className="mt-6 space-y-6 text-lg text-indigo-100">
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Wait Times
              </h2>
              <p className="mt-4">
                We tend to have long lines. We know, but we need to cycle in 100 new people each session.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Device Policy
              </h2>
              <p className="mt-4">
                SKYTALKS requires all electronic devices to be placed in <strong>airplane mode</strong> and stored away during events.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Accommodations
              </h2>
              <p className="mt-4">
                If our device policy creates accessibility difficulties for you, our volunteers are available to assist. We can work with you on individual cases.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Contact
              </h2>
              <p className="mt-4">
                For unresolved accessibility concerns, please contact us directly at{' '}
                <Link href="mailto:dcskytalks@gmail.com" className="underline hover:text-indigo-400">
                  dcskytalks@gmail.com
                </Link>
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}
