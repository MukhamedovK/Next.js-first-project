'use client'

export default function Error({ error }) {

  return (
    <div className="toast toast-top toast-right mt-[60px]">
      <div className="alert alert-error flex flex-col items-center justify-center gap-4">
        <span className='text-white'>Error: {error.message}!</span>
      </div>
    </div>
  )
}