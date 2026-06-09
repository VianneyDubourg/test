import FormationCard from './FormationCard'

const formations = [
  {
    title: 'Formation Scoliose 5EAS',
    imageUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=300&fit=crop',
  },
  {
    title: 'Préparation à l\'accouchement',
    imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop',
  },
  {
    title: 'La maxillo-faciale',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
]

export default function PopularFormations() {
  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-2">
          <div>
            <h2 className="text-2xl font-bold text-[#0d0d0d]">Les plus populaires</h2>
            <p className="text-sm text-gray-500 mt-1">Nos formations</p>
          </div>
          <a href="#" className="text-sm text-[#0d0d0d] font-medium hover:text-[#00c5d5] transition-colors flex items-center gap-1">
            Voir tout →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {formations.map((f) => (
            <FormationCard key={f.title} title={f.title} imageUrl={f.imageUrl} />
          ))}
        </div>
      </div>
    </section>
  )
}
