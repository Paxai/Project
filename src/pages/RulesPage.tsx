import { FaChevronRight } from 'react-icons/fa';
import { rules } from '../data/rules';

interface RulesPageProps {
  handleDiscordAuth: () => void;
}

export default function RulesPage({ handleDiscordAuth }: RulesPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Serverová <span className="text-primary">Pravidla</span></h1>
        <p className="text-gray-400">
          Pro zajištění příjemného herního prostředí pro všechny hráče je nutné dodržovat následující pravidla.
        </p>
      </div>

      <div className="grid gap-8 animate-slide-up">
        {rules.map((rule, index) => (
          <div key={index} className="team-card group">
            <h2 className="text-2xl font-bold text-primary mb-4">{rule.title}</h2>
            <p className="text-gray-400 mb-4">{rule.description}</p>
            {rule.subrules && (
              <ul className="space-y-2">
                {rule.subrules.map((subrule, subIndex) => (
                  <li key={subIndex} className="text-gray-400 flex items-start">
                    <FaChevronRight className="text-primary mt-1 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    {subrule}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-16 animate-fade-in">
        <p className="text-gray-400 mb-6">
          Neznalost pravidel neomlouvá. V případě jejich porušení může dojít k udělení trestu.
        </p>
        <button onClick={handleDiscordAuth} className="team-button bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-md font-medium">
          Připojit se na Discord
        </button>
      </div>
    </div>
  );
}