import { Link } from 'react-router-dom'
import PhoneCTA from '../components/PhoneCTA'
import TestimonialCard from '../components/TestimonialCard'
import { PHONE_NUMBER, PHONE_DISPLAY } from '../data/programs'

const outcomes = [
  { title: 'Confidence', desc: 'Students step outside their comfort zones in a safe, supported environment.' },
  { title: 'Teamwork', desc: 'Activities are built around cooperation, not competition. Every student plays a role.' },
  { title: 'Communication', desc: 'Play-based challenges require students to listen, speak up, and problem-solve together.' },
  { title: 'Leadership', desc: 'Natural leaders emerge. Quiet students find their voice. Everyone contributes.' },
]

const formats = [
  { title: 'Classroom Sessions', desc: 'A single class, 60–90 minutes. Great for team-building days or leadership units.', size: '15–35 students' },
  { title: 'Grade-Wide Programs', desc: 'Half-day programs that bring an entire grade together for a shared experience.', size: '50–150+ students' },
  { title: 'Leadership Retreats', desc: 'Full-day or multi-session programs for student councils, prefects, or peer mentors.', size: '20–60 students' },
  { title: 'Staff Pro-D Days', desc: 'The same play-based approach, designed for your teaching staff. Team building for the people who build teams every day.', size: '10–80 staff' },
]

const faqs = [
  { q: 'What ages do you work with?', a: 'We design programs for Grades 4 through 12. Activities are always age-appropriate and adapted to the group.' },
  { q: 'Do students need to be athletic?', a: 'No. Every activity is designed so all students can participate fully, regardless of physical ability or personality type.' },
  { q: 'What do you need from the school?', a: 'A gym, field, or large open space. We bring all materials, equipment, and facilitation. You just provide the students.' },
  { q: 'Can you align with our curriculum goals?', a: 'Yes. We work with teachers and administrators to connect our programs to leadership, SEL, or team-building outcomes already in your plans.' },
  { q: 'How far in advance should we book?', a: 'We recommend 3–4 weeks, but we can sometimes accommodate shorter timelines. Call and we\'ll see what we can do.' },
]

export default function Schools() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-sm font-medium uppercase tracking-wider text-coral-500 mb-4">For Schools &amp; Youth Organizations</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-teal-900 leading-tight">
            Leadership Through{' '}
            <em className="italic text-coral-500">Play</em>
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            Play-based programs that build confidence, teamwork, and communication in students — from single classrooms to full grade assemblies. Fully facilitated. Zero prep for your staff.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PhoneCTA label="Book a Program" />
            <Link
              to="/programs/young-leaders-lab"
              className="inline-flex items-center gap-2 border-2 border-teal-700 text-teal-700 font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 hover:text-white transition-colors"
            >
              About Young Leaders Lab
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem / Empathy */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-teal-900">
            You know your students need more than a textbook lesson on teamwork.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            They need to actually experience it. To laugh together, solve problems together, and discover what they&apos;re capable of when they step outside the usual classroom dynamic. That&apos;s what we do.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Our programs are designed by facilitators who understand youth groups — the energy, the social dynamics, the range of personalities in any classroom. We meet students where they are and build from there.
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-teal-900 text-center">
            What Students Walk Away With
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

      {/* Program Formats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-teal-900 text-center">
            Flexible Formats for Any School
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {formats.map(({ title, desc, size }) => (
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
            From $1,200
          </p>
          <p className="mt-2 text-muted">
            Final pricing depends on group size, format, and location — get a custom quote in under 2 hours.
          </p>
          <div className="mt-8">
            <PhoneCTA label="Get a School Quote" />
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
              <h2 className="font-serif text-xl font-bold text-teal-900">Your facilitator knows kids.</h2>
              <p className="mt-2 text-muted leading-relaxed">
                Bryan Burns has facilitated hundreds of youth programs across BC. He&apos;s a father of three young adults, a published author on play-based learning, and someone who genuinely connects with students of all ages. Your group is in good hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-2xl mx-auto px-6">
          <TestimonialCard
            quote="Our Grade 8 students talked about this program for weeks. The facilitators were incredible with the kids — energetic but respectful. We're booking again next year."
            name="Michelle Torres"
            title="Vice Principal, Westside Secondary"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-teal-900 text-center mb-10">
            Common Questions from Educators
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
          <h2 className="font-serif text-3xl font-bold">
            Give your students an experience they&apos;ll actually remember.
          </h2>
          <p className="mt-3 text-coral-50">
            Call to book a program, or request a quote online.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PhoneCTA label="Call to Book" variant="outline" className="border-white text-white hover:bg-white hover:text-coral-500" />
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-coral-500 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
