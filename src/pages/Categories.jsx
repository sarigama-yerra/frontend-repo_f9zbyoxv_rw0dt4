import Layout from '../components/Layout'
import { CATEGORIES, DATA_BY_CATEGORY } from '../data/content'
import { Link, useParams } from 'react-router-dom'

export default function Categories() {
  const { slug } = useParams()
  const selected = slug ? CATEGORIES.find(c => c.toLowerCase().replace(/\s+/g,'-') === slug) : null

  return (
    <Layout>
      {!selected ? (
        <div className="space-y-10">
          <h1 className="text-2xl font-semibold">All Categories</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((c) => (
              <Link key={c} to={`/categories/${c.toLowerCase().replace(/\s+/g,'-')}`} className="rounded-xl p-4 bg-white/5 border border-white/10 hover:bg-white/10">
                <div className="text-sm font-medium text-white">{c}</div>
                <div className="text-xs text-slate-400">{DATA_BY_CATEGORY[c].length} items</div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <CategoryView category={selected} />
      )}
    </Layout>
  )
}

function CategoryView({ category }) {
  const items = DATA_BY_CATEGORY[category]
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{category}</h1>
        <Link to="/categories" className="text-sm text-indigo-300">Back</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

function ItemCard({ item }) {
  return (
    <Link to={`/item/${item.id}`} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
      <div className="aspect-video overflow-hidden">
        <img src={item.thumbnail} alt="thumb" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 text-[11px] text-indigo-300">
          <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-200">{item.source}</span>
          <span className="text-slate-400">{new Date(item.date).toLocaleDateString()}</span>
        </div>
        <h3 className="text-white font-medium leading-tight line-clamp-2">{item.title}</h3>
        <p className="text-slate-300/80 text-sm line-clamp-2">{item.summary}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((t, i) => (
            <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">{t}</span>
          ))}
        </div>
        <button className="w-full mt-1 text-sm px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white hover:bg-white/15">Save</button>
      </div>
    </Link>
  )
}
