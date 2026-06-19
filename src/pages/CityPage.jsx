import { useParams, Navigate } from 'react-router-dom'
import CityHero from '../components/CityHero'
import ProgramCard from '../components/ProgramCard'
import TestimonialCard from '../components/TestimonialCard'
import { corporatePrograms, secondaryPrograms } from '../data/programs'
import { cities } from '../data/cities'

export default function CityPage() {
  const { city: citySlug } = useParams()
  const city = cities.find(c => c.slug === citySlug)

  if (!city) return <Navigate to="/" replace />

  return (
    <>
      <CityHero city={city} />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-2xl font-bold text-teal-900 text-center mb-10">
            Programs Available in {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corporatePrograms.map((program) => (
              <ProgramCard key={program.slug} program={program} compact />
            ))}
          </div>
          {secondaryPrograms.length > 0 && (
            <div className="mt-6 max-w-md mx-auto">
              {secondaryPrograms.map((program) => (
                <ProgramCard key={program.slug} program={program} compact />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-sage-50">
        <div className="max-w-2xl mx-auto px-6">
          <TestimonialCard
            quote={`We brought Inspired by Play to our ${city.name} office and the response was overwhelming. Everyone participated, everyone laughed, and the energy carried into the next week.`}
            name="Team Lead"
            title={`${city.name} Corporate Client`}
          />
        </div>
      </section>
    </>
  )
}
