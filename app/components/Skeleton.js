export default function Skeleton() {
  return (
    <>
      <div className='w-72 h-72 bg-neutral-800 rounded-lg animate-pulse 2xl:w-96 2xl:h-96 2xl:rounded-xl'></div>
      <aside className='flex flex-col items-center justify-center gap-3 lg:gap-4 2xl:gap-6 animate-pulse'>
        <div className='w-64 h-10 bg-neutral-800 rounded-lg 2xl:w-96 2xl:h-14 2xl:rounded-2xl'></div>
        <div className='w-64 h-10 bg-neutral-800 rounded-lg 2xl:w-96 2xl:h-14 2xl:rounded-2xl'></div>
        <div className='w-64 h-10 bg-neutral-800 rounded-lg 2xl:w-96 2xl:h-14 2xl:rounded-2xl'></div>
        <div className='w-64 h-10 bg-neutral-800 rounded-lg 2xl:w-96 2xl:h-14 2xl:rounded-2xl'></div>
      </aside>
    </>
  )
}
