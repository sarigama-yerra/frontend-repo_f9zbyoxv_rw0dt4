import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import SearchPage from './pages/Search'
import FiltersPage from './pages/Filters'
import ItemDetails from './pages/ItemDetails'
import Saved from './pages/Saved'
import Dashboard from './pages/Dashboard'
import Pricing from './pages/Pricing'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:slug" element={<Categories />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/filters" element={<FiltersPage />} />
      <Route path="/item/:id" element={<ItemDetails />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  )
}

export default App
