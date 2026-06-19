import LeadForm from '../components/LeadForm'
import { PHONE_NUMBER, PHONE_DISPLAY, EMAIL } from '../data/programs'

export default function Contact() {
  return (
    <>
      <section className="bg-sage-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-teal-900">Get in Touch</h1>
          <p className="mt-4 text-lg text-muted">
            The fastest way to get started is a phone call. We&apos;ll ask about your team, your goals, and your timeline — and have a custom proposal to you within 48 hours.
          </p>
          <div className="mt-8">
            <a href={`tel:${PHONE_NUMBER}`} className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-coral-500 hover:text-orange-700 transition-colors">
              {PHONE_DISPLAY}
            </a>
            <p className="mt-2 text-sm text-muted">Monday–Friday, 9am–5pm PT</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-2xl font-bold text-teal-900 mb-2">Request a Custom Quote</h2>
          <p className="text-muted mb-8">
            Not ready to call? Fill out the form below and we&apos;ll reach out within 2 hours on weekdays.
          </p>
          <LeadForm />
        </div>
      </section>

      <section className="py-12 bg-sage-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-muted">
            You can also email us at{' '}
            <a href={`mailto:${EMAIL}`} className="text-teal-700 underline hover:text-teal-900 font-medium">{EMAIL}</a>
          </p>
        </div>
      </section>
    </>
  )
}
