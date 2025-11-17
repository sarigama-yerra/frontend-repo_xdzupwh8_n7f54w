import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Packages from './components/Packages'
import Destinations from './components/Destinations'
import HotelsTransport from './components/HotelsTransport'
import InquiryForm from './components/InquiryForm'
import TestimonialsCTA from './components/TestimonialsCTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar />
      <Hero />
      <Destinations />
      <Packages />
      <HotelsTransport />
      <TestimonialsCTA />
      <InquiryForm />
      <footer className="py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-100">© {new Date().getFullYear()} InstaYatra. All rights reserved.</p>
          <div className="text-blue-200 text-sm">Serving Uttarakhand • Expanding Pan-India soon</div>
        </div>
      </footer>
    </div>
  )
}

export default App
