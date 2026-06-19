export default function PricingBlock({ price, perDay = false }) {
  return (
    <div>
      <p className="text-2xl font-serif font-bold text-teal-700">
        From ${price.toLocaleString()}{perDay ? '/day' : ''}
      </p>
      <p className="text-sm text-muted mt-1">
        Final pricing depends on group size, format, and location — get a custom quote in under 2 hours.
      </p>
    </div>
  )
}
