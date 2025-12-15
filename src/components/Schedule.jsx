'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {Well} from "@/components/Well";
import Link from "next/link";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const schedule = [
  {
    date: 'August 3rd, 2026',
    dateTime: '2026-08-03',
    summary:
        'Day 1 Token Drop Schedule',
    timeSlots: [
      {
        name: 'Tokens 1, 2, & 3',
        description: 'Check back Summer 2026',
        start: '??:?? AM',
      },
      {
        name: 'Tokens 4, 5, & 6',
        description: 'Check back Summer 2026',
        start: '??:?? PM',
      },
    ],
  },
  {
    date: 'August 4th, 2026',
    dateTime: '2026-08-04',
    summary:
        'Day 2 Token Drop Schedule',
    timeSlots: [
      {
        name: 'Tokens 7, 8, & 9',
        description: 'Check back Summer 2026',
        start: '??:?? AM',
      },
      {
        name: 'Tokens 10, 11, & 12',
        description: 'Check back Summer 2026',
        start: '??:?? PM',
      },
    ],
  },
  {
    date: 'August 5th, 2026',
    dateTime: '2026-08-05',
    summary:
        'Day 3 Token Drop Schedule',
    timeSlots: [
      {
        name: 'Token 13',
        description: 'Check back Summer 2026',
        start: '??:?? AM',
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <TabGroup
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <TabList className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pr-8 sm:pb-0 sm:pl-0">

        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none rounded-lg border p-4 pr-4 transition-all duration-200 sm:w-auto sm:pr-4',
                  dayIndex === selectedIndex
                    ? 'border-indigo-500 bg-indigo-600/30'
                    : 'border-indigo-500/30 bg-indigo-950/30 opacity-70 hover:opacity-100 hover:border-indigo-500/50',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="data-selected:not-data-focus:outline-hidden cursor-pointer">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </TabList>
      <TabPanels>
        {schedule.map((day) => (
          <TabPanel
            key={day.dateTime}
            className="data-selected:not-data-focus:outline-hidden"
          >
            <TimeSlots day={day} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-white">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-indigo-300">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-indigo-700 opacity-80 hover:opacity-90 px-10 py-14 text-center shadow-xl shadow-indigo-900/20 backdrop-blur-sm transform transition ease-in-out duration-700 hover:bg-indigo-700/80',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-white/15" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-white">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-indigo-200">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-indigo-400">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            PST
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-indigo-500 sm:text-5xl">
            Our three day schedule is brimming full of digital geniuses.
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-indigo-200">
            The best people in the industry giving talks about the worst actors.
            Nothing will be recorded; but everything will be said.
          </p>
          <Well className={'mt-12 mb-12'}>
            <ExclamationTriangleIcon className="size-8 text-indigo-500 px-1" /> No Press Allowed! Please see our <Link className={'underline'} href={'/press-policy'}>press policy</Link>
          </Well>

        </div>
      </Container>

      <div className="relative mt-14 sm:mt-24">
        <Container className="relative">
          <div className={'max-w-3xl'}>
            <h2 className={'font-display text-4xl font-medium tracking-tighter text-indigo-500 sm:text-5xl'}>Attending SKYTALKs</h2>
            <div className={'text-lg text-indigo-200 py-4 mb-8'}>
              To attend any SKYTALKS session, you will need both a <strong className={'text-white'}>BSides Las Vegas Badge</strong> and a <strong className={'text-white'}>SKYTALKs Session Token</strong> corresponding to the talk you are trying to attend.
              Tokens are distributed at BSides Las Vegas on a set schedule and in very limited quantities to BSides Las Vegas Super Donors.
            </div>
          </div>
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
