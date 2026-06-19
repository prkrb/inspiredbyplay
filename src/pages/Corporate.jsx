import { Link } from 'react-router-dom'
import PhoneCTA from '../components/PhoneCTA'
import ProgramCard from '../components/ProgramCard'
import TestimonialCard from '../components/TestimonialCard'
import { corporatePrograms, PHONE_NUMBER, PHONE_DISPLAY } from '../data/programs'

const outcomes = [
  { title: 'Stronger Communication', desc: 'Teams learn to listen, speak up, and collaborate in real time — not through a slide deck about communication.' },
  { title: 'Rebuilt Trust', desc: 'Play strips away hierarchy and politics. People connect as humans first, coworkers second.' },
  { title: 'Genuine Energy', desc: 'Not the forced fun of a mandatory social. Real laughter, real engagement, real momentum that carries into the next week.' },
  { title: 'Measurable Shift', desc: 'Managers consistently report improved team dynamics in the weeks following our programs. This isn\'t just a nice afternoon — it moves the needle.' },
]

const formats = [
  { title: 'Half-Day Programs', desc: 'A focused 3–4 hour session. Perfect for staff appreciation days, department team-builds, or kicking off a planning retreat.', size: '20–100 people' },
  { title: 'Full-Day Retreats', desc: 'A deep, immersive experience. Multiple facilitated sessions, built around your team\'s specific goals and challenges.', size: '20–100 people' },
  { title: 'Conference Energizers', desc: 'A 45-minute session dropped into your conference agenda. Gets 300+ people on their feet and engaged.', size: 'Up to 300+' },
  { title: 'Quarterly Programs', desc: 'An ongoing relationship. We come back each quarter with a fresh program, building on the last. Continuity that compounds.', size: 'Flexible' },
]

const faqs = [
  { q: 'What if my team thinks team building is cheesy?', a: 'Most of our participants felt the same way going in. Our programs are designed for skeptics — no trust falls, no forced vulnerability. People engage because the activities are genuinely fun, not because they\'re told to.' },
  { q: 'How far in advance should we book?', a: 'Ideally 3–4 weeks, but we can often accommodate tighter timelines. Call and we\'ll figure it out.' },
  { q: 'Do you come to our venue?', a: 'Yes. We bring everything — facilitators, materials, equipment, setup, and teardown. You just need a space and your team.' },
  { q: 'Can you customize for our specific team challenges?', a: 'That\'s what we do. Every program is designed around your team\'s goals, dynamics, and context. We\'ll ask the right questions on our first call.' },
  { q: 'What does pricing depend on?', a: 'Group size, format (half-day vs full-day), location, and any custom elements. We publish starting prices so you have a ballpark before you call.' },
]

export default function Corporate() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-sm font-medium uppercase tracking-wider text-coral-500 mb-4">For Corporate Teams</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-teal-900 leading-tight">
            Team Building That{' '}
            <em className="italic text-coral-500">Actually</em> Works
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
            Fully facilitated programs for corporate teams of 20 to 300+. Custom-designed around your goals, delivered at your venue, and built for the people who think they hate team building.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <PhoneCTA label="Call to Book" className="w-full sm:w-auto justify-center" />
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 border-2 border-teal-700 text-teal-700 font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 hover:text-white transition-colors w-full sm:w-auto"
            >
              See Programs &amp; Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Empathy */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-teal-900">
            Your team doesn&apos;t need another pizza lunch.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            They need to actually connect — not over forced small talk in a boardroom, but through shared experiences that break down walls and build real relationships. That&apos;s what play does. It bypasses the awkwardness and gets people to their best selves, fast.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Whether your team is recovering from a reorg, onboarding new hires, or just overdue for something that isn&apos;t a meeting — we design programs that meet your people where they are.
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-teal-900 text-center">
            What Your Team Walks Away With
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {outcomes.map(({ title, desc }) => (
              <div key={title} className="bg-white border border-border rounded-xl p-6">
                <h3 className="font-serif text-lg font-bold text-teal-900">{title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-teal-900 text-center">
            Corporate Programs
          </h2>
          <p className="mt-3 text-muted text-center max-w-xl mx-auto">
            Two flagship programs for corporate teams — each fully facilitated and transparently priced.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {corporatePrograms.filter(p => p.slug !== 'young-leaders-lab').map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-teal-900 text-center">
            Flexible Formats
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {formats.map(({ title, desc, size }) => (
              <div key={title} className="border border-border rounded-xl p-6 bg-white">
                <h3 className="font-serif text-lg font-bold text-teal-900">{title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{desc}</p>
                <p className="mt-3 text-sm text-teal-700 font-medium">{size}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-teal-900">
            Transparent Pricing
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
            <div className="bg-sage-50 border border-border rounded-xl p-6">
              <p className="text-sm text-muted uppercase tracking-wider">Room Igniter</p>
              <p className="mt-2 text-2xl font-serif font-bold text-teal-700">From $1,500</p>
            </div>
            <div className="bg-sage-50 border border-border rounded-xl p-6">
              <p className="text-sm text-muted uppercase tracking-wider">Culture Reset</p>
              <p className="mt-2 text-2xl font-serif font-bold text-teal-700">From $2,500</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">
            Final pricing depends on group size, format, and location — get a custom quote in under 2 hours.
          </p>
          <div className="mt-8">
            <PhoneCTA label="Get a Corporate Quote" />
          </div>
        </div>
      </section>

      {/* Meet Bryan */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <img
                src="/bryan.webp"
                alt="Bryan Burns, Lead Facilitator"
                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
              />
            </div>
            <div className="md:col-span-4 text-center md:text-left">
              <h2 className="font-serif text-xl font-bold text-teal-900">Your facilitator has done this 500+ times.</h2>
              <p className="mt-2 text-muted leading-relaxed">
                Bryan Burns has facilitated programs for teams of 10 to conferences of 500+. He reads the room, adjusts on the fly, and creates the conditions for genuine connection. He&apos;s not an emcee — he&apos;s a team development expert who happens to be really fun to be around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <TestimonialCard
              quote="We came in as coworkers and left feeling like an actual team. Our facilitator read the room perfectly and adjusted on the fly. Best team day we've ever had."
              name="Sarah Chen"
              title="HR Director, Pacific Northwest Credit Union"
            />
            <TestimonialCard
              quote="We booked Inspired by Play as an energizer between keynotes. They had 250 people laughing and high-fiving within five minutes. Multiple attendees said it was the highlight of the conference."
              name="David Park"
              title="Event Coordinator, BC Tech Summit"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-teal-900 text-center mb-10">
            Common Questions
          </h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-border pb-6">
                <h3 className="font-semibold text-ink">{q}</h3>
                <p className="mt-2 text-muted leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-coral-500 text-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Give your team something worth talking about.
          </h2>
          <p className="mt-3 text-coral-50">
            Call to book a program, or request a custom quote online.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <PhoneCTA label="Call to Book" variant="outline" className="border-white text-white hover:bg-white hover:text-coral-500 w-full sm:w-auto justify-center" />
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-coral-500 transition-colors w-full sm:w-auto"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
