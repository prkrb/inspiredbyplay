import { Link } from 'react-router-dom'
import PhoneCTA from '../components/PhoneCTA'
import TestimonialCard from '../components/TestimonialCard'
import { PHONE_NUMBER, PHONE_DISPLAY } from '../data/programs'

const whatWeHandle = [
  'Complete activity zone setup with branded signage',
  'All games, equipment, and materials provided',
  'Fully staffed and facilitated for the entire event',
  'On-site coordination with your event management team',
  'Flexible scheduling — half-day, full-day, or multi-day',
  'Teardown and cleanup handled by our crew',
]

const eventTypes = [
  { title: 'Festivals', desc: 'Multi-day activity zones that keep families engaged and coming back. We bring the games, the energy, and the staff — you point us to our spot.', size: 'Open attendance' },
  { title: 'Community Events', desc: 'Canada Day celebrations, neighbourhood block parties, cultural festivals. A turnkey activity zone that adds value to any community gathering.', size: 'Open attendance' },
  { title: 'Family Days', desc: 'Corporate family days, company picnics, and employee appreciation events that include kids and partners. Activities for all ages.', size: '50–500+ attendees' },
  { title: 'Grand Openings & Activations', desc: 'Draw a crowd and keep them engaged. Interactive activity zones for retail openings, product launches, and brand activations.', size: 'Flexible' },
]

const faqs = [
  { q: 'How much space do you need?', a: 'It depends on the activities, but generally a 30x30 foot area is a good starting point. We can scale up or down based on your venue.' },
  { q: 'Do you bring your own staff?', a: 'Yes. Our team handles everything — setup, facilitation, supervision, and teardown. Your event team doesn\'t need to do a thing.' },
  { q: 'Can you customize the activity zone to our event theme?', a: 'Absolutely. We can match signage, activities, and energy level to your event\'s brand and audience.' },
  { q: 'What happens if it rains?', a: 'We have indoor-friendly activity options and can adapt on the fly. We\'ll discuss contingency plans with you in advance.' },
  { q: 'How far in advance should we book?', a: 'For festivals and large events, we recommend 4–6 weeks. For smaller community events, 2–3 weeks is usually fine.' },
]

export default function Events() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-sm font-medium uppercase tracking-wider text-coral-500 mb-4">For Festivals &amp; Community Events</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-teal-900 leading-tight">
            A Turnkey{' '}
            <em className="italic text-coral-500">Play Zone</em>{' '}
            for Your Event
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
            Fully managed, fully staffed activity zones for festivals, community events, and family days. We bring the games, the energy, and the crew — you just give us a spot.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <PhoneCTA label="Book a Play Zone" className="w-full sm:w-auto justify-center" />
            <Link
              to="/programs/festival-play-zone"
              className="inline-flex items-center justify-center gap-2 border-2 border-teal-700 text-teal-700 font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 hover:text-white transition-colors w-full sm:w-auto"
            >
              Program Details
            </Link>
          </div>
        </div>
      </section>

      {/* Empathy */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-teal-900">
            You have enough to manage on event day.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            The last thing you need is another vendor who shows up and needs hand-holding. Our Festival Play Zone is genuinely turnkey — we arrive, we set up, we run it all day, and we clean up. You check in once to see families having a blast, and that&apos;s it.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We&apos;ve run activity zones at festivals, community days, and corporate family events across BC. We know how to manage open-attendance crowds, keep energy high for hours, and make sure every kid (and adult) who walks in has a great time.
          </p>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-teal-900 text-center">
            What We Handle
          </h2>
          <ul className="mt-10 space-y-3">
            {whatWeHandle.map((item) => (
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

      {/* Event Types */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-teal-900 text-center">
            Events We Serve
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventTypes.map(({ title, desc, size }) => (
              <div key={title} className="border border-border rounded-xl p-6">
                <h3 className="font-serif text-lg font-bold text-teal-900">{title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{desc}</p>
                <p className="mt-3 text-sm text-teal-700 font-medium">{size}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-teal-900">
            Transparent Pricing
          </h2>
          <p className="mt-6 text-3xl font-serif font-bold text-teal-700">
            From $1,800/day
          </p>
          <p className="mt-2 text-muted">
            Final pricing depends on event duration, zone size, and location — get a custom quote in under 2 hours.
          </p>
          <p className="mt-4 text-sm text-muted">
            Multi-day events receive bundled pricing. Includes all staff, equipment, setup, and teardown.
          </p>
          <div className="mt-8">
            <PhoneCTA label="Get an Event Quote" />
          </div>
        </div>
      </section>

      {/* Meet Bryan */}
      <section className="py-16 bg-white">
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
              <h2 className="font-serif text-xl font-bold text-teal-900">Built for events that run themselves.</h2>
              <p className="mt-2 text-muted leading-relaxed">
                Bryan and the Inspired by Play team have managed activity zones at festivals and community events across British Columbia. We understand the pace, the crowds, and the logistics of live events — and we make sure your Play Zone is the highlight of the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-2xl mx-auto px-6">
          <TestimonialCard
            quote="The Play Zone was packed the entire festival. Families loved it, and our sponsors noticed the engagement. Truly turnkey — we didn't have to worry about a thing."
            name="Jordan Liu"
            title="Festival Director, Kelowna Community Arts Festival"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-teal-900 text-center mb-10">
            Common Questions from Event Organizers
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
            Make your next event unforgettable.
          </h2>
          <p className="mt-3 text-coral-50">
            Call to book a Play Zone, or request a custom quote online.
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
