export default function Loader({ className = '' }) {
  return (
    <svg
      className={`${className} animate-spin`}
      width={24}
      height={24}
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M12 6l0 -3'></path>
      <path d='M16.25 7.75l2.15 -2.15'></path>
      <path d='M18 12l3 0'></path>
      <path d='M16.25 16.25l2.15 2.15'></path>
      <path d='M12 18l0 3'></path>
      <path d='M7.75 16.25l-2.15 2.15'></path>
      <path d='M6 12l-3 0'></path>
      <path d='M7.75 7.75l-2.15 -2.15'></path>
    </svg>
  )
}
