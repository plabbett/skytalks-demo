import { Container } from '@/components/Container'
import Link from 'next/link'

export const metadata = {
  title: 'Code of Conduct',
  description: 'SKYTALKS Code of Conduct and attendee guidelines.',
}

export default function CodeOfConduct() {
  return (
    <div className="relative py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="font-display text-4xl font-bold tracking-tighter text-indigo-400 sm:text-5xl">
            Code of Conduct
          </h1>
          <p className="mt-2 text-sm text-indigo-200">Last updated: December 14, 2025</p>

          <div className="mt-6 space-y-6 text-lg text-indigo-100">
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Core Policy
              </h2>
              <p className="mt-4">
                SKYTALKS treats attendees as guests with one fundamental rule:{' '}
                <strong>&quot;Don&apos;t be an asshat.&quot;</strong>
              </p>
              <p className="mt-4">
                Violations result in removal from the venue. Management retains discretion to enforce this rule.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Additional Standards
              </h2>
              <p className="mt-4">
                We endorse the{' '}
                <Link href="https://bsideslv.org/coc" className="underline hover:text-indigo-400">
                  BSides LV Code of Conduct
                </Link>{' '}
                as supplementary guidance for attendee conduct expectations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Need Help?
              </h2>
              <p className="mt-4">
                If you experience problems or need assistance, please contact:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                <li>
                  <strong>Grunts</strong> — identified by purple SKYTALKS badges
                </li>
                <li>
                  <strong>Enforcers</strong> — identified by orange SKYTALKS badges
                </li>
                <li>
                  <strong>BSides LV Safety Operations</strong> team members
                </li>
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}
