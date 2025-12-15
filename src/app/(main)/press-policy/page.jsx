import { Container } from '@/components/Container'
import Link from 'next/link'

export const metadata = {
  title: 'Press Policy',
  description: 'SKYTALKS press and media policy.',
}

export default function PressPolicy() {
  return (
    <div className="relative py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="font-display text-4xl font-bold tracking-tighter text-indigo-400 sm:text-5xl">
            Press Policy
          </h1>
          <p className="mt-2 text-sm text-indigo-200">Last updated: December 14, 2025</p>

          <div className="mt-6 space-y-6 text-lg text-indigo-100">
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Press Access
              </h2>
              <p className="mt-4">
                Credentialed press are <strong>prohibited</strong> from attending talks. SkyTalks operates under the{' '}
                <Link href="https://en.wikipedia.org/wiki/Chatham_House_Rule" className="underline hover:text-indigo-400">
                  Chatham House Rule
                </Link>
                , and all events are off-the-record.
              </p>
              <p className="mt-4">
                Anyone discovered wearing a press pass will face removal and be reported to BSides LV.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Speaker Interviews
              </h2>
              <p className="mt-4">
                Interested media should contact SKYTALKS directly to request speaker interviews. We have pre-screened speakers regarding their willingness to speak with press and will facilitate connections with consenting participants outside the event space.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Violation Consequences
              </h2>
              <p className="mt-4">
                Breaches of this policy—either through unauthorized in-person attendance or reporting talk details without speaker permission—may result in credential revocation and additional sanctions determined by BSides LV organizers.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Contact
              </h2>
              <p className="mt-4">
                For media inquiries, please reach out to us:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                <li>
                  Mastodon:{' '}
                  <Link href="https://infosec.exchange/@skytalks" className="underline hover:text-indigo-400">
                    @skytalks@infosec.exchange
                  </Link>
                </li>
                <li>
                  Email:{' '}
                  <Link href="mailto:dcskytalks@gmail.com" className="underline hover:text-indigo-400">
                    dcskytalks@gmail.com
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}
