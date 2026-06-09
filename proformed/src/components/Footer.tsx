export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Logo + newsletter */}
          <div className="flex-1">
            <div className="text-white font-bold text-lg leading-tight mb-4">
              <span className="text-[#00c5d5]">PRO</span><br />
              FOR<br />
              MED
            </div>
            <p className="text-white/60 text-sm mb-4 max-w-xs">
              Inscrivez-vous et parainez pour obtenir 20 % de réduction sur votre formation.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-white/10 text-white placeholder-white/40 text-sm px-4 py-2 rounded-full outline-none border border-white/10 focus:border-[#00c5d5] transition-colors flex-1 max-w-48"
              />
              <button className="bg-[#00c5d5] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#0097a7] transition-colors">
                Inscrire
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Pages</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">Produit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Catalogues</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">404</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Information</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">Conditions générales de vente</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Politique de cookies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
