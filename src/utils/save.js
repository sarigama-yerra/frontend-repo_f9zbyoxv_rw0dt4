export const getSavedIds = () => {
  try { return JSON.parse(localStorage.getItem('saved-items') || '[]') } catch { return [] }
}

export const isSaved = (id) => getSavedIds().includes(id)

export const toggleSave = (id) => {
  const ids = new Set(getSavedIds())
  if (ids.has(id)) ids.delete(id)
  else ids.add(id)
  const arr = Array.from(ids)
  localStorage.setItem('saved-items', JSON.stringify(arr))
  return arr
}
