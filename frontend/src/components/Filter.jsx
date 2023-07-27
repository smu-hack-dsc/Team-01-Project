import React, { useState } from 'react';
import ProjectCard from 'components/ProjectCard';
import { IonIcon } from '@ionic/react';
import { filter } from 'ionicons/icons';

const Filter = () => {
  const projectsData = [
    // project data for filtering logic? idk
  ];

  const categorySubcategories = {
    'My Interests': ['interest1', 'interest2', 'interest3'],
    'VO': ['vo1', 'vo2', 'vo3'],
    'Skill': ['skill1', 'skill2', 'skill3'],
    'Date': ['idk what to do for date lol'],
  };

  const categories = Object.keys(categorySubcategories);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubCategory(null);
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const filteredProjects = projectsData.filter(project => {
    if (!selectedCategory) return true; // If no category is selected, show all projects

    if (selectedSubCategory) {
      // Filter based on both category and subcategory
      return project.category === selectedCategory && project.subcategory === selectedSubCategory;
    } else {
      // Only filter based on category
      return project.category === selectedCategory;
    }
  });

  const subcategories = selectedCategory ? categorySubcategories[selectedCategory] : [];

  return (
    <div className="font-DMSans">
      <div className="flex justify-center items-center">
        <IonIcon icon={ filter } size="small"/>
          <select
            value={selectedCategory || ''}
            onChange={handleCategoryChange}
            className="ml-1 px-2 py-1 rounded border mr-2"
          >
            <option value="">All</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {selectedCategory && (
            <select
              value={selectedSubCategory || ''}
              onChange={handleSubCategoryChange}
              className="px-2 py-1 rounded border"
            >
              <option value="">All</option>
              {subcategories.map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
              </option>
              ))}
            </select>
          )}
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
