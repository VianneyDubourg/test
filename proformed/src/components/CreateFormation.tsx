export default function CreateFormation() {
  return (
    <section className="bg-[#0d0d0d] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Phone mockup */}
        <div className="flex-shrink-0">
          <div className="relative w-52 bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=500&fit=crop"
              alt="App mobile"
              className="w-full h-64 object-cover"
            />
            <div className="p-3 bg-white">
              <div className="h-2 bg-gray-200 rounded mb-2 w-3/4" />
              <div className="h-2 bg-gray-100 rounded w-1/2" />
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-white">Créez votre formation</h2>
          <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-md">
            Créez une formation qui vous correspond ? proformed mèt à votre disposition
            un chargé de clientèle pour créer la formation qui vous convient avec nos
            meilleur formateur.
          </p>
          <button className="mt-8 flex items-center gap-3 bg-white text-[#0d0d0d] font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#00c5d5] hover:text-white transition-colors">
            En savoir plus
            <span className="bg-[#0d0d0d] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
