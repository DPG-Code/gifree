export function Search({ className = '' }) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0'></path>
      <path d='M21 21l-6 -6'></path>
    </svg>
  )
}

export function Heart({ className = '' }) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572'></path>
    </svg>
  )
}
