import React from 'react';
import Filter from './Filter';

export default {
  title: 'Filter',
  component: Filter
};

export const IslandFiltering = () => {
  const filterOptions = [
    { type: 'Kulkuyhteydet saariin', items: ['Vesibussi', 'Lautta', 'Silta'] },
    { type: 'Palvelut saarissa', items: ['Ravintola', 'Kahvila', 'Sauna'] },
    { type: 'Retkeily', items: ['Telttailu sallittu', 'Kaivo'] }
  ];

  const mockData = [
    ['Ravintola'],
    ['Ravintola', 'Sauna'],
    ['Telttailu sallittu', 'Vesibussi'],
    ['Kahvila', 'Vesibussi']
  ];

  return (
    <Filter
      title="Suodattimet"
      show="Näytä"
      noMatches="Ei hakutuloksia"
      clear="Tyhjennä"
      type="Saaret"
      options={filterOptions}
      onShow={selectedFilters =>
        alert(`Selekoidut filtterit: ${selectedFilters}`)
      }
      onClose={() => {}}
      countMatches={selectedFilters =>
        mockData.filter(
          data => new Set([...data, ...selectedFilters]).size === data.length
        ).length
      }
    />
  );
};

IslandFiltering.story = {
  name: 'Islands'
};
