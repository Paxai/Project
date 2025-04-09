import { Menu, Transition } from '@headlessui/react';
import { FaUsers, FaBars, FaDiscord } from 'react-icons/fa';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  handleDiscordAuth: () => void;
  playerCount: number | null;
  maxPlayers: number | null;
}

export default function Navigation({ currentPage, setCurrentPage, handleDiscordAuth, playerCount, maxPlayers }: NavigationProps) {
  return (
    <nav className="bg-secondary-light/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/logo.png" alt="Server Logo" className="h-10 w-auto" />
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <a 
                  href="#" 
                  onClick={() => setCurrentPage('home')}
                  className={`${currentPage === 'home' ? 'text-primary' : 'text-gray-300'} hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Domů
                </a>
                <a 
                  href="#" 
                  onClick={() => setCurrentPage('rules')}
                  className={`${currentPage === 'rules' ? 'text-primary' : 'text-gray-300'} hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Pravidla
                </a>
                <a 
                  href="#" 
                  onClick={() => setCurrentPage('team')}
                  className={`${currentPage === 'team' ? 'text-primary' : 'text-gray-300'} hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Tým
                </a>
                <a 
                  href="#" 
                  onClick={() => setCurrentPage('wiki')}
                  className={`${currentPage === 'wiki' ? 'text-primary' : 'text-gray-300'} hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Wiki
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Player Counter */}
            <div className="bg-secondary-light/70 px-4 py-2 rounded-md flex items-center space-x-2">
              <FaUsers className="text-primary" />
              <span className="text-sm">
                {playerCount !== null ? `${playerCount}/${maxPlayers}` : '...'}
              </span>
            </div>

            <button 
              onClick={handleDiscordAuth}
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
            >
              <FaDiscord className="text-xl" />
              <span>PŘIHLÁSIT PŘES DISCORD</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-secondary-light focus:outline-none">
                <FaBars className="h-6 w-6" />
              </Menu.Button>

              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-in"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-secondary-light rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={() => setCurrentPage('home')}
                          className={`${
                            active ? 'bg-primary text-white' : 'text-gray-300'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          Domů
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={() => setCurrentPage('rules')}
                          className={`${
                            active ? 'bg-primary text-white' : 'text-gray-300'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          Pravidla
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={() => setCurrentPage('team')}
                          className={`${
                            active ? 'bg-primary text-white' : 'text-gray-300'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          Tým
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={() => setCurrentPage('wiki')}
                          className={`${
                            active ? 'bg-primary text-white' : 'text-gray-300'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          Wiki
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleDiscordAuth}
                          className={`${
                            active ? 'bg-[#5865F2]' : 'bg-[#4752C4]'
                          } text-white group flex rounded-md items-center w-full px-2 py-2 text-sm mt-2`}
                        >
                          <FaDiscord className="mr-2" />
                          Přihlásit přes Discord
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}