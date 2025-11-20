import Layout from '../components/Layout'

export default function Dashboard() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
          <div className="text-sm text-slate-400">Plan</div>
          <div className="text-2xl font-semibold text-white">Free</div>
        </div>
        <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
          <div className="text-sm text-slate-400">Saved Items</div>
          <div className="text-2xl font-semibold text-white">{JSON.parse(localStorage.getItem('saved-items') || '[]').length}</div>
        </div>
        <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
          <div className="text-sm text-slate-400">Last Sync</div>
          <div className="text-2xl font-semibold text-white">Just now</div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl p-6 bg-gradient-to-br from-indigo-500/10 to-amber-400/10 border border-white/10">
        <h2 className="text-xl font-semibold">Welcome back!</h2>
        <p className="text-slate-300 mt-2">Track your saved items and upgrade to Pro for powerful filters and collections.</p>
      </div>
    </Layout>
  )
}
