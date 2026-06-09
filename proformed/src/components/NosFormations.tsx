import FormationCard from './FormationCard'

const formations = [
  {
    title: 'Kinésithérapeute',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
  },
  {
    title: 'Ephad',
    imageUrl: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=400&h=300&fit=crop',
  },
  {
    title: 'Podologue',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
  },
]

export default function NosFormations() {
  return (
    <section className="bg-[#0d0d0d] py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-2">
          <div>
            <h2 className="text-2xl font-bold text-white">Nos formations</h2>
            <p className="text-sm text-white/50 mt-1">Découvrez la formation qui vous convient dans votre domaine</p>
          </div>
          <a href="#" className="text-sm text-white/70 font-medium hover:text-[#00c5d5] transition-colors flex items-center gap-1">
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
