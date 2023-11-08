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
    { title: 'Benefits Delivery at Discharge (BDD)', category: 'Disability Compensation', 
    description: 'Information developed from r/VeteransBenefits relating to applying for Benefits at Discharge. Must be completed 90-180 days before separation.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/bdd/' },
    { title: 'Aggregated Service Connection', category: 'Disability Compensation', 
    description: 'Information developed by r/VeteransBenefits relating to applying for Benefits at Discharge. Helps users to understand how to determine expected benefits from rating of pre-service (pre-existing) and post-service conditions based on aggravation.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/agg/' },
    { title: 'VA Disability Claim Types', category: 'Disability Compensation', 
    description: 'Information developed from r/VeteransBenefits relating to different disability claim types. Types of claims include a Deferred Claim, Fully Developed Claim, Increase Claim, Inferred Claim, Original Claim, Secondary Claim, Standard Claim, Supplemental Claim, and 1151 Claim. There is not set time period you must wait for to file a claim increase.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/claimtype/' },
    { title: 'Buddy Letters Information', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. Buddy Letters can be used if an individual is missing evidence or context in their military records regarding possible disabilities that can be helpful for filing a claim.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/buddy/' },
    { title: 'Buddy Letter Form (VA Form 21-10210)', category: 'Disability Compensation', 
    description: 'A form that can be filled out by someone has witnessed a negative impact to your life caused by a disability in circumstances where your military records are missing evidence or context regarding this information. Helpful for filling disability claims', 
    link: 'https://www.vba.va.gov/pubs/forms/VBA-21-10210-ARE.pdf' },
    { title: 'Intent to File Form (VA-Form 21-0966)', category: 'Disability Compensation', 
    description: 'A form for establishing your intent to file and effective date. Your effective date is critical because it is used to determine the date the Veteran gets paid from.', 
    link: 'https://www.vba.va.gov/pubs/forms/vba-21-0966-are.pdf' },
    { title: 'Commonly Overlooked Disabilities', category: 'Disability Compensation', 
    description: 'A list of disabilities you may be able to file a claim for that are frequently forgotten. Compiled by r/VeteransBenefits.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/commonly/' },
    { title: 'Compensation and Pension Examinations (C&Ps)', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. A step by step walkthrough for a C&P examination including steps to be taken before, during, and after the examination.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/cnp/' },
    { title: 'Veterans Transportation Service Locations', category: 'Misc.', 
    description: 'A state by state list of free transportation services available to veterans.', 
    link: 'https://www.va.gov/HEALTHBENEFITS/vtp/map.asp' },
    { title: 'Congressional Inquiry', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. Do you feel like your claim is lost in VA purgatory? Or are having some other issue with the VA? If so, contacting your representative might help things along. This resource provides a breakdown on how to contact a representative to speed to get updated informationr regarding your claim(s).', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/congress/' },
    { title: 'Dealing With A Bad Examiner', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. A list of steps an individual can take in cases of an unfair examination. Includes the Memorandum for Record (MFR) Form (VA Form 21-4138).', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/badex/' },
    { title: 'Memorandum for Record (MFR) Form (VA Form 21-4138)', category: 'Disability Compensation', 
    description: 'A form that can be filled out after a Compensation and Pension Examination (C&P) in which you felt you had an unfair or bad examiner.', 
    link: 'https://www.vba.va.gov/pubs/forms/VBA-21-4138-ARE.pdf' },
    { title: 'Disability Benefit Questionnaire (DBQ) Information', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. Information regarding the Disability Benefit Questionnaire (DBQ). The DBQ is used to determine the severity of a Veteran\'s disability, but does not help determine if the disability is service-connected. A DBQ is not required for your disability claim or appeal to be successful. Please note that it is the position of r/VeteransBenefits that Veterans avoid going this route.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/dbq/' },
    { title: 'Effective Dates', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. Effective Dates determine when a Veteran\'s pay will start in cases of Disability Claims. This page includes information regarding these dates and how they are determined.', 
    link: 'https://www.reddit.com/r/VeteranBenefits/wiki/edate/' },
    { title: 'Filing for Aid and Attendance/Housebound Information', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits.  Information regarding application of VA Form 21-2680. This includes information about determining eligibility and how housebound or inidividuals needing aid and attendance can apply.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/aah/' },
    { title: 'Filing for Aid and Attendance/Housebound Form (VA Form 21-2680)', category: 'Disability Compensation', 
    description: 'Form used to apply for individuals who are housebound are in need of aid and attendance so that they may get assistance in their daily living.', 
    link: 'https://www.vba.va.gov/pubs/forms/VBA-21-2680-ARE.pdf' },
    { title: 'Filing a VA Disability Claim', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. A large collection and breakdown of information about filing a disability claim. VA disability is a monthly tax-free monetary benefit that ranges from over $100 to nearly $10,000 in the case of Special Monthly Compensation.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/vaclaim/' },
    { title: 'Independent Medical Opinion (IMO) / Nexus Letter', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. This page breaks down what an IMO is, how to obtain and IMO, and important information that should be included in an IMO.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/imo/' },
    { title: 'Master Condition List', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. An alphabetical list of all the conditions listed within the rating schedule as well as containing some common but not all Analogous and equivalent conditions. This list can be used to determine how certain conditions are rated from the perspective of disability claims.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/masterlist/' },
    { title: 'National Guard and Reservist Claims', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. This page contains a plethora of information aimed to help those who served in the National Guard or Reserves to recieve benefits despite the difficulty that can commonly be experienced when doing so. Much of this information relates to Line of Duty (LOD) which can help veterans established a service connection. ', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/ngr/' },
    
    
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
