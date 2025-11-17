import { useEffect, useState } from 'react'
import { Hotel, Bus } from 'lucide-react'
import { apiGet } from '../lib/api'

export default function HotelsTransport() {
  const [hotels, setHotels] = useState([])
  const [transport, setTransport] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const h = await apiGet('/api/hotels')
        setHotels(h)
      } catch {}
      try {
        const t = await apiGet('/api/transport')
        setTransport(t)
      } catch {}
    })()
  }, [])

  return (
    <section id="hotels" className="py-16 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2"><Hotel className="w-6 h-6 text-blue-300" /> Comfortable Hotels</h2>
            <div className="space-y-4">
              {hotels.map((h, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-4">
                  {h.image_url && <img src={h.image_url} alt={h.name} className="w-28 h-24 object-cover rounded-lg" />}
                  <div>
                    <div className="text-white font-semibold">{h.name}</div>
                    <div className="text-sm text-blue-100">{h.destination} • {h.stars}★</div>
                    <div className="text-sm text-blue-100 mt-1">₹ {h.price_per_night.toLocaleString('en-IN')} / night</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="transport">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2"><Bus className="w-6 h-6 text-blue-300" /> Reliable Transport</h2>
            <div className="space-y-4">
              {transport.map((t, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold capitalize">{t.type}</div>
                    <div className="text-sm text-blue-100">{t.origin} → {t.destination} • {t.seats} seats</div>
                  </div>
                  <div className="text-white font-semibold">₹ {t.price.toLocaleString('en-IN')}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
