import { Container } from '@/components/Container'
import {Well} from "@/components/Well";
import {InformationCircleIcon}  from "@heroicons/react/24/outline";

export const metadata = {
  title: 'Call for Presentations',
  description: 'Submit a talk to SKYTALKS - where cutting-edge security research meets candid discussion.',
}

export default function CallForPresentations() {
  return (
    <div className="relative py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="font-display text-4xl font-bold tracking-tighter text-indigo-400 sm:text-5xl">
            Call for Presentations
          </h1>
          <div className="mt-6 space-y-6 text-lg text-indigo-100">
            <Well className="my-4">
              <InformationCircleIcon className="size-8 text-indigo-600 px-1" /> The CFP is closed. Check back in Spring/Summer 2026 for updates!
            </Well>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                What We&apos;re Looking For
              </h2>
              <p className="mt-4">
                SKYTALKS features cutting-edge material &mdash; whether in-progress or completed &mdash; that challenges norms or offers edgy, unconventional perspectives. Our strict no-recording policy enables discussion of sensitive research and vendor-critical material that might not be possible elsewhere.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Talk Format
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Standard talks are 20-30 minutes plus Q&amp;A</li>
                <li>Lightning talks (5-10 minutes) are also welcome</li>
                <li>Panel discussions may be considered</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Submission Requirements
              </h2>
              <p className="mt-4">
                Submissions should include:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>A brief abstract (2-3 sentences for the schedule)</li>
                <li>A detailed outline of your talk</li>
                <li>Any special AV or equipment requirements</li>
                <li>Your preferred talk length</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                What We Provide
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Projector and screen</li>
                <li>PA system with microphone</li>
                <li>HDMI connectivity (bring adapters if needed)</li>
                <li>Guaranteed entry for speakers (no token required)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                The Chatham House Rule
              </h2>
              <p className="mt-4">
                All SKYTALKS presentations operate under the Chatham House Rule: attendees are free to use the information received, but neither the identity nor the affiliation of the speaker(s), nor that of any other participant, may be revealed. This allows speakers to present sensitive material without fear of attribution.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}
