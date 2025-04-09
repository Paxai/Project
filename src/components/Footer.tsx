export default function Footer() {
  return (
    <footer className="bg-secondary-light/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.png" alt="Server Logo" className="h-10 w-auto mb-4" />
            <p className="text-gray-400 text-sm">
              Prémiový FiveM RolePlay server s důrazem na kvalitu a zážitek hráčů.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Odkazy</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary">Domů</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Pravidla</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Tým</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Podpora</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary">Wiki</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Something</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Something</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Something</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Právní informace</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary">Ochrana osobních údajů</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 FivePD. Všechna práva vyhrazena. Vlastník: ShadowGhost</p>
          <p className="mt-2">
            Tento server není přidružen k Rockstar Games. Take-Two Interactive nebo jiným držitelům práv ke hře Grand Theft Auto V.
          </p>
        </div>
      </div>
    </footer>
  );
}
