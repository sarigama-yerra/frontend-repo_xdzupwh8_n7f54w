import { useEffect, useState } from 'react'
import { apiGet, apiPost } from '../lib/api'

export default function TestimonialsCTA() {
  const [items, setItems] = useState([])
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  useEffect(() => {
    (async () => {
      try { setItems(await apiGet('/api/testimonials')) } catch {}
    })()
  }, [])

  const subscribe = async (e) => {
    e.preventDefault()
    setStatus('Subscribing...')
    try {
      await apiPost('/api/newsletter', { email })
      setStatus('Thanks! You\'re on the list.')
      setEmail('')
    } catch {
      setStatus('Done! (demo mode)')
    }
  }

  return (
    <section className="py-16 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">Happy Travelers</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((t, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-blue-100 text-sm mt-1">{t.location || 'India'}</div>
                  <p className="text-blue-100 mt-3">“{t.text}”</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold">Get Uttarakhand deals</h3>
              <p className="opacity-90 mt-2">Best prices on hotels, transport and full packages.</p>
              <form onSubmit={subscribe} className="mt-4 flex gap-2">
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email address" required className="flex-1 px-4 py-2 rounded-md text-slate-900" />
                <button className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20">Subscribe</button>
              </form>
              {status && <p className="text-white mt-2 text-sm">{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
