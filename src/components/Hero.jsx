import { motion } from 'framer-motion'
import { Mountain, Compass, Clock, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(147,197,253,0.15),transparent_30%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Instant Uttarakhand Yatra
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-blue-100 max-w-xl"
            >
              Hotels, transport and full packages — arranged instantly with trusted partners across the Himalayas. Start with Char Dham, Kedarnath, Badrinath and more.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#packages" className="px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold">Explore Packages</a>
              <a href="#contact" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold">Talk to an Expert</a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Mountain, label: 'Himalayan Experts' },
                { icon: Clock, label: 'Instant Confirmations' },
                { icon: ShieldCheck, label: 'Safe & Secure' },
                { icon: Compass, label: 'Custom Itineraries' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2 text-blue-100">
                  <f.icon className="w-5 h-5 text-blue-300" />
                  <span className="text-sm">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1549880181-56a44cf4a9a2?q=80&w=1600&auto=format&fit=crop"
              alt="Uttarakhand Himalayas"
              className="rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10 text-white">
              Trusted by 10k+ yatris
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
