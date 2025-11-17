import { useEffect, useState } from 'react'
import { MapPin } from 'lucide-react'
import { apiGet } from '../lib/api'

export default function Destinations() {
  const [items, setItems] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const data = await apiGet('/api/destinations')
        setItems(data)
      } catch (e) {
        setItems([])
      }
    })()
  }, [])

  return (
    <section id="destinations" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Top Destinations</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((d, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:shadow-xl transition">
              {d.image_url && (
                <img src={d.image_url} alt={d.name} className="h-40 w-full object-cover" />
              )}
              <div className="p-4">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <MapPin className="w-4 h-4 text-blue-300" /> {d.name}
                </div>
                <p className="text-sm text-blue-100 mt-1">{d.state}</p>
                {d.tags?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {d.tags.slice(0,3).map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-600/20 text-blue-200 border border-blue-400/20">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
