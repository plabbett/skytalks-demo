import { Container } from '@/components/Container'
import {Well} from "@/components/Well";
import {CalendarIcon, InformationCircleIcon} from "@heroicons/react/24/outline"
import Link from "next/link";

export const metadata = {
  title: 'Volunteer',
  description: 'Volunteer with SKYTALKS and help make the event possible.',
}

export default function Volunteer() {
  return (
    <div className="relative py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="font-display text-4xl font-bold tracking-tighter text-indigo-400 sm:text-5xl">
            Volunteer
          </h1>
          <div className="mt-6 space-y-6 text-lg text-indigo-100">

            <Well>
              <CalendarIcon className="size-8 text-indigo-600 px-1" /> Volunteer applications are currently closed. Check back Summer 2026!
            </Well>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Why Volunteer?
              </h2>
              <p className="mt-4">
                SKYTALKS is run entirely by volunteers who are passionate about creating a space for candid, off-the-record discussions in the security community. Without our dedicated team, none of this would be possible.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Volunteer Roles
              </h2>
              <p className="mt-4">
                We need help with a variety of tasks during the event, including:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Door management and token collection</li>
                <li>Line management during linecon</li>
                <li>NightOps Co-Lead</li>
                <li>CFP Reviewer(s)</li>
                <li>Room monitoring and code of conduct enforcement</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                What You Get
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Complimentary BSides Las Vegas badge</li>
                <li>SKYTALKS volunteer badge</li>
                <li>Exclusive volunteer shirt</li>
                <li>The satisfaction of supporting an independent community event</li>
                <li>Meet other awesome people in the security community</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Requirements
              </h2>
              <p className="mt-4">
                Volunteers should be able to commit to at least two shifts during the event.
                Prior experience is not required &mdash; just enthusiasm and reliability.
                All volunteers must adhere to our <Link className="text-indigo-400 hover:text-indigo-600" href="/code-of-conduct">code of conduct</Link>.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}
