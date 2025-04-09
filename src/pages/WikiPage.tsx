import { useState, useMemo } from 'react';
import { FaSearch, FaPlay, FaMoneyBill, FaCar, FaChevronRight } from 'react-icons/fa';
import { wikiData, WikiArticle } from '../data/wiki';

const iconMap = {
  FaPlay,
  FaMoneyBill,
  FaCar,
};

export default function WikiPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<WikiArticle | null>(null);

  const filteredArticles = useMemo(() => {
    if (!searchQuery) return [];

    return wikiData.flatMap(category => 
      category.articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    );
  }, [searchQuery]);

  const currentCategory = wikiData.find(cat => cat.id === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Wiki <span className="text-primary">NaturaRP</span>
        </h1>
        <p className="text-gray-400">
          Kompletní průvodce pro hráče NaturaRP
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Hledat v dokumentaci..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-secondary-light/50 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      {/* Search Results */}
      {searchQuery && filteredArticles.length > 0 && (
        <div className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6">Výsledky vyhledávání</h2>
          <div className="grid gap-4">
            {filteredArticles.map(article => (
              <button
                key={article.id}
                onClick={() => {
                  setSelectedArticle(article);
                  setSearchQuery('');
                }}
                className="text-left team-card p-6 hover:bg-secondary-light/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary mb-2">{article.title}</h3>
                <p className="text-gray-400">{article.content.substring(0, 150)}...</p>
                <div className="flex gap-2 mt-4">
                  {article.tags.map(tag => (
                    <span key={tag} className="bg-primary/20 text-primary px-2 py-1 rounded-md text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Categories Grid */}
      {!searchQuery && !selectedCategory && !selectedArticle && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {wikiData.map(category => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="team-card p-8 text-left hover:bg-secondary-light/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-400">
                  {category.articles.length} článků
                </p>
              </button>
            );
          })}
        </div>
      )}

      {/* Category Articles */}
      {selectedCategory && !selectedArticle && currentCategory && (
        <div className="animate-fade-in">
          <button
            onClick={() => setSelectedCategory(null)}
            className="text-primary hover:text-primary-light mb-6 flex items-center"
          >
            <FaChevronRight className="transform rotate-180 mr-2" />
            Zpět na kategorie
          </button>
          <h2 className="text-2xl font-bold mb-6">{currentCategory.title}</h2>
          <div className="grid gap-4">
            {currentCategory.articles.map(article => (
              <button
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="team-card p-6 text-left hover:bg-secondary-light/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary mb-2">{article.title}</h3>
                <p className="text-gray-400">{article.content.substring(0, 150)}...</p>
                <div className="flex gap-2 mt-4">
                  {article.tags.map(tag => (
                    <span key={tag} className="bg-primary/20 text-primary px-2 py-1 rounded-md text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Article Content */}
      {selectedArticle && (
        <div className="animate-fade-in">
          <button
            onClick={() => {
              setSelectedArticle(null);
              if (!selectedCategory) setSearchQuery('');
            }}
            className="text-primary hover:text-primary-light mb-6 flex items-center"
          >
            <FaChevronRight className="transform rotate-180 mr-2" />
            {selectedCategory ? 'Zpět na články' : 'Zpět na výsledky'}
          </button>
          <div className="team-card p-8">
            <h2 className="text-3xl font-bold mb-6">{selectedArticle.title}</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400">{selectedArticle.content}</p>
            </div>
            <div className="flex gap-2 mt-6">
              {selectedArticle.tags.map(tag => (
                <span key={tag} className="bg-primary/20 text-primary px-2 py-1 rounded-md text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}