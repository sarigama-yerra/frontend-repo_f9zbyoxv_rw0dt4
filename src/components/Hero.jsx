import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 py-24 px-6 sm:px-12 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-3xl"
        >
          Your AI Content Hub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl"
        >
          Explore tools, agents, apps, news, trends, and more — beautifully organized in one modern dashboard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <Link to="/categories" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:opacity-90">
            Browse Categories
          </Link>
          <Link to="/search" className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/15">
            Try Search
          </Link>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
    </section>
  )
}
