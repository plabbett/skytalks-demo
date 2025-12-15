import { Container } from '@/components/Container'
import {Well} from "@/components/Well";
import {BanknotesIcon} from "@heroicons/react/24/outline"
import Image from "next/image";
import skyTalksLogo from "@/images/skytalks-2025-bucket.png"

export const metadata = {
  title: 'The Bucket',
  description: 'Support SKYTALKS through donations to help keep the event running.',
}

export default function Bucket() {
  return (
    <div className="relative py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">

          <h1 className="font-display text-4xl font-bold tracking-tighter text-indigo-400 sm:text-5xl">
            The Bucket
          </h1>
          <div className="mt-6 space-y-6 text-lg text-indigo-100">
            <Image
              src={skyTalksLogo}
              alt="Sky Talks Bucket"
              title="Sky Talks Bucket - 2025 Swag"
              className="h-64 w-auto transition-[filter] duration-300 hover:drop-shadow-[0_0_15px_rgba(129,140,248,0.8)] transform ease-in-out duration-1000"
            />
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                What is The Bucket?
              </h2>
              <p className="mt-4">
                If you&apos;ve attended SKYTALKS, you&apos;ve probably seen it &mdash; the iconic construction bucket that makes its rounds during linecon. It&apos;s our low-tech, no-frills way of collecting cash contributions from attendees who want to support what we do.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Where Your Contribution Goes
              </h2>
              <p className="mt-4">
                SKYTALKS is a volunteer-run, independent event. Your contributions help cover:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>AV equipment and supplies</li>
                <li>Volunteer shirts and materials</li>
                <li>Token production costs</li>
                <li>Operational expenses</li>
                <li>Future event planning</li>
              </ul>
              <p className="mt-4">
                Every dollar goes directly toward keeping SKYTALKS running. We have no corporate sponsors dictating content &mdash; we&apos;re funded by the community, for the community.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Donate Online
              </h2>
              <p className="mt-4">
                Can&apos;t make it to the event or prefer digital donations?
              </p>
              <Well className={'my-4'}>
                <BanknotesIcon className="size-8 text-indigo-500 px-1" /> At this time, we only accept donations at our in-person event.
              </Well>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Why We Don&apos;t Take Corporate Sponsors
              </h2>
              <p className="mt-4">
                SKYTALKS was founded on the principle that speakers should be free to present without employer censorship or corporate influence. By relying on community contributions instead of sponsors, we maintain our independence and ensure that the content remains uncensored and authentic.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}
