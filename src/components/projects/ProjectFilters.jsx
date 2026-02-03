import { useState } from 'react'
import { FiSearch, FiFilter, FiX } from 'react-icons/fi'

const ProjectFilters = ({ filters, setFilters, languages = [] }) => {
  const [showAdvanced, setShowAdvanced] = useState(false)

  const handleSearch = (e) => {
    setFilters(prev => ({ ...prev, search: e.target.value, page: 1 }))
  }

  const handleLanguageChange = (language) => {
    setFilters(prev => ({ ...prev, language, page: 1 }))
  }

  const handleSortChange = (sortBy) => {
    setFilters(prev => ({ ...prev, sortBy, page: 1 }))
  }

  const resetFilters = () => {
    setFilters({
      search: '',
      language: 'all',
      minStars: 0,
      sortBy: 'updated',
      featured: false,
      page: 1,
      limit: 12
    })
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search projects..."
          value={filters.search}
          onChange={handleSearch}
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        {filters.search && (
          <button
            onClick={() => setFilters(prev => ({ ...prev, search: '' }))}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <FiX />
          </button>
        )}
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleLanguageChange('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filters.language === 'all'
              ? 'bg-primary-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          All Languages
        </button>
        
        {languages.slice(0, 5).map((lang) => (
          <button
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filters.language === lang
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {lang}
          </button>
        ))}
        
        {languages.length > 5 && (
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center"
          >
            <FiFilter className="mr-2" />
            More
          </button>
        )}
      </div>

      {/* Sort Options */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-700 dark:text-gray-300">Sort by:</span>
        <div className="flex flex-wrap gap-2">
          {[
            { value: 'updated', label: 'Last Updated' },
            { value: 'stars', label: 'Stars' },
            { value: 'forks', label: 'Forks' },
            { value: 'name', label: 'Name' },
            { value: 'created', label: 'Created' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => handleSortChange(option.value)}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                filters.sortBy === option.value
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-gray-700 dark:text-gray-300">Advanced Filters</h4>
            <button
              onClick={() => setShowAdvanced(false)}
              className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <FiX />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Language Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Language
              </label>
              <select
                value={filters.language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <option value="all">All Languages</option>
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Minimum Stars */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Minimum Stars
              </label>
              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={filters.minStars}
                onChange={(e) => setFilters(prev => ({ ...prev, minStars: parseInt(e.target.value), page: 1 }))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>0</span>
                <span>{filters.minStars}+ stars</span>
                <span>1000+</span>
              </div>
            </div>
          </div>

          {/* Featured Filter */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured"
              checked={filters.featured}
              onChange={(e) => setFilters(prev => ({ ...prev, featured: e.target.checked, page: 1 }))}
              className="mr-2"
            />
            <label htmlFor="featured" className="text-sm text-gray-700 dark:text-gray-300">
              Show featured projects only
            </label>
          </div>

          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Reset All Filters
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default ProjectFilters