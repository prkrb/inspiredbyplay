import PhoneCTA from './PhoneCTA'

export default function CityHero({ city }) {
  return (
    <section className="bg-sage-50 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-teal-900">
          Corporate Team Building in {city.name}, {city.province}
        </h1>
        <p className="mt-6 text-lg text-muted leading-relaxed">{city.localCopy}</p>
        <div className="mt-8">
          <PhoneCTA label="Call to Book" />
        </div>
      </div>
    </section>
  )
}
