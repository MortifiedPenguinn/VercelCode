import { siteConfig } from '@/config/site'

export function Metrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {siteConfig.metrics.map((metric, index) => (
        <div key={index} className="text-center">
          <p className="text-4xl font-bold text-primary">{metric.number}</p>
          <p className="text-xl text-gray-600">{metric.label}</p>
        </div>
      ))}
    </div>
  )
}

