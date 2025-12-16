import { Container } from '@/components/Container'
import Link from "next/link";

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
          <Link href="/bucket">
              <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-indigo-100 sm:text-5xl">
              SKYTALKS is only possible through your donations.*
              </h2>
              <div className={'mt-2 mx-auto max-w-2xl text-center font-display text-sm text-indigo-300'}>
                  * Also the blood, sweat, and tears collected from our volunteers.
              </div>
          </Link>
      </Container>
    </section>
  )
}
