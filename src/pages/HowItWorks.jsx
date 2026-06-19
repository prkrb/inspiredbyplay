import { Link } from 'react-router-dom'
import PhoneCTA from '../components/PhoneCTA'

const steps = [
  {
    num: '01',
    title: 'You Call Us',
    desc: 'Tell us about your team, your goals, and your event. We ask the right questions to understand what you actually need — not what a brochure says you need.',
  },
  {
    num: '02',
    title: 'We Design It',
    desc: 'Based on your group size, goals, and energy level, we build a custom program from scratch. You get a proposal within 48 hours of your call.',
  },
  {
    num: '03',
    title: 'We Handle Everything',
    desc: 'Setup, materials, facilitation, teardown — we bring our crew, our gear, and our energy. You and your team just show up and participate.',
  },
  {
    num: '04',
    title: 'Your Team Connects',
    desc: 'People leave feeling energized, heard, and genuinely closer to their colleagues. Not just a fun afternoon — a shift in how your team relates to each other.',
  },
]

export default function HowItWorks() {
  return (
    <>
      <section className="bg-sage-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-teal-900">How It Works</h1>
          <p className="mt-4 text-lg text-muted">
            From first call to final high-five, here&apos;s what working with us looks like.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12">
            {steps.map(({ num, title, desc }, i) => (
              <div key={num} className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 bg-teal-700 text-white font-serif font-bold text-base md:text-lg rounded-full">
                    {num}
                  </span>
                </div>
                <div>
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-teal-900">{title}</h2>
                  <p className="mt-1.5 md:mt-2 text-sm md:text-base text-muted leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-coral-500 text-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold">It starts with a phone call.</h2>
          <p className="mt-3 text-coral-50">
            No forms to fill out, no automated responses. A real person who knows team building.
          </p>
          <div className="mt-8">
            <PhoneCTA label="Call to Book" variant="outline" className="border-white text-white hover:bg-white hover:text-coral-500" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-sage-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl font-bold text-teal-900">
            Prefer to start online?
          </h2>
          <p className="mt-3 text-muted">
            Send us a message and we&apos;ll call you back within 2 hours on weekdays.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-6 bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-900 transition-colors"
          >
            Request a Custom Quote
          </Link>
        </div>
      </section>
    </>
  )
}
