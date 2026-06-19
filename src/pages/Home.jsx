import { Link } from 'react-router-dom'
import PhoneCTA from '../components/PhoneCTA'
import ProgramCard from '../components/ProgramCard'
import TestimonialCard from '../components/TestimonialCard'
import { programsByPrice, corporatePrograms, secondaryPrograms, PHONE_NUMBER, PHONE_DISPLAY, EMAIL } from '../data/programs'
import { cities } from '../data/cities'

const stats = [
  { value: '500+', label: 'Events Delivered' },
  { value: '10–300+', label: 'Group Sizes' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Rebook Rate' },
]

const trustPills = [
  'Corporate Retreats', 'Conferences', 'Staff Appreciation', 'Leadership Development',
  'School Programs', 'Festivals', 'Community Events',
]

const whyUs = [
  {
    title: 'Fully Facilitated',
    desc: 'We handle everything — design, setup, facilitation, and teardown. You show up and participate.',
  },
  {
    title: 'Custom to Your Goals',
    desc: 'Every program is designed around your team\'s specific challenges and objectives. No off-the-shelf packages.',
  },
  {
    title: 'Proven Results',
    desc: 'Teams leave with stronger connections, better communication, and genuine enthusiasm. Not just a fun afternoon — a measurable shift.',
  },
  {
    title: 'Inclusive for Everyone',
    desc: 'Our activities are designed so every person participates fully, regardless of physical ability, age, or personality type.',
  },
]

const steps = [
  { num: '01', title: 'You Call Us', desc: 'Tell us about your team, your goals, and your event. We\'ll ask the right questions.' },
  { num: '02', title: 'We Design It', desc: 'We build a custom program around your group\'s size, goals, and energy level.' },
  { num: '03', title: 'We Handle Everything', desc: 'Setup, materials, facilitation, teardown. You don\'t lift a finger.' },
  { num: '04', title: 'Your Team Connects', desc: 'People leave feeling energized, heard, and genuinely closer to their colleagues.' },
]

const generalTestimonials = [
  {
    quote: 'I\'ve been to a lot of team building events, and this was the first one where every single person was engaged. No one checked their phone. No one sat in the corner. Everyone was in.',
    name: 'Amanda Chu',
    title: 'Operations Manager, Coastal Digital',
  },
  {
    quote: 'The facilitator was incredible — funny, warm, and completely in control of the room. Our team of 80 was laughing within the first five minutes.',
    name: 'Marcus Reid',
    title: 'CEO, Mountain Trail Consulting',
  },
  {
    quote: 'We\'ve used Inspired by Play for three years running. Each time, they design something completely different based on where our team is at. It never feels stale.',
    name: 'Laura Benson',
    title: 'People & Culture Lead, Ponderosa Health',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-50">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-28">
          <div className="max-w-2xl mx-auto text-center md:text-left md:mx-0">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-teal-900 leading-tight">
              Team Building That People{' '}
              <em className="font-serif italic text-coral-500">Actually</em>{' '}
              Love
            </h1>
            <p className="mt-5 md:mt-6 text-base md:text-lg text-muted leading-relaxed">
              Fully facilitated, custom-designed programs for corporate teams, conferences, and events across Canada. No trust falls. No awkward icebreakers. Just genuine connection through play.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <PhoneCTA label="Call to Book" className="w-full sm:w-auto justify-center" />
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 border-2 border-teal-700 text-teal-700 font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 hover:text-white transition-colors w-full sm:w-auto"
              >
                See Our Programs
              </Link>
            </div>
          </div>
          <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-white border border-border rounded-xl p-4 text-center">
                <p className="text-2xl font-serif font-bold text-teal-700">{value}</p>
                <p className="text-sm text-muted mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Connection Through Play */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-teal-900 leading-tight">
            Not trust falls. Not awkward icebreakers.{' '}
            <em className="italic text-coral-500">Real connection</em> through play.
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            We design experiences that get people out of their heads and into the moment. The result? Teams that actually talk to each other, laugh together, and leave feeling like they belong.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-wrap justify-center gap-3">
            {trustPills.map((pill) => (
              <span key={pill} className="text-sm bg-sage-50 text-teal-700 px-4 py-2 rounded-full font-medium">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-teal-900">Our Programs</h2>
            <p className="mt-4 text-muted">
              Four named programs designed for different contexts. Each one is fully facilitated, custom-designed, and priced transparently.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {corporatePrograms.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
          {secondaryPrograms.length > 0 && (
            <div className="mt-6 max-w-md mx-auto">
              {secondaryPrograms.map((program) => (
                <ProgramCard key={program.slug} program={program} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-teal-900 text-center">
            Why Teams Choose Us
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyUs.map(({ title, desc }) => (
              <div key={title} className="bg-white border border-border rounded-xl p-6">
                <h3 className="font-serif text-xl font-bold text-teal-900">{title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Your Facilitator */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <span className="text-sm font-medium uppercase tracking-wider text-coral-500">You&apos;re in Good Hands</span>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-teal-900">
                Meet Your Facilitator
              </h2>
              <p className="mt-4 md:mt-6 text-muted leading-relaxed">
                Bryan Burns is the co-founder and lead facilitator at Inspired by Play. He brings energy, warmth, and expertise to every program — whether it&apos;s a team of 10 or a conference of 500+.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                His approach to team development through play-based experiences has helped hundreds of organizations build stronger, more connected teams. Bryan designs high-energy, purposeful programs that transform how teams relate to each other.
              </p>
              <div className="mt-5 md:mt-6 flex flex-wrap justify-center md:justify-start gap-2">
                {['Leadership Development', 'Team Culture', 'Published Author', 'Play-Based Learning'].map((tag) => (
                  <span key={tag} className="text-xs bg-sage-50 text-teal-700 px-3 py-1.5 rounded-full font-medium">{tag}</span>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted italic">
                Author of <em>Inspired by Play</em>, available on Amazon.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-sage-50 border border-border rounded-2xl p-8 flex flex-col items-center text-center">
              <img
                src="/bryan.webp"
                alt="Bryan Burns, Co-Founder & Lead Facilitator"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
              />
              <h3 className="mt-4 md:mt-6 font-serif text-xl font-bold text-teal-900">Bryan Burns</h3>
              <p className="text-muted text-sm">Co-Founder &amp; Lead Facilitator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plato Quote */}
      <section className="bg-coral-500 text-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl italic leading-relaxed">
            &ldquo;You can discover more about a person in an hour of play than in a year of conversation.&rdquo;
          </blockquote>
          <p className="mt-4 text-coral-50 font-medium">— Plato</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-teal-900 text-center">
            What People Say
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {generalTestimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-sage-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-teal-900 text-center">
            How It Works
          </h2>
          <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="text-center">
                <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-teal-700 text-white font-serif font-bold text-sm md:text-base rounded-full">{num}</span>
                <h3 className="mt-3 md:mt-4 font-serif text-base md:text-lg font-bold text-teal-900">{title}</h3>
                <p className="mt-1.5 md:mt-2 text-xs md:text-sm text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage / Cities */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-teal-900">
            We Come to You
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Based in British Columbia, operating across Western Canada. We bring our team, our gear, and our energy to your venue — wherever that is.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                to={`/locations/${city.slug}`}
                className="bg-sage-50 text-teal-700 px-5 py-2 rounded-full font-medium hover:bg-teal-700 hover:text-white transition-colors"
              >
                {city.name}, {city.province}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="bg-sage-50 border-y border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-teal-900">
            Not ready to call?
          </h2>
          <p className="mt-3 text-muted">
            Grab our free Event Planning Guide — 5 questions to ask before booking a team building company.
          </p>
          <Link
            to="/guide"
            className="inline-block mt-6 bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-900 transition-colors"
          >
            Get the Free Guide
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-teal-900">
            Ready to Build a Better Team?
          </h2>
          <p className="mt-4 text-muted">
            Give us a call. We&apos;ll ask a few questions, learn about your group, and have a custom proposal to you within 48 hours.
          </p>
          <div className="mt-8">
            <a href={`tel:${PHONE_NUMBER}`} className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-coral-500 hover:text-orange-700 transition-colors">
              {PHONE_DISPLAY}
            </a>
            <p className="mt-3 text-sm text-muted">Monday–Friday, 9am–5pm PT</p>
            <p className="mt-4 text-muted">
              Or send us an email at{' '}
              <a href={`mailto:${EMAIL}`} className="text-teal-700 underline hover:text-teal-900">{EMAIL}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
