import { FaCrown, FaUserShield, FaChartLine, FaHandshake, FaClock, FaGamepad, FaEnvelope, FaDiscord, FaShieldAlt, FaTools, FaUsersCog, FaDatabase, FaUsers, FaExclamationTriangle, FaUserCheck, FaComments } from 'react-icons/fa';

interface TeamPageProps {
  handleDiscordAuth: () => void;
}

export default function TeamPage({}: TeamPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Náš <span className="text-primary">Tým</span></h1>
        <p className="text-gray-400">
          Seznamte se s lidmi, kteří se starají o chod serveru a zajišťují kvalitní herní zážitek pro všechny hráče.
        </p>
      </div>

      {/* Server Owner */}
      <div className="mb-16 animate-slide-up">
        <h2 className="text-2xl font-bold text-primary mb-8 text-center">Majitel serveru</h2>
        <div className="team-card group">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 p-6">
            <div className="team-avatar relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
              <img src="/cat.jpg" alt="Server Owner" className="w-full h-full object-cover relative z-10" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="team-title">Name</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos amet tempore quisquam dolore doloremque ducimus provident nobis culpa, nemo debitis neque, voluptates impedit quae magni nostrum sequi quasi officiis eveniet?
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Zodpovědnosti</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li className="flex items-center">
                      <FaCrown className="text-primary mr-2" />
                      Strategické vedení serveru
                    </li>
                    <li className="flex items-center">
                      <FaUserShield className="text-primary mr-2" />
                      Správa týmu
                    </li>
                    <li className="flex items-center">
                      <FaChartLine className="text-primary mr-2" />
                      Rozvoj komunity
                    </li>
                    <li className="flex items-center">
                      <FaHandshake className="text-primary mr-2" />
                      Partnerská spolupráce
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Informace</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li className="flex items-center">
                      <FaClock className="text-primary mr-2" />
                      Ve funkci od 2023
                    </li>
                    <li className="flex items-center">
                      <FaGamepad className="text-primary mr-2" />
                      5+ let FiveM zkušeností
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="mailto:owner@server.cz" className="team-button bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md flex items-center space-x-2">
                  <FaEnvelope />
                  <span>email@gmail.com</span>
                </a>
                <a href="https://discord.gg/server" className="team-button bg-[#5865F2] hover:bg-[#4752C4] px-4 py-2 rounded-md flex items-center space-x-2">
                  <FaDiscord />
                  <span>Discord#0001</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Administrators */}
      <div className="mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-2xl font-bold text-primary mb-8 text-center">Hlavní administrátoři</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((admin) => (
            <div key={admin} className="team-card group">
              <div className="flex flex-col items-center p-6">
                <div className="team-avatar relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                  <img src={`/admin${admin}-avatar.jpg`} alt={`Admin ${admin}`} className="w-full h-full object-cover relative z-10" />
                </div>
                <h3 className="team-title text-center">Admin{admin}</h3>
                <p className="text-gray-400 mb-4 text-center">
                  Zkušený administrátor s hlubokou znalostí FiveM ekosystému a správy komunit.
                </p>
                
                <h4 className="font-semibold text-primary mb-2 text-center">Zodpovědnosti</h4>
                <ul className="text-gray-400 space-y-2 mb-6 w-full">
                  <li className="flex items-center">
                    <FaShieldAlt className="text-primary mr-2" />
                    Technická podpora a údržba
                  </li>
                  <li className="flex items-center">
                    <FaTools className="text-primary mr-2" />
                    Řešení problémů a bugů
                  </li>
                  <li className="flex items-center">
                    <FaUsersCog className="text-primary mr-2" />
                    Správa moderátorského týmu
                  </li>
                  <li className="flex items-center">
                    <FaDatabase className="text-primary mr-2" />
                    Správa databáze a systémů
                  </li>
                </ul>

                <div className="mt-auto">
                  <a href={`mailto:admin${admin}@server.cz`} className="team-button bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md inline-flex items-center space-x-2">
                    <FaEnvelope />
                    <span>email{admin}@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Moderators */}
      <div className="mb-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
        <h2 className="text-2xl font-bold text-primary mb-8 text-center">Moderátoři</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((mod) => (
            <div key={mod} className="team-card group">
              <div className="flex flex-col items-center p-6">
                <div className="team-avatar relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                  <img src={`/mod${mod}-avatar.jpg`} alt={`Moderátor ${mod}`} className="w-full h-full object-cover relative z-10" />
                </div>
                <h3 className="team-title text-center">Moderátor{mod}</h3>
                <p className="text-gray-400 mb-4 text-center">
                  Aktivní člen komunity zaměřený na udržování příjemného herního prostředí.
                </p>
                
                <h4 className="font-semibold text-primary mb-2 text-center">Zodpovědnosti</h4>
                <ul className="text-gray-400 space-y-2 mb-6 w-full">
                  <li className="flex items-center">
                    <FaUsers className="text-primary mr-2" />
                    Dohled nad komunitou
                  </li>
                  <li className="flex items-center">
                    <FaExclamationTriangle className="text-primary mr-2" />
                    Řešení nahlášení a sporů
                  </li>
                  <li className="flex items-center">
                    <FaUserCheck className="text-primary mr-2" />
                    Kontrola dodržování pravidel
                  </li>
                  <li className="flex items-center">
                    <FaComments className="text-primary mr-2" />
                    Asistence novým hráčům
                  </li>
                </ul>

                <div className="mt-auto">
                  <a href={`mailto:mod${mod}@server.cz`} className="team-button bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md inline-flex items-center space-x-2">
                    <FaEnvelope />
                    <span>mod{mod}@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}