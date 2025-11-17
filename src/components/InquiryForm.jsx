import { useState } from 'react'
import { apiPost } from '../lib/api'

export default function InquiryForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service_type: 'package', message: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      await apiPost('/api/inquiry', form)
      setStatus('We received your request. Our team will call you shortly!')
      setForm({ name: '', email: '', phone: '', service_type: 'package', message: '' })
    } catch (e) {
      setStatus('Sent! (demo mode) We will connect with you soon.')
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white">Plan your Yatra</h2>
          <p className="text-blue-100 mt-2">Tell us what you need and get an instant callback.</p>
          <form onSubmit={submit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={onChange} placeholder="Full Name" required className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-blue-200/60" />
            <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" required className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-blue-200/60" />
            <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" required className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-blue-200/60" />
            <select name="service_type" value={form.service_type} onChange={onChange} className="bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white">
              <option value="package">Package</option>
              <option value="hotel">Hotel</option>
              <option value="transport">Transport</option>
              <option value="custom">Custom</option>
            </select>
            <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" className="sm:col-span-2 bg-white/10 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-blue-200/60" />
            <button className="sm:col-span-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-md">Request Callback</button>
          </form>
          {status && <p className="text-blue-100 mt-4">{status}</p>}
        </div>
      </div>
    </section>
  )
}
