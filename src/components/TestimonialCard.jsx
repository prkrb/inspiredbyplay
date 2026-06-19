export default function TestimonialCard({ quote, name, title }) {
  return (
    <blockquote className="bg-white border border-border rounded-xl p-6 flex flex-col">
      <p className="text-ink leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-4 pt-4 border-t border-border">
        <p className="font-semibold text-teal-700">{name}</p>
        <p className="text-sm text-muted">{title}</p>
      </footer>
    </blockquote>
  )
}
