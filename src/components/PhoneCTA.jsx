import { PHONE_NUMBER, PHONE_DISPLAY } from '../data/programs'

export default function PhoneCTA({ label = 'Call to Book', className = '', variant = 'coral' }) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-lg transition-colors'
  const variants = {
    coral: 'bg-coral-500 text-white hover:bg-orange-700 px-6 py-3',
    outline: 'border-2 border-coral-500 text-coral-500 hover:bg-coral-50 px-6 py-3',
    text: 'text-coral-500 hover:text-orange-700',
    nav: 'bg-coral-500 text-white hover:bg-orange-700 px-4 py-2 text-sm',
  }

  return (
    <a href={`tel:${PHONE_NUMBER}`} className={`${base} ${variants[variant]} ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
      </svg>
      {label}
    </a>
  )
}
