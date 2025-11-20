import Layout from '../components/Layout'
import Hero from '../components/Hero'
import CategoryGrid from '../components/CategoryGrid'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="mt-10">
        <CategoryGrid limitPerCategory={4} />
      </div>
    </Layout>
  )
}
