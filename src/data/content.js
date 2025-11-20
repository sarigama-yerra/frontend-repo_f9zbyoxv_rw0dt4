// Dummy data generator for AI Content Dashboard
// Categories: AI Tools, Agents, Websites, Apps, News, Trends, Courses, Influencers, Companies, Jobs, Showcases

export const CATEGORIES = [
  'AI Tools',
  'Agents',
  'Websites',
  'Apps',
  'News',
  'Trends',
  'Courses',
  'Influencers',
  'Companies',
  'Jobs',
  'Showcases',
]

const sampleTags = [
  'LLM', 'Vision', 'Speech', 'No-Code', 'Automation', 'Prompting', 'Analytics', 'Security', 'Open Source', 'Pro'
]

const sources = [
  'Product Hunt', 'GitHub', 'Hacker News', 'Twitter/X', 'Official Blog', 'Medium', 'YouTube', 'Reddit'
]

// Utility to get a random integer in range
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// Generate a date within last 120 days
const randomDate = () => {
  const daysAgo = rand(0, 120)
  const d = new Date()
  d.setDate(d.getDate() - daysAgo)
  return d.toISOString()
}

// Get a placeholder thumbnail
const thumb = (seed) => `https://images.unsplash.com/photo-${seed}?auto=format&fit=crop&w=600&q=60`

// Some unsplash seeds to vary thumbnails
const UNSPLASH_SEEDS = [
  '1522071820081-009f0129c71c', // tech gradient
  '1518779578993-ec3579fee39f', // code
  '1518770660439-4636190af475', // abstract
  '1518770660439-4636190af475',
  '1518770660439-4636190af475',
  '1517694712202-14dd9538aa97', // devices
  '1504384308090-c894fdcc538d', // neon
  '1461749280684-dccba630e2f6', // circuit
  '1518770660439-4636190af475',
  '1498050108023-c5249f4df085' // gradient
]

// Create items per category (16 items each)
const createItemsForCategory = (category, startIndex) => {
  const items = []
  for (let i = 0; i < 16; i++) {
    const id = `${category.toLowerCase().replace(/\s+/g,'-')}-${startIndex + i + 1}`
    items.push({
      id,
      category,
      title: `${category} ${startIndex + i + 1}`,
      summary: `Discover ${category.toLowerCase()} ${startIndex + i + 1} — a modern solution for creators and teams to accelerate AI workflows with a clean, intuitive experience.`,
      tags: Array.from({ length: 3 }, () => sampleTags[rand(0, sampleTags.length - 1)]),
      source: sources[rand(0, sources.length - 1)],
      thumbnail: thumb(UNSPLASH_SEEDS[rand(0, UNSPLASH_SEEDS.length - 1)]),
      date: randomDate(),
      link: '#'
    })
  }
  return items
}

const data = {}
let index = 0
for (const cat of CATEGORIES) {
  data[cat] = createItemsForCategory(cat, index)
  index += 16
}

export const DATA_BY_CATEGORY = data

export const ALL_ITEMS = Object.values(data).flat()
