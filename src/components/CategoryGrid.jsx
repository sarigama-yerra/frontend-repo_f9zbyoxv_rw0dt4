import { Link } from 'react-router-dom'
import { CATEGORIES, DATA_BY_CATEGORY } from '../data/content'
import { useEffect, useState } from 'react'
import { getSavedIds, toggleSave } from '../utils/save'

export default function CategoryGrid({ limitPerCategory = 6, showAllLink = true }) {
  const [saved, setSaved] = useState([])
  useEffect(() => setSaved(getSavedIds()), [])

  const onToggle = (id, e) => {
    e.preventDefault()
    const ids = toggleSave(id)
    setSaved(ids)
  }

  return (
    <div className="space-y-12">
      {CATEGORIES.map((cat) => (
        <section key={cat}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">{cat}</h2>
            {showAllLink && (
              <Link to={`/categories/${cat.toLowerCase().replace(/\s+/g,'-')}`} className="text-sm text-indigo-300 hover:text-indigo-200">View all</Link>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {DATA_BY_CATEGORY[cat].slice(0, limitPerCategory).map((item) => (
              <ItemCard key={item.id} item={item} saved={saved.includes(item.id)} onToggle={onToggle} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

function ItemCard({ item, saved, onToggle }) {
  return (
    <Link to={`/item/${item.id}`} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img src={item.thumbnail} alt="thumb" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
      </div>
      <div className="p-4 space-y-3 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-[11px] text-indigo-300">
          <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-200">{item.category}</span>
          <span className="text-slate-400">{new Date(item.date).toLocaleDateString()}</span>
        </div>
        <h3 className="text-white font-medium leading-tight line-clamp-2">{item.title}</h3>
        <p className="text-slate-300/80 text-sm line-clamp-2">{item.summary}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((t, i) => (
            <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">{t}</span>
          ))}
        </div>
        <button onClick={(e) => onToggle(item.id, e)} className={`mt-3 w-full text-sm px-3 py-2 rounded-lg border ${saved ? 'bg-white text-slate-900 border-white' : 'bg-white/10 text-white border-white/10 hover:bg-white/15'}`}>
          {saved ? 'Saved' : 'Save'}
        </button>
      </div>
    </Link>
  )
}
