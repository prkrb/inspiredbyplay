import { useParams, Link, Navigate } from 'react-router-dom'
import PhoneCTA from '../components/PhoneCTA'
import PricingBlock from '../components/PricingBlock'
import TestimonialCard from '../components/TestimonialCard'
import { programs } from '../data/programs'

export default function ProgramDetail() {
  const { slug } = useParams()
  const program = programs.find(p => p.slug === slug)

  if (!program) return <Navigate to="/programs" replace />

  const perDay = slug === 'festival-play-zone'

  return (
    <>
      {/* Hero */}
      <section className="bg-sage-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {program.secondary && (
            <span className="inline-block text-xs font-medium uppercase tracking-wider text-muted mb-3">Also Available</span>
          )}
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-teal-900">{program.name}</h1>
          <p className="mt-4 text-lg text-muted leading-relaxed">{program.promise}</p>
          <p className="mt-6 text-3xl font-serif font-bold text-teal-700">
            From ${program.startingPrice.toLocaleString()}{perDay ? '/day' : ''}
          </p>
          <div className="mt-8">
            <PhoneCTA label="Call to Book" />
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl font-bold text-teal-900">Who This Is For</h2>
          <p className="mt-4 text-muted leading-relaxed">{program.whoThisIsFor}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {program.bestFor.map((tag) => (
              <span key={tag} className="text-sm bg-sage-50 text-teal-700 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl font-bold text-teal-900">What&apos;s Included</h2>
          {/* TODO: Confirm specific inclusions with Bryan */}
          <ul className="mt-6 space-y-3">
            {program.whatsIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Specs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-sage-50 border border-border rounded-xl p-6 text-center">
              <p className="text-sm text-muted uppercase tracking-wider">Format</p>
              <p className="mt-2 font-serif font-bold text-teal-900">{program.format}</p>
            </div>
            <div className="bg-sage-50 border border-border rounded-xl p-6 text-center">
              <p className="text-sm text-muted uppercase tracking-wider">Group Size</p>
              <p className="mt-2 font-serif font-bold text-teal-900">{program.groupSize}</p>
            </div>
            <div className="bg-sage-50 border border-border rounded-xl p-6 text-center">
              <p className="text-sm text-muted uppercase tracking-wider">Starting Price</p>
              <p className="mt-2 font-serif font-bold text-teal-700">
                ${program.startingPrice.toLocaleString()}{perDay ? '/day' : ''}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <PricingBlock price={program.startingPrice} perDay={perDay} />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-2xl mx-auto px-6">
          <TestimonialCard {...program.testimonial} />
        </div>
      </section>

      {/* Guide callout */}
      <section className="py-10 bg-white border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted">
            Not ready to call yet?{' '}
            <Link to="/guide" className="text-teal-700 underline hover:text-teal-900 font-medium">
              Get our free planning guide instead.
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-teal-900">
            Ready to Book {program.name}?
          </h2>
          <p className="mt-4 text-muted">
            Call us to discuss your event, or request a custom quote online.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <PhoneCTA label="Call to Book" className="w-full sm:w-auto justify-center" />
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-coral-500 text-coral-500 font-semibold px-6 py-3 rounded-lg hover:bg-coral-50 transition-colors w-full sm:w-auto"
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
