import { Link } from 'react-router-dom'

export default function ProgramCard({ program, compact = false }) {
  const { name, slug, promise, startingPrice, bestFor, secondary } = program
  const perDay = slug === 'festival-play-zone'

  return (
    <Link
      to={`/programs/${slug}`}
      className={`group block bg-white border border-border rounded-xl p-6 hover:border-teal-700 hover:shadow-md transition-all ${secondary ? 'opacity-90' : ''}`}
    >
      {secondary && (
        <span className="inline-block text-xs font-medium uppercase tracking-wider text-muted mb-2">Also Available</span>
      )}
      <h3 className="font-serif text-xl font-bold text-teal-900 group-hover:text-teal-700 transition-colors">
        {name}
      </h3>
      <p className="mt-2 text-muted text-sm leading-relaxed">{promise}</p>
      <p className="mt-4 text-lg font-serif font-bold text-teal-700">
        From ${startingPrice.toLocaleString()}{perDay ? '/day' : ''}
      </p>
      {!compact && (
        <div className="mt-3 flex flex-wrap gap-2">
          {bestFor.map((tag) => (
            <span key={tag} className="text-xs bg-sage-50 text-teal-700 px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      )}
      <span className="inline-block mt-4 text-sm font-semibold text-coral-500 group-hover:text-orange-700 transition-colors">
        View Program &rarr;
      </span>
    </Link>
  )
}
