import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function Pricing() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Free</h2>
          <ul className="mt-4 space-y-2 text-slate-300 text-sm">
            <li>Browse all categories</li>
            <li>Search with basic filters</li>
            <li>Save up to 20 items</li>
          </ul>
          <button className="mt-6 w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white">Current Plan</button>
        </div>

        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/20 to-amber-400/20 p-6">
          <div className="absolute -top-3 right-4 text-xs px-2 py-1 rounded-full bg-white text-slate-900">Popular</div>
          <h2 className="text-xl font-semibold">Pro</h2>
          <ul className="mt-4 space-y-2 text-slate-100 text-sm">
            <li>Advanced filters & collections</li>
            <li>Unlimited saves</li>
            <li>Priority updates</li>
          </ul>
          <Link to="/dashboard" className="mt-6 w-full inline-flex justify-center px-4 py-2 rounded-lg bg-white text-slate-900">Upgrade</Link>
        </div>
      </div>
    </Layout>
  )
}
