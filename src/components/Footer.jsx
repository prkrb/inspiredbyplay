import { Link } from 'react-router-dom'
import { PHONE_NUMBER, PHONE_DISPLAY, EMAIL } from '../data/programs'

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <img src="/logo.png" alt="Inspired by Play" className="h-10 brightness-0 invert" />
            <p className="mt-4 text-sage-100 text-sm leading-relaxed max-w-sm">
              Team building that people actually love. Fully facilitated programs for corporate teams, conferences, schools, and community events across Canada.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/corporate" className="text-sage-100 hover:text-white transition-colors">For Companies</Link></li>
              <li><Link to="/schools" className="text-sage-100 hover:text-white transition-colors">For Schools</Link></li>
              <li><Link to="/events" className="text-sage-100 hover:text-white transition-colors">For Events</Link></li>
              <li><Link to="/programs" className="text-sage-100 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/how-it-works" className="text-sage-100 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/locations/vancouver" className="text-sage-100 hover:text-white transition-colors">Locations</Link></li>
              <li><Link to="/contact" className="text-sage-100 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/guide" className="text-sage-100 hover:text-white transition-colors">Free Planning Guide</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`tel:${PHONE_NUMBER}`} className="text-sage-100 hover:text-white transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="text-sage-100 hover:text-white transition-colors break-all">
                  {EMAIL}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sage-100 text-xs">
              Serving Vancouver, Victoria, Kelowna, Calgary &amp; beyond.
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-12 pt-8 border-t border-white/10 text-center text-xs text-sage-100">
          &copy; {new Date().getFullYear()} Inspired by Play. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
