import clsx from 'clsx'

export function Well({ className, ...props }) {
  className = clsx(
    'flex flex-col sm:flex-row items-center justify-center gap-2 w-full text-center rounded-lg border text-white text-lg border-indigo-500/30 bg-indigo-950/50 p-4',
    className,
  )

  return (
    <div className={className} {...props} />
  )
}



