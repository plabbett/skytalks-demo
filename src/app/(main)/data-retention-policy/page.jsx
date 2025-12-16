import { Container } from '@/components/Container'
import Link from 'next/link'

export const metadata = {
  title: 'Data Retention Policy',
  description: 'SKYTALKS Data Retention Policy',
}

export default function CodeOfConduct() {
  return (
    <div className="relative py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="font-display text-4xl font-bold tracking-tighter text-indigo-400 sm:text-5xl">
            Data Retention Policy
          </h1>
          <p className="mt-2 text-sm text-indigo-200">Last updated: December 14, 2025</p>

          <div className="mt-6 space-y-6 text-lg text-indigo-100">
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Caution List
              </h2>
              <p className="mt-4">
                For the safety of SKYTALKS staff, speakers, volunteers, and attendees, SKYTALKS maintains a <strong>caution list</strong> of individuals who have engaged in harassment, attempted to record SKYTALKS, or otherwise shown a likelihood to cause harm to SKYTALKS and humans.
                <strong className="text-indigo-300">This information is retained permanently.</strong>
              </p>
            </section>
          </div>
          <div className="mt-6 space-y-6 text-lg text-indigo-100">
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                Personally-Identifiable Information (PII)
              </h2>
              <p className="mt-4">
                Outside of the caution list, SKYTALKS collects PII as required by BSides Las Vegas (e.g. Government Names) or to facilitate communication and coordination with volunteers, speakers, and staff (e.g. emails, phone numbers). <strong className="text-indigo-300">This PII is retained for up to 3 years</strong>, after which SKYTALKS deletes all PII in systems that SKYTALKS has control over.
              </p>
            </section>
          </div>
          <div className="mt-6 space-y-6 text-lg text-indigo-100">
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-indigo-400">
                At-Risk Individuals
              </h2>
              <p className="mt-4">
                SKYTALKS will work with individuals who have a risk profile that would warrant a quicker deletion timeline on a case by case basis.
                SKYTALKS will engage in good faith, and our decision on data deletion is final.
                SKYTALKS cannot facilitate data deletion requests for BSides Las Vegas systems, and other datastores that SKYTALKS does not control.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}
