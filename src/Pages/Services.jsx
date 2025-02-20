

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { serviceCategories } from '../Utils';

const CategoryList = ({ categories, onSelect }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {categories?.map(category => {
      // Get the first service's pricing
      const firstServicePricing = category.pricing[category.subServices[0]];
      
      // Function to safely display pricing
      const renderPricing = (pricing) => {
        if (!pricing) return null;
        
        // Handle different pricing structures
        if (typeof pricing === 'number') {
          return <div className="text-sm">
            <span className="font-semibold text-gray-700">₹{pricing}</span>
          </div>;
        }
        
        // Handle per hour pricing
        if (pricing.perHour) {
          return <div className="text-sm">
            <span className="text-gray-500">Starting from: </span>
            <span className="font-semibold text-gray-700">₹{pricing.perHour}/hr</span>
          </div>;
        }
        
        // Handle per person pricing
        if (pricing.perPerson) {
          return <div className="text-sm">
            <span className="text-gray-500">Per person: </span>
            <span className="font-semibold text-gray-700">₹{pricing.perPerson}</span>
          </div>;
        }
        
        // Handle key-value pair pricing
        if (typeof pricing === 'object') {
          return Object.entries(pricing).slice(0, 2).map(([type, price]) => (
            <div key={type} className="text-sm">
              <span className="text-gray-500 capitalize">{type}: </span>
              <span className="font-semibold text-gray-700">₹{price}</span>
            </div>
          ));
        }
        
        return null;
      };

      return (
        <div 
          key={category.id} 
          className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border border-gray-100"
          onClick={() => onSelect(category)}
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-indigo-600">{category.name}</h3>
            <div className="flex items-center text-gray-600">
              <span className="text-sm">{category.subServices.length} specialized services</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.subServices.slice(0, 3).map((service) => (
                <span 
                  key={service} 
                  className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-full font-medium"
                >
                  {service}
                </span>
              ))}
              {category.subServices.length > 3 && (
                <span className="px-3 py-1 text-sm bg-gray-50 text-gray-600 rounded-full font-medium">
                  +{category.subServices.length - 3} more
                </span>
              )}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="grid grid-cols-1 gap-2">
                {renderPricing(firstServicePricing)}
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

const ServiceForm = ({ category, onSubmit }) => {
  const [selectedSubService, setSelectedSubService] = useState('');
  const [details, setDetails] = useState({});
  const [priceOptions, setPriceOptions] = useState([]);

  useEffect(() => {
    if (selectedSubService) {
      const pricing = category.pricing[selectedSubService];
      
      if (typeof pricing === 'object') {
        if (pricing.perHour) {
          setPriceOptions(Object.entries(pricing.subject || pricing.language || pricing.instrument || pricing.exam));
        } else if (pricing.perPerson) {
          setPriceOptions([]);
        } else {
          setPriceOptions(Object.entries(pricing));
        }
      }
    }
  }, [selectedSubService, category.pricing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      category: category.name,
      subService: selectedSubService,
      details,
      price: calculatePrice()
    });
  };

  const calculatePrice = () => {
    const pricing = category.pricing[selectedSubService];
    
    if (pricing?.perHour) {
      return details.hours * (pricing.perHour + (details.subjectType ? pricing[pricing.subject ? 'subject' : 'language'][details.subjectType] : 0));
    }
    if (pricing?.perPerson) {
      return details.guests * pricing.perPerson;
    }
    if (typeof pricing === 'number') return pricing;
    if (pricing?.base) return pricing.base + (details.area * pricing.perSqFt);
    if (details.priceKey) return pricing[details.priceKey];
    
    return Object.values(pricing)[0];
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
        {category.name} Services
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Select Service Type</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedSubService}
            onChange={(e) => {
              setSelectedSubService(e.target.value);
              setDetails({});
            }}
            required
          >
            <option value="">Select a service</option>
            {category?.subServices?.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>

        {selectedSubService && (
          <div className="space-y-4">
            {category.pricing[selectedSubService]?.perHour ? (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Subject/Type</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    onChange={(e) => setDetails({ ...details, subjectType: e.target.value })}
                    required
                  >
                    {Object.entries(category.pricing[selectedSubService].subject || 
                                  category.pricing[selectedSubService].language || 
                                  category.pricing[selectedSubService].instrument || 
                                  category.pricing[selectedSubService].exam).map(([key]) => (
                      <option key={key} value={key}>{key}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Hours Required</label>
                  <input
                    type="number"
                    min="1"
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    onChange={(e) => setDetails({ ...details, hours: parseInt(e.target.value) })}
                  />
                </div>
              </>
            ) : priceOptions.length > 0 ? (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Service Variant</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={(e) => setDetails({ priceKey: e.target.value })}
                  required
                >
                  {priceOptions.map(([key, value]) => (
                    <option key={key} value={key}>
                      {key} (₹{value})
                    </option>
                  ))}
                </select>
              </div>
            ) : category.pricing[selectedSubService]?.perPerson ? (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Number of Guests</label>
                <input
                  type="number"
                  min="1"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={(e) => setDetails({ guests: parseInt(e.target.value) })}
                />
              </div>
            ) : typeof category.pricing[selectedSubService] === 'object' && 
              category.pricing[selectedSubService].base ? (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Area (sq.ft)</label>
                <input
                  type="number"
                  min="1"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={(e) => setDetails({ area: parseInt(e.target.value) })}
                />
              </div>
            ) : null}
          </div>
        )}

        <button 
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Calculate Price
        </button>
      </form>
    </div>
  );
};

const PriceDisplay = ({ service }) => (
  <div className="max-w-2xl mx-auto mt-6 bg-white rounded-lg shadow-md">
    {service && (
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-indigo-600">Service Details</h3>
        <div className="space-y-2">
          <p className="text-gray-600">Category: {service.category}</p>
          <p className="text-gray-600">Service: {service.subService}</p>
          {service.details.area && <p className="text-gray-600">Area: {service.details.area} sq.ft</p>}
          {service.details.quantity && <p className="text-gray-600">Quantity: {service.details.quantity}</p>}
          {service.details.guests && <p className="text-gray-600">Guests: {service.details.guests}</p>}
          {service.details.hours && <p className="text-gray-600">Hours: {service.details.hours}</p>}
          {service.details.subjectType && <p className="text-gray-600">Type: {service.details.subjectType}</p>}
          {service.details.priceKey && <p className="text-gray-600">Variant: {service.details.priceKey}</p>}
          <div className="mt-6 pt-4 border-t">
            <p className="text-2xl font-bold text-indigo-600">Total Price: ₹{service.price}</p>
            <button className="w-full mt-4 py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
);

function Services() {
  const location = useLocation();
  const data = location.state;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setSelectedCategory(data || null);
  }, [data]);

  // Search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsSearching(query.length > 0);

    if (query.length === 0) {
      setSearchResults([]);
      return;
    }

    const results = serviceCategories.reduce((acc, category) => {
      const matchingServices = category.subServices.filter(service =>
        service.toLowerCase().includes(query.toLowerCase())
      ).map(service => ({
        category,
        service
      }));
      return [...acc, ...matchingServices];
    }, []);

    setSearchResults(results);
  };

  const handleSearchResultClick = (result) => {
    setSelectedCategory(result.category);
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">
          Professional Service Marketplace
        </h1>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for services..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            )}
          </div>

          {/* Search Results Dropdown */}
          {isSearching && searchResults.length > 0 && (
            <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
              {searchResults.map((result, index) => (
                <div
                  key={`${result.category.id}-${result.service}-${index}`}
                  className="p-4 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                  onClick={() => handleSearchResultClick(result)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-indigo-600 font-medium">{result.service}</p>
                      <p className="text-sm text-gray-500">{result.category.name}</p>
                    </div>
                    <span className="text-gray-400">→</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results Message */}
          {isSearching && searchQuery && searchResults.length === 0 && (
            <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-4 text-center text-gray-500">
                No services found for "{searchQuery}"
              </div>
            </div>
          )}
        </div>

        {!selectedCategory ? (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
              Explore Service Categories
            </h2>
            <CategoryList 
              categories={serviceCategories} 
              onSelect={setSelectedCategory} 
            />
          </div>
        ) : (
          <div className="space-y-6">
            <button 
              className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
              onClick={() => {
                setSelectedCategory(null);
                setSelectedService(null);
              }}
            >
              ← Back to Categories
            </button>
            <ServiceForm 
              category={selectedCategory} 
              onSubmit={setSelectedService} 
            />
            <PriceDisplay service={selectedService} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;