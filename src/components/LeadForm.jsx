import { useState } from 'react'
import { programs } from '../data/programs'

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '',
    groupSize: '', program: '', eventDate: '', message: '',
  })

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: Wire up to real form backend (Formspree, API endpoint, etc.)
    // Replace the console.log below with your actual form submission logic.
    console.log('Lead form submission:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-sage-50 border border-border rounded-xl p-8 text-center">
        <h3 className="font-serif text-2xl font-bold text-teal-700">We got your message.</h3>
        <p className="mt-2 text-muted">We&apos;ll call you back within 2 hours on weekdays.</p>
      </div>
    )
  }

  const inputClass = 'w-full border border-border rounded-lg px-4 py-3 text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-colors'
  const labelClass = 'block text-sm font-medium text-ink mb-1'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>Name *</label>
          <input id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="you@company.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="250-555-0100" className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>Company</label>
          <input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" className={inputClass} />
        </div>
        <div>
          <label htmlFor="groupSize" className={labelClass}>Group Size</label>
          <input id="groupSize" name="groupSize" value={formData.groupSize} onChange={handleChange} placeholder="e.g. 50" className={inputClass} />
        </div>
        <div>
          <label htmlFor="program" className={labelClass}>Preferred Program</label>
          <select id="program" name="program" value={formData.program} onChange={handleChange} className={inputClass}>
            <option value="">Select a program</option>
            {programs.map(p => (
              <option key={p.slug} value={p.name}>{p.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="eventDate" className={labelClass}>Approximate Event Date</label>
        <input id="eventDate" name="eventDate" type="date" value={formData.eventDate} onChange={handleChange} className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your event. Looking for an ongoing relationship? Mention it here and we'll talk about a quarterly arrangement."
          className={inputClass}
        />
      </div>
      <p className="text-sm text-muted">Tell us about your event — we&apos;ll call you back within 2 hours on weekdays.</p>
      <button type="submit" className="w-full bg-coral-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors sm:w-auto">
        Get Your Custom Quote
      </button>
    </form>
  )
}
