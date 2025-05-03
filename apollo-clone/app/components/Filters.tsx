'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState({
    experience: searchParams.get('experience') || '',
    mode: searchParams.get('mode') || '',
    location: searchParams.get('location') || '',
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (filters.experience) params.set('experience', filters.experience);
    if (filters.mode) params.set('mode', filters.mode);
    if (filters.location) params.set('location', filters.location);
    router.push(`?${params.toString()}`);
  };

  const clearFilters = () => {
    setFilters({
      experience: '',
      mode: '',
      location: '',
    });
    router.push('');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button 
          onClick={clearFilters}
          className="text-blue-600 text-sm font-medium"
        >
          Clear All
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Show Doctors Near Me</label>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            placeholder="Enter location"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Mode of Consult</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="mode"
                value="Hospital"
                checked={filters.mode === 'Hospital'}
                onChange={handleFilterChange}
                className="h-4 w-4 text-blue-600"
              />
              <span>Hospital Visit</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="mode"
                value="Online"
                checked={filters.mode === 'Online'}
                onChange={handleFilterChange}
                className="h-4 w-4 text-blue-600"
              />
              <span>Online Consult</span>
            </label>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Experience (In Years)</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="experience"
                value="0-5"
                checked={filters.experience === '0-5'}
                onChange={handleFilterChange}
                className="h-4 w-4 text-blue-600"
              />
              <span>0-5</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="experience"
                value="6-10"
                checked={filters.experience === '6-10'}
                onChange={handleFilterChange}
                className="h-4 w-4 text-blue-600"
              />
              <span>6-10</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="experience"
                value="11-16"
                checked={filters.experience === '11-16'}
                onChange={handleFilterChange}
                className="h-4 w-4 text-blue-600"
              />
              <span>11-16</span>
            </label>
          </div>
        </div>
        
        <button
          onClick={applyFilters}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}