import { useEffect, useState } from 'react'
import { Star, Clock, MapPin, IndianRupee } from 'lucide-react'
import { apiGet } from '../lib/api'

export default function Packages() {
  const [packages, setPackages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const data = await apiGet('/api/packages')
        setPackages(data)
      } catch (e) {
        setPackages([])
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <section id="packages" className="py-16 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Featured Packages</h2>
            <p className="text-blue-100 mt-2">Handpicked itineraries for a seamless yatra</p>
          </div>
        </div>

        {loading ? (
          <p className="text-blue-100">Loading packages...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((p, idx) => (
              <div key={idx} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:shadow-2xl hover:scale-[1.01] transition">
                {p.image_url && (
                  <img src={p.image_url} alt={p.title} className="h-44 w-full object-cover" />
                )}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <div className="mt-2 flex items-center gap-3 text-blue-100 text-sm">
                    <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" /> {p.destination}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" /> {p.duration_days} days</span>
                  </div>
                  {p.highlights?.length > 0 && (
                    <ul className="mt-3 text-blue-100 text-sm list-disc pl-5 space-y-1">
                      {p.highlights.slice(0,3).map((h, i) => <li key={i}>{h}</li>)}
                    </ul>
                  )}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-white font-semibold inline-flex items-center gap-1"><IndianRupee className="w-4 h-4" /> {p.price.toLocaleString('en-IN')}</div>
                    <a href="#contact" className="text-sm text-blue-300 hover:text-white">Enquire →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
