import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})

export class ResourcesComponent {
  searchInput: string = ''; // Property to hold the search input
  selectedCategory: string = '';  //Property to hold the filter value for categories


  //List of all resources put into array for each card. This array is loop through to update displayed cards
  //Known issues: 
  //1. Trying to break up the description into multiple lines to look better causes error
  //2. Filter does not work on cards
  resources: Array<{ title: string, category: string, description: string, link: string }> = [
    { title: 'VA Regional Office (VERA) appointment scheduler', category: 'Appointment Scheduling', 
    description: 'This site is for scheduling one-on-one appointments with a VA regional office.', 
    link: 'https://va.my.site.com/VAVERA/s/' },
    { title: 'The Clinicians Guide', category: 'Health', 
    description: 'This guide is designed to assist clinicians when performing compensation and pension (C&P) examinations. Since C&P examinations differ markedly from traditional medical examinations, special clinician guidance is required. This guide provides information for performing examinations that meet the requirements of the federal law.', 
    link: 'https://nebula.wsimg.com/abfac4b8e09be3ac271b628f32919e7a?AccessKeyId=1FBD76F67BF87C8DD859&disposition=0&alloworigin=1' },
    { title: 'State Veteran Benefit Finder', category: 'Misc.', 
    description: 'This tool allows users to filter state-level veteran benefits by type of benefit, beneficiary, and state to identify benefits for which they may be eligible, providing a unique and invaluablereference. The accompanying report offers analysis of trends in state-level benefits and includes recommendations for an array of key stakeholders, from veterans to those who serve them across domains.', 
    link: 'https://www.cnas.org/publications/reports/state-veteran-benefit-finder' },
    { title: 'Application for Burial Benefits', category: 'Death Benefits', 
    description: 'This page aims to assist surviving family and friends of a Veteran who has unfortunately passed away. By filling out this application, applicants can obtain benefits aimed to help cover burial, funeral, and transportation costs', 
    link: 'https://www.va.gov/burials-and-memorials/application/530/introduction' },
    { title: 'VALife - Life Insurance', category: 'Death Benefits', 
    description: 'This page discusses life insurance premium rates, benefit eligiblity,  insurance benefits, beneficiary resources, applications and more regarding life insurance through VA Life. Please note, applicants who switch to VA Life from S-DVI can keep their S-DVI while waiting', 
    link: 'https://www.va.gov/life-insurance/options-eligibility/valife/' },
    { title: 'Arlington National Cemetary Funeral Scheduling', category: 'Death Benefits', 
    description: 'This link will take you to the main funerals page for the Arlington National Cemetary, with links to determining eligiblity, associated costs, required documents, and other information needed to schedule a funeral service.', 
    link: 'https://www.arlingtoncemetery.mil/Funerals/Scheduling-a-Funeral' },
    { title: 'Burial Flags', category: 'Death Benefits', 
    description: 'This page will provide users resources and information about obtaining a burial flag and eligiblity for obtaining this flag', 
    link: 'https://www.arlingtoncemetery.mil/Funerals/Scheduling-a-Funeral' },
    { title: 'CEM - Burial Markers', category: 'Death Benefits', 
    description: 'Information about obtaining free headstones, markers, or medallions for the deceased. Includes eligiblity for said items', 
    link: 'https://www.cem.va.gov/hmm/' },
    { title: 'Presidential Memorial Certificates (PMC)', category: 'Death Benefits', 
    description: 'Engraved paper signed by the current president to honor those who have served. Information regarding eligiblity, application, and certificate transportation.', 
    link: 'https://www.va.gov/burials-memorials/memorial-items/presidential-memorial-certificates/' },
    { title: 'Benefits Delivery at Discharge (BDD)', category: 'Death Benefits', 
    description: 'Information developed from r/VeteransBenefits relating to applying for Benefits at Discharge. Must be completed 90-180 days before separation.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/bdd/' },
    { title: 'Aggregated Service Connection', category: 'Disability Compensation', 
    description: 'Information developed from r/VeteransBenefits relating to applying for Benefits at Discharge. Helps users to understand how to determine expected benefits from rating of pre-service (pre-existing) and post-service conditions based on aggravation.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/agg/' },
    
  ];
  
  // resourceItems: Array<{ title: string, category: string, description: string, link: string }> = [
  //   { title: 'VA Regional Office (VERA) appointment scheduler', category: 'Appointment Scueduling', 
  //   description: 'This site is for scheduling one-on-one appointments with a VA regional office.', 
  //   link: 'https://va.my.site.com/VAVERA/s/' },
  //   { title: 'VA Regional Office (VERA) appointment scheduler', category: 'Appointment Scueduling', 
  //   description: 'This site is for scheduling one-on-one appointments with a VA regional office.', 
  //   link: 'https://va.my.site.com/VAVERA/s/' },
  //   { title: 'VA Regional Office (VERA) appointment scheduler', category: 'Appointment Scueduling', 
  //   description: 'This site is for scheduling one-on-one appointments with a VA regional office.', 
  //   link: 'https://va.my.site.com/VAVERA/s/' },
  //   { title: 'VA Regional Office (VERA) appointment scheduler', category: 'Appointment Scueduling', 
  //   description: 'This site is for scheduling one-on-one appointments with a VA regional office.', 
  //   link: 'https://va.my.site.com/VAVERA/s/' },
  //   // Add more resource items with the required properties
  // ];

  filteredResources: any[] = this.resources;
  resource: any; // Declare the resource property


  filterResources() {
    return this.resources.filter(resource => {
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
    this.selectedCategory = '';
    this.updateFilteredResources();
  }

  searchResources() {
    console.log(this.searchInput.toLowerCase());
    const searchTerm = this.searchInput.toLowerCase();

    // Filter the resource items based on the search input
    const searchResults = this.resources.filter(resource =>
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
