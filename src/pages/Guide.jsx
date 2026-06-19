import { useState } from 'react'
import PhoneCTA from '../components/PhoneCTA'

export default function Guide() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: Wire up to email automation (e.g. Mailchimp, ConvertKit, or custom API).
    // This should trigger an email send with the Event Planning Guide PDF attached.
    // The actual PDF content ("5 Questions to Ask Before Booking a Team Building Company")
    // still needs to be written.
    console.log('Guide opt-in:', { email, name })
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-sage-50 py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="inline-block text-sm font-medium uppercase tracking-wider text-coral-500 mb-4">Free Guide</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-teal-900 leading-tight">
            5 Questions to Ask Before Booking a Team Building Company
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            Planning a team event? This short guide helps you ask the right questions so you don&apos;t end up with a trust-fall disaster. Free, no strings attached.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-md mx-auto px-6">
          {submitted ? (
            <div className="bg-sage-50 border border-border rounded-xl p-8 text-center">
              <h2 className="font-serif text-2xl font-bold text-teal-700">Check your inbox.</h2>
              <p className="mt-3 text-muted">
                We&apos;ve sent the guide to your email. If you don&apos;t see it in a few minutes, check your spam folder.
              </p>
              <p className="mt-6 text-sm text-muted">
                Ready to talk? <PhoneCTA variant="text" label="Give us a call" />
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="guide-name" className="block text-sm font-medium text-ink mb-1">Name (optional)</label>
                <input
                  id="guide-name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full border border-border rounded-lg px-4 py-3 text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="guide-email" className="block text-sm font-medium text-ink mb-1">Email *</label>
                <input
                  id="guide-email"
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full border border-border rounded-lg px-4 py-3 text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-coral-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Send Me the Free Guide
              </button>
              <p className="text-xs text-muted text-center">No spam. Just the guide.</p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
