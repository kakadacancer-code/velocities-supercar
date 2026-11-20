export default function CarPrice({ price, showSource = false }) {
  const amount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: price.currency,
    maximumFractionDigits: 0,
  }).format(price.amount)

  return <div className="car-price">
    <div className="car-price__figure">
      <strong>{amount}</strong>
      <span>{price.year} · {price.basis}</span>
    </div>
    {showSource && <p className="car-price__source">
      {price.note} <a href={price.source} target="_blank" rel="noreferrer">{price.publisher}</a>
    </p>}
  </div>
}
