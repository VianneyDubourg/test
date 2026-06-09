export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <div className="flex items-center gap-10">
          <div className="text-white font-bold text-sm leading-tight">
            <span className="text-[#00c5d5]">PRO</span><br />
            <span>FOR</span><br />
            <span>MED</span>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm text-white/80">
            <a href="#" className="hover:text-white transition-colors">Formations</a>
            <a href="#" className="hover:text-white transition-colors">Actualité</a>
            <a href="#" className="hover:text-white transition-colors">Qui sommes nous ?</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5">
          <input
            type="text"
            placeholder="Recherche"
            className="bg-transparent text-sm text-white placeholder-white/50 outline-none w-32"
          />
          <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </nav>
  )
}
