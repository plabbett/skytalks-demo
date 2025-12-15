import { Container } from '@/components/Container'
import Link from 'next/link'

export const metadata = {
  title: 'About',
  description: 'Learn about the history and mission of SKYTALKS.',
}

export default function About() {
  return (
    <div className="relative py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="font-display text-4xl font-bold tracking-tighter text-indigo-400 sm:text-5xl">
            About SKYTALKS
          </h1>
          <div className="mt-6 space-y-6 text-lg text-indigo-100">
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Our History
              </h2>
              <p className="mt-4">
                SKYTALKS originated at DEF CON 16 in 2008 when Colorado hackers from &quot;303&quot; hosted talks in the Riviera skyboxes. The organization&apos;s founding principle was to prevent employer censorship of topics (or speakers) using the{' '}
                <Link href="https://en.wikipedia.org/wiki/Chatham_House_Rule" className="underline hover:text-indigo-400">
                  Chatham House Rule
                </Link>{' '}
                to foster candid, intimate discussions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Our Standard
              </h2>
              <p className="mt-4 font-display text-xl font-semibold">
                No recording. No photography. No bullshit.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Evolution
              </h2>
              <p className="mt-4">
                For years, the 303 collective &mdash; led primarily by bluknight &mdash; staffed and hosted the annual event. In 2022, SKYTALKS transitioned to become an independent organization run by a diverse team of volunteers nationwide, moving beyond its &quot;303&quot; affiliation while maintaining its core identity.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Our Mission
              </h2>
              <p className="mt-4">
                SKYTALKS provides a platform for researchers to share work, industry critics to voice concerns, and curious participants to explore topics without the watchful eye of the rest of the world. Our strict no-recording policy enables discussion of sensitive research and vendor-critical material among peers in the information security community.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Current Home
              </h2>
              <p className="mt-4">
                In 2024, SKYTALKS relocated to{' '}
                <Link href="https://bsideslv.org/" className="underline hover:text-indigo-400">
                  BSides Las Vegas
                </Link>
                , with SKYTALKS XIV launching in August 2024. The move implemented a physical-token entry system to manage attendance. SKYTALKS XV took place in 2025 at BSides Las Vegas with the same token system in place.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Content Standards
              </h2>
              <p className="mt-4">
                Talks should feature cutting-edge material — whether in-progress or completed — that challenges norms or offers edgy, unconventional perspectives. Submissions require a brief abstract and detailed outline. Speakers receive AV support with projectors and PA systems.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}
