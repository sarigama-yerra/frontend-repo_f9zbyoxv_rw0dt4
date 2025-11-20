import { useState } from 'react'

export default function Filters({ onChange }) {
  const [q, setQ] = useState('')
  const [tag, setTag] = useState('')
  const [source, setSource] = useState('')

  const apply = () => onChange({ q, tag, source })

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by title..." className="px-3 py-2 rounded-lg bg-slate-950/60 border border-white/10 text-slate-200" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Filter by tag (e.g., LLM)" className="px-3 py-2 rounded-lg bg-slate-950/60 border border-white/10 text-slate-200" />
      <div className="flex gap-2">
        <input value={source} onChange={(e) => setSource(e.target.value)} placeholder="Source (e.g., GitHub)" className="flex-1 px-3 py-2 rounded-lg bg-slate-950/60 border border-white/10 text-slate-200" />
        <button onClick={apply} className="px-4 py-2 rounded-lg bg-white text-slate-900">Apply</button>
      </div>
    </div>
  )
}
