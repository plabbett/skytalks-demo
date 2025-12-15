import Link from 'next/link'
import clsx from 'clsx'

export function Button({ className, ...props }) {
  className = clsx(
    'inline-flex justify-center rounded-2xl bg-indigo-600 p-4 text-base font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 active:text-white/70',
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
