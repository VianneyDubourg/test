const features = [
  {
    icon: '✓',
    title: 'Certification Qualiopi',
    desc: "Proformed répond aux critères de sélection pour vous proposer des formation certifiée qualiopi.",
  },
  {
    icon: '📍',
    title: 'Formation partout en france',
    desc: "Nos 15 formateurs expert du terrain se déplacent partout en France pour répondre à vos besoins.",
  },
  {
    icon: '✏️',
    title: 'Créée votre formation',
    desc: "Créée une formation qui vous correspond, nos ressources sur mesure vous permettent d'ajuster à votre secteur.",
  },
]

export default function WhyProformed() {
  return (
    <section className="bg-[#0d0d0d] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white">Pourquoi choisir Proformed?</h2>
        <p className="mt-2 text-white/50 text-sm">Des formations qui réponde à vos besoins</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {features.map((f) => (
            <div key={f.title} className="bg-[#1a1a1a] rounded-2xl p-6 text-left border border-white/5">
              <div className="w-10 h-10 bg-[#00c5d5] rounded-full flex items-center justify-center text-white text-lg mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
