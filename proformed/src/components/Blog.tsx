export default function Blog() {
  return (
    <section className="bg-[#0d0d0d] py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Explorez le blog</h2>
            <p className="text-sm text-white/50 mt-1">Des conseils, des tendances et des astuces du quotidien</p>
          </div>
          <a href="#" className="text-sm text-white/70 font-medium hover:text-[#00c5d5] transition-colors flex items-center gap-1">
            Voir les articles →
          </a>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-[#1a1a1a]">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <span className="absolute top-4 left-4 bg-[#00c5d5] text-white text-xs px-3 py-1 rounded-full z-10">Précieux</span>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop"
                alt="Blog"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white leading-snug">
                Intelligence Artificielle Est<br />Enseignement Superieure
              </h3>
              <p className="mt-4 text-white/60 text-sm leading-relaxed">
                L'Intelligence artificielle (IA) s'impose comme un moteur majeur
                de transformation dans le secteur de l'enseignement supérieur.
                Universités, grandes écoles et instituts de formation adoptent
                progressivement des technologies basées sur l'IA. L'objectif ?
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00c5d5] flex items-center justify-center text-white text-xs font-bold">O</div>
                <div>
                  <p className="text-white text-sm font-medium">Olivier Darmour</p>
                  <p className="text-white/40 text-xs">Directeur formateur</p>
                </div>
              </div>
            </div>
          </div>
          <button className="absolute bottom-4 right-4 bg-[#00c5d5] text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#0097a7] transition-colors">
            →
          </button>
        </div>
      </div>
    </section>
  )
}
