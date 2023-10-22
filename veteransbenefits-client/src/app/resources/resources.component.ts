import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})

export class ResourcesComponent {
  searchInput: string = ''; // Property to hold the search input
  selectedCategory: string = '';  //Property to hold the filter value for categories

  resources: Array<{ title: string, category: string, description: string, link: string }> = [
    { title: 'VA Regional Office (VERA) appointment scheduler', category: 'Appointment Scueduling', 
    description: 'This site is for scheduling one-on-one appointments with a VA regional office.', 
    link: 'https://va.my.site.com/VAVERA/s/' },
    { title: 'VA Regional Office (VERA) appointment scheduler', category: 'Appointment Scueduling', 
    description: 'This site is for scheduling one-on-one appointments with a VA regional office.', 
    link: 'https://va.my.site.com/VAVERA/s/' },
  ];
  
  resourceItems: Array<{ title: string, category: string, description: string, link: string }> = [
    { title: 'VA Regional Office (VERA) appointment scheduler', category: 'Appointment Scueduling', 
    description: 'This site is for scheduling one-on-one appointments with a VA regional office.', 
    link: 'https://va.my.site.com/VAVERA/s/' },
    { title: 'VA Regional Office (VERA) appointment scheduler', category: 'Appointment Scueduling', 
    description: 'This site is for scheduling one-on-one appointments with a VA regional office.', 
    link: 'https://va.my.site.com/VAVERA/s/' },
    // Add more resource items with the required properties
  ];

  filteredResources: any[] = this.resources;

  filterResources() {
    return this.resourceItems.filter(resource => {
      // Check if the resource's category is selected or no category is selected
      const isCategoryMatch = this.selectedCategory.length === 0 || this.selectedCategory.includes(resource.category);
      
      // Check if the search input is empty or if the title or description contains the search input
      const isSearchMatch = this.searchInput === '' ||
        resource.title.toLowerCase().includes(this.searchInput.toLowerCase()) ||
        resource.description.toLowerCase().includes(this.searchInput.toLowerCase());

      // Return true if both category and search match, otherwise false
      return isCategoryMatch && isSearchMatch;
    });
  }

  updateFilteredResources() {
    this.filteredResources = this.filterResources();
  }

  resetCategories() {
    this.selectedCategory = ' ';
    this.updateFilteredResources();
  }

  searchResources() {
    console.log(this.searchInput.toLowerCase());
    const searchTerm = this.searchInput.toLowerCase();

    // Filter the resource items based on the search input
    const searchResults = this.resourceItems.filter(resource =>
      resource.title.toLowerCase().includes(searchTerm) ||
      resource.description.toLowerCase().includes(searchTerm)
    );
    this.filteredResources = searchResults;
    this.updateFilteredResources();
  }

  isCategorySelected(category: string) {
    return this.selectedCategory.includes(category) || this.selectedCategory.length === 0;
  }
}
