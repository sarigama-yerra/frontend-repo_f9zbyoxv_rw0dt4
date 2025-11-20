import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import { ALL_ITEMS } from '../data/content'
import { Link } from 'react-router-dom'

export default function Saved() {
  const [saved, setSaved] = useState([])

  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem('saved-items') || '[]')
    setSaved(ALL_ITEMS.filter((x) => ids.includes(x.id)))
  }, [])

  return (
    <Layout>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Saved Items</h1>
        <button
          className="text-sm text-slate-300 hover:text-white"
          onClick={() => {
            localStorage.removeItem('saved-items')
            setSaved([])
          }}
        >
          Clear All
        </button>
      </div>
      {saved.length === 0 ? (
        <div className="text-slate-400">No saved items yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {saved.map((item) => (
            <Link key={item.id} to={`/item/${item.id}`} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <div className="aspect-video overflow-hidden">
                <img src={item.thumbnail} alt="thumb" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-[11px] text-indigo-300">
                  <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-200">{item.category}</span>
                  <span className="text-slate-400">{new Date(item.date).toLocaleDateString()}</span>
                </div>
                <h3 className="text-white font-medium leading-tight line-clamp-2">{item.title}</h3>
                <p className="text-slate-300/80 text-sm line-clamp-2">{item.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </Layout>
  )
}
