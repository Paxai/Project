import { FaServer, FaCog, FaBolt } from 'react-icons/fa';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              FiveM <span className="text-primary">Roleplay</span>
              <br />Server
            </h1>
            <p className="text-gray-400 mb-8">
              Jsme český herní portál hostovaný na rozšířené platformě FiveM pro
              Grand Theft Auto V (GTA V) v rámci populárního herního módu roleplay.
            </p>
            <div className="flex space-x-4">
              <button className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-md font-medium transition-colors">
                Připojit se
              </button>
              <button className="bg-secondary-light hover:bg-secondary text-white px-6 py-3 rounded-md font-medium transition-colors">
                Návod ke spuštění
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-primary/20 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-primary animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-secondary-light/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Proč hrát na našem serveru?</h2>
            <p className="text-gray-400 mt-4">
              Nabízíme jedinečný herní zážitek s důrazem na kvalitní roleplay a
              přátelskou komunitu
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary p-8 rounded-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <FaServer className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Aktivní komunita</h3>
              <p className="text-gray-400">
                Přátelská komunita hráčů s administrátory, pravidelné eventy a
                možnost zapojit se do rozvoje serveru.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <FaCog className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Vlastní systémy</h3>
              <p className="text-gray-400">
                Propracovaný ekonomický systém, zaměstnání, vlastnictví nemovitostí
                a vozidel, a mnoho dalších funkcí.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <FaBolt className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Optimalizovaný výkon</h3>
              <p className="text-gray-400">
                Server je plynulý a optimalizovaný pro nejlepší zážitek s FPS
                výkonem podle RAGE, což zajišťuje příjemný herní zážitek.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="stats-card animate-float animate-pulse-glow">
              <div className="stats-number">3,842+</div>
              <div className="text-gray-400 mt-2">Registrovaných hráčů</div>
            </div>
            <div className="stats-card animate-float animate-pulse-glow" style={{animationDelay: "0.2s"}}>
              <div className="stats-number">1,247+</div>
              <div className="text-gray-400 mt-2">Zakoupených vozidel</div>
            </div>
            <div className="stats-card animate-float animate-pulse-glow" style={{animationDelay: "0.4s"}}>
              <div className="stats-number">756+</div>
              <div className="text-gray-400 mt-2">Vlastněných nemovitostí</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}