export default function Testimonial() {
  return (
    <section className="bg-[#00c5d5] py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-end mb-4">
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full bg-white/30 text-white flex items-center justify-center hover:bg-white/50 transition-colors">‹</button>
            <button className="w-8 h-8 rounded-full bg-white/30 text-white flex items-center justify-center hover:bg-white/50 transition-colors">›</button>
          </div>
        </div>
        <blockquote className="text-2xl md:text-3xl font-bold text-[#0d0d0d] leading-snug">
          "Une formation de qualité en adéquation avec le descriptif!
          Un grand merci à Olivier pour sa{' '}
          <span className="text-white">gentillesse</span> et son
          professionnalisme."
        </blockquote>
        <div className="flex justify-center gap-1 mt-6">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-[#0d0d0d] text-xl">★</span>
          ))}
        </div>
        <p className="mt-3 text-[#0d0d0d] font-semibold">Elise DELAROCHE</p>
        <p className="mt-6 text-sm text-[#0d0d0d]/70">Un avis sincère vous rend confiance</p>
      </div>
    </section>
  )
}
