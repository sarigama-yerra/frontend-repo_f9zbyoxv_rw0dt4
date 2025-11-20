import Layout from '../components/Layout'
import { ALL_ITEMS } from '../data/content'
import { useParams, Link } from 'react-router-dom'

export default function ItemDetails() {
  const { id } = useParams()
  const item = ALL_ITEMS.find((it) => it.id === id)
  if (!item) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="text-2xl font-semibold">Item not found</h1>
          <Link to="/" className="mt-4 inline-block text-indigo-300">Go Home</Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img src={item.thumbnail} alt="thumb" className="w-full h-auto" />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3">
            <div className="flex items-center gap-2 text-[11px]">
              <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-200">{item.category}</span>
              <span className="text-slate-400">{new Date(item.date).toLocaleDateString()}</span>
              <span className="text-slate-400">{item.source}</span>
            </div>
            <h1 className="text-3xl font-semibold text-white">{item.title}</h1>
            <p className="text-slate-300">{item.summary}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {item.tags.map((t, i) => (
                <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">{t}</span>
              ))}
            </div>
            <div className="pt-4">
              <a href={item.link} className="inline-flex px-4 py-2 rounded-lg bg-white text-slate-900">Visit Source</a>
              <button className="ml-2 inline-flex px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white">Save</button>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Related</h3>
          <div className="space-y-3">
            {ALL_ITEMS.filter((x) => x.category === item.category && x.id !== item.id).slice(0, 6).map((rel) => (
              <Link key={rel.id} to={`/item/${rel.id}`} className="flex gap-3 items-center rounded-xl p-2 bg-white/5 border border-white/10 hover:bg-white/10">
                <img src={rel.thumbnail} alt="t" className="w-16 h-12 object-cover rounded-md" />
                <div>
                  <div className="text-sm font-medium text-white line-clamp-1">{rel.title}</div>
                  <div className="text-xs text-slate-400">{new Date(rel.date).toLocaleDateString()}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
