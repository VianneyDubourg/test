export default function Hero() {
  return (
    <section className="relative min-h-[420px] bg-[#0d0d0d] overflow-hidden flex items-center">
      {/* Cyan wave background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2">
        <svg viewBox="0 0 500 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00c5d5" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0097a7" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <path d="M100,0 Q200,100 150,200 Q100,300 200,400 L500,400 L500,0 Z" fill="url(#heroGrad)" />
          <path d="M80,0 Q180,80 130,180 Q80,280 180,380 L500,380 L500,0 Z" fill="#00c5d5" opacity="0.3" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white max-w-xl leading-tight">
          Centre de formation{' '}
          <span className="text-[#00c5d5]">médical</span> et<br />
          paramédical
        </h1>
        <p className="mt-4 text-white/70 max-w-md text-sm leading-relaxed">
          Formation certifiées Qualiopi, conçues sur mesure pour répondre à vos besoins professionnels !
          Destinées aux acteurs du secteur médical et paramédical, nos formations sont entièrement
          personnalisables et éligibles au FIFPL.
        </p>
        <button className="mt-8 flex items-center gap-3 bg-white text-[#0d0d0d] font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#00c5d5] hover:text-white transition-colors">
          Nos formations
          <span className="bg-[#0d0d0d] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">→</span>
        </button>
      </div>
    </section>
  )
}
