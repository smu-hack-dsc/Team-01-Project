import React, { useState } from 'react';
import { ProjectCard } from 'components/ProjectCard';

const Filter = () => {
  const projectsData = [
    // project data here
  ];

  const [selectedFilter, setSelectedFilter] = useState('all'); // Initial filter value is 'all'

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredProjects = selectedFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === selectedFilter);

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="filter" className="mr-2 font-DMSans">Filter:</label>
        <select
          id="filter"
          value={selectedFilter}
          onChange={handleFilterChange}
          className="px-2 py-1 rounded border"
        >
          <option value="all">All</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
