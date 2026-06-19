import ProgramCard from '../components/ProgramCard'
import PhoneCTA from '../components/PhoneCTA'
import { corporatePrograms, secondaryPrograms } from '../data/programs'

export default function Programs() {
  return (
    <>
      <section className="bg-sage-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-teal-900">Our Programs</h1>
          <p className="mt-4 text-lg text-muted">
            Four named programs, each fully facilitated and custom-designed. Transparent pricing so you know what to expect before you call.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corporatePrograms.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>

          {secondaryPrograms.length > 0 && (
            <div className="mt-8 max-w-md mx-auto">
              {secondaryPrograms.map((program) => (
                <ProgramCard key={program.slug} program={program} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-sage-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl font-bold text-teal-900">
            Not sure which program fits?
          </h2>
          <p className="mt-3 text-muted">Call us and we&apos;ll help you pick the right one for your group.</p>
          <div className="mt-6">
            <PhoneCTA label="Call to Book" />
          </div>
        </div>
      </section>
    </>
  )
}
