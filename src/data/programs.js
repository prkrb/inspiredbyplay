export const PHONE_NUMBER = '1-250-555-0199'
export const PHONE_DISPLAY = '1-250-555-0199'
export const EMAIL = 'hello@inspiredbyplay.com'

export const programs = [
  {
    name: 'The Culture Reset',
    slug: 'culture-reset',
    promise: 'A full-day program for teams of 20–100 designed to rebuild trust and communication after a hard quarter.',
    format: 'Full-day or half-day, indoor or outdoor',
    groupSize: '20–100',
    startingPrice: 2500,
    bestFor: ['Corporate retreats', 'Staff appreciation days', 'Post-restructuring team repair'],
    whoThisIsFor: 'Your team has been through a rough stretch — a reorg, a tough quarter, or just the slow erosion of connection that happens when everyone is heads-down for too long. The Culture Reset is designed for mid-to-large teams who need more than a pizza lunch to feel like a team again.',
    whatsIncluded: [
      'Full facilitation by a lead facilitator and support staff',
      'Custom activity design based on your team goals',
      'All materials, supplies, and equipment',
      'Setup and teardown handled by our crew',
      'Post-event recap with photos and key takeaways',
      'Indoor or outdoor venue coordination support',
    ],
    testimonial: {
      quote: 'We came in as coworkers and left feeling like an actual team. Our facilitator read the room perfectly and adjusted on the fly. Best team day we\'ve ever had.',
      name: 'Sarah Chen',
      title: 'HR Director, Pacific Northwest Credit Union',
    },
    secondary: false,
  },
  {
    name: 'The Room Igniter',
    slug: 'room-igniter',
    promise: 'A 45-minute facilitated session that turns a tired 300-person conference room into an engaged one.',
    format: 'Single session, 45 minutes, add-on to existing conference agenda',
    groupSize: 'Up to 300+ (scalable)',
    startingPrice: 1500,
    bestFor: ['Conference organizers', 'Keynote add-ons', 'Large audience energizers'],
    whoThisIsFor: 'You\'re organizing a conference or large event and you need a session that wakes the room up. Not another panel. Not another lecture. Something that gets 300 people on their feet, laughing, and actually talking to each other.',
    whatsIncluded: [
      'One lead facilitator with stage presence for large audiences',
      'Custom session design to match your event theme',
      'All props and materials',
      'Tech rider and AV coordination with your venue',
      'Pre-event call to align on audience and goals',
    ],
    testimonial: {
      quote: 'We booked Inspired by Play as an energizer between keynotes. They had 250 people laughing and high-fiving within five minutes. Multiple attendees said it was the highlight of the conference.',
      name: 'David Park',
      title: 'Event Coordinator, BC Tech Summit',
    },
    secondary: false,
  },
  {
    name: 'Young Leaders Lab',
    slug: 'young-leaders-lab',
    promise: 'A half-day leadership-through-play program for student groups, built around confidence and teamwork.',
    format: 'Half-day',
    groupSize: 'Flexible, school-class to grade-wide',
    startingPrice: 1200,
    bestFor: ['Schools', 'Youth organizations', 'Leadership development programs'],
    whoThisIsFor: 'You work with young people and you know that the best leadership lessons don\'t come from textbooks. Young Leaders Lab uses play-based activities to build confidence, communication, and teamwork in students from elementary through high school.',
    whatsIncluded: [
      'Lead facilitator experienced with youth groups',
      'Age-appropriate activity design',
      'All materials and supplies',
      'Pre-program consultation with teachers or group leaders',
      'Post-program summary for educators',
    ],
    testimonial: {
      quote: 'Our Grade 8 students talked about this program for weeks. The facilitators were incredible with the kids — energetic but respectful. We\'re booking again next year.',
      name: 'Michelle Torres',
      title: 'Vice Principal, Westside Secondary',
    },
    secondary: false,
  },
  {
    name: 'Festival Play Zone',
    slug: 'festival-play-zone',
    promise: 'A fully managed, turnkey activity zone for festivals and community events.',
    format: 'Half-day to multi-day, fully staffed and managed',
    groupSize: 'Open community attendance',
    startingPrice: 1800,
    bestFor: ['Festivals', 'Community events', 'Family-day activations'],
    whoThisIsFor: 'You\'re organizing a community event or festival and need an activity zone that runs itself. We bring the games, the staff, and the energy — you just point us to our spot.',
    whatsIncluded: [
      'Full activity zone setup with branded signage',
      'Staffed and facilitated for the duration of your event',
      'All games, equipment, and materials',
      'Flexible scheduling for half-day or multi-day events',
      'On-site coordination with your event management team',
    ],
    testimonial: {
      quote: 'The Play Zone was packed the entire festival. Families loved it, and our sponsors noticed the engagement. Truly turnkey — we didn\'t have to worry about a thing.',
      name: 'Jordan Liu',
      title: 'Festival Director, Kelowna Community Arts Festival',
    },
    secondary: true,
  },
]

// Programs sorted by price high-to-low (anchor-high ordering)
export const programsByPrice = [...programs].sort((a, b) => b.startingPrice - a.startingPrice)

// Corporate programs (non-secondary) sorted by price
export const corporatePrograms = programsByPrice.filter(p => !p.secondary)

// Secondary programs
export const secondaryPrograms = programsByPrice.filter(p => p.secondary)
